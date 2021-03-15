<template>
  <div>
    
    <top-bar></top-bar>
    <div class="container2"></div>
    <!-- <detail-panel ref="detailPanel" @update="getQueryResult"></detail-panel> -->
  </div>
</template>

<script>
    import axios from 'axios'

    import * as d3 from 'd3'
    import TopBar from 'components/topBar/Topbar'
    import {getGraphResponse} from "network/graphrequest.js";

    export default {
      name: "Canvas",
      components:{
          TopBar
      },
      data () {
        return {
          svgArea:null,
          links:[],
          nodes:[],
          nodesName:[],
          linksName:[],
          simulation:null,
          scale:1,
          width:800,  //d3图的宽高
          height:500,
          colorList:['#FD7623','#3388B1','#D82952','#F3D737','#409071','#D64E52','#00FFFF','#8B008B'],
          guanlian:[{"id":"CCC2","group":"4"},
                   {"id":"CCC3","group":"4"}],
          testGraph:{
            "nodes":  [
              {"id":"AAA","group":"1"},
              {"id":"BBB1","group":"2"},
              {"id":"BBB2","group":"3"},
              {"id":"BBB3","group":"4"},
              {"id":"CCC1","group":"5"},
            ],


            "links": [
              {"source":"AAA","target":"BBB1","relationship":"发射","value":2},
              {"source":"AAA","target":"BBB2","relationship":"发射","value":2},
              {"source":"AAA","target":"BBB3","relationship":"发射","value":2},
            ]
          }
        }
      },
      mounted() {
        // this.getGraphData() 原本
        // console.log('get')
        // this.testGraph["nodes"]=this.$route.query.nodes
        // this.testGraph["links"]=this.$route.query.links
        // this.initGraph(this.testGraph) 
      },
      methods: {
        // getGraphData(){
        //   var _this = this
        //   this.axios.get("http://39.100.119.221:8084/api/person/"+'Rob Reiner')
        //   //   this.axios.get("person/all")
        //     .then(function (response) {
        //       console.log(response)
        //       _this.testGraph["nodes"] = [response.data]
        //       _this.initGraph(_this.testGraph)
        //     })
        //     .catch(function (error) {
        //       console.log(error)
        //     })
        // },

        initGraph(data){
          const links = data.links;
          const nodes = data.nodes;
          this.simulation = d3.forceSimulation(nodes)
            .force("link", d3.forceLink(links).id(d => d.id).distance(150))
            .force("collide",d3.forceCollide().radius(()=>30))
            .force("charge", d3.forceManyBody().strength(-10))
            .force("center", d3.forceCenter(this.width / 2, this.height / 2));

          this.svgArea = d3.select(".container2")
            .append("svg")
            .attr("viewBox", [0, 0, this.width, this.height])
            .call(d3.zoom().on("zoom",function () {
              g.attr("transform",d3.event.transform)
            }))

          this.addMarkers();

          const g = this.svgArea.append("g")
            .attr("class","content")

          this.links = g.append("g")
            .selectAll("path")
            .data(links,function (d) {
              if(typeof (d.source) === 'object'){
                return d.source.id+"_"+d.relationship+"_"+d.target.id
              }
              else{
                return d.source+"_"+d.relationship+"_"+d.target
              }
            })
            .join("path")
            .attr("marker-end", "url(#positiveMarker)")
            .attr("stroke-width", d => {
              return Math.sqrt(d.value)
            })
            .attr("stroke","#999999")
            // .attr("stroke-width",4)
            .attr("class","link")
            .attr("id",function (d) {
              if(typeof (d.source) === 'object'){
                return d.source.id+"_"+d.relationship+"_"+d.target.id
              }
              else{
                return d.source+"_"+d.relationship+"_"+d.target
              }
            })

          this.linksName = g.append("g")
            .selectAll("text")
            //
            .data(links,function (d) {
              if(typeof (d.source) === 'object'){
                return d.source.id+"_"+d.relationship+"_"+d.target.id
              }
              else{
                return d.source+"_"+d.relationship+"_"+d.target
              }
            })
            .join("text")
            .style('text-anchor','middle')
            .style('fill', 'white')
            .style('font-size', '10px')
            .style('font-weight', 'bold');

          this.linksName
            .append('textPath')
            //定位
            .attr('xlink:href',d =>{
              
              return "#"+d.source.id+"_"+d.relationship+"_"+d.target.id
            })
            .attr('startOffset','50%')
            .text(d=>d.relationship);

          this.nodes = g.append("g")//节点
            .selectAll("circle")
            .data(nodes,d=>d.id)
            .join("circle")
            .attr("r", 30)
            .attr("class","node")
            .attr("fill", this.color)
            .on("click",this.queryTest)
            // .on("click",this.select)//待会改回来
            .call(this.drag(this.simulation));
           

          this.nodes.append("title")
            .text(d => d.id);

          this.nodesName = g.append("g")
            .selectAll("text")
            .data(nodes)
            .join("text")
            .text(d => d.id)
            .attr("dx",function () {
              return this.getBoundingClientRect().width/2*(-1)
            })
            .attr("dy",50)
            .attr("class","nodeName")

          this.simulation.on("tick", () => {
            this.links
              .attr("d", function(d){
                if(d.source.x<d.target.x){
                  return "M "+d.source.x+" "+ d.source.y +" L "+d.target.x+" "+d.target.y
                }
                else{
                  return "M "+d.target.x+" "+ d.target.y +" L "+d.source.x+" "+d.source.y
                }
              })
              .attr("marker-end",function (d) {
                if(d.source.x<d.target.x){
                  return "url(#positiveMarker)"
                }
                else{
                  return null
                }
              })
              .attr("marker-start",function (d) {
                if(d.source.x<d.target.x){
                  return null
                }
                else{
                  return "url(#negativeMarker)"
                }
              })

            this.nodes
              .attr("cx", d => d.x)
              .attr("cy", d => d.y);

            this.nodesName
              .attr("x",d => d.x)
              .attr("y",d => d.y);
          });

        },

        addMarkers(){
          const positiveMarker = this.svgArea.append("marker")
            .attr("id","positiveMarker")
            .attr("orient","auto")
            .attr("stroke-width",2)
            .attr("markerUnits", "strokeWidth")
            .attr("markerUnits", "userSpaceOnUse")
            .attr("viewBox", "0 -5 10 10")
            .attr("refX", 35)
            .attr("refY", 0)
            .attr("markerWidth", 12)
            .attr("markerHeight", 12)
            .append("path")
            .attr("d", "M 0 -5 L 10 0 L 0 5")
            .attr('fill', '#999')
            .attr("stroke-opacity", 0.6);
          const negativeMarker = this.svgArea.append("marker")
            .attr("id","negativeMarker")
            .attr("orient","auto")
            .attr("stroke-width",2)
            .attr("markerUnits", "strokeWidth")
            .attr("markerUnits", "userSpaceOnUse")
            .attr("viewBox", "0 -5 10 10")
            .attr("refX", -25)
            .attr("refY", 0)
            .attr("markerWidth", 12)
            .attr("markerHeight", 12)
            .append("path")
            .attr("d", "M 10 -5 L 0 0 L 10 5")
            .attr('fill', '#999')
            .attr("stroke-opacity", 0.6);
        },

        // updateGraph(data){
        //   const links = data.links;
        //   const nodes = data.nodes;

        //   this.links = this.links
        //     .data(links,function(d){
        //       if(typeof (d.source) === 'object'){
        //         return d.source.id+"_"+d.relationship+"_"+d.target.id
        //       }
        //       else{
        //         return d.source+"_"+d.relationship+"_"+d.target
        //       }
        //     })
        //     .join('path')
        //     .attr("stroke", "#999")
        //     .attr("stroke-opacity", 0.6)
        //     .attr("stroke-width", d =>{
        //       return  Math.sqrt(d.value)
               
        //     })
        //     .attr("marker-end", "url(#positiveMarker)")
        //     .merge(this.links)
        //     .attr('id',function (d) {
        //       if(typeof (d.source) === 'object'){
        //         return d.source.id+"_"+d.relationship+"_"+d.target.id
        //       }
        //       else{
        //         return d.source+"_"+d.relationship+"_"+d.target
        //       }
        //     })
        //     .attr("class","link");

        //   this.linksName = this.linksName
        //     .data(links,function(d){
        //       if(typeof (d.source) === 'object'){
        //         return d.source.id+"_"+d.relationship+"_"+d.target.id
        //       }
        //       else{
        //         return d.source+"_"+d.relationship+"_"+d.target
        //       }
        //     })
        //     .join('text')
        //     .style('text-anchor','middle')
        //     .style('fill', 'white')
        //     .style('font-size', '10px')
        //     .style('font-weight', 'bold');

        //   this.linksName
        //     .append('textPath')
        //     .attr(
        //       'xlink:href',function (d) {
        //         if(typeof (d.source) === 'object'){
        //           return "#"+d.source.id+"_"+d.relationship+"_"+d.target.id
        //         }
        //         else{
        //           return "#"+d.source+"_"+d.relationship+"_"+d.target
        //         }
        //       }
        //     )
        //     .attr('startOffset','50%')
        //     .merge(this.linksName)
        //     .text(d=> d.relationship);

        //   this.nodes = this.nodes
        //     .data(nodes,d=>d.id)
        //     .join("circle")
        //     .attr("r", 30)
        //     .attr("class","node")
        //     .attr("fill", this.color)
        //     .merge(this.nodes)
        //     .on("click",this.select)
        //     .call(this.drag(this.simulation));
        //     //下面

        //   this.nodes.append("title")
        //     .text(d => d.id);

        //   this.nodesName =  this.nodesName
        //     .data(nodes)
        //     .join("text")
        //     .merge(this.nodesName)
        //     .text(function (d) {
        //       return d.id
        //     })
        //     .attr("dx",function () {
        //       return this.getBoundingClientRect().width/2*(-1)
        //     })
        //     .attr("dy",50)
        //     .attr("class","nodeName")

        //   this.simulation.nodes(nodes)
        //   this.simulation.force("link").links(links)
        //   this.simulation.alpha(0.2).restart()
        // },

        color(d) {
          return this.colorList[d.group]
        },

        drag(simulation) {
          function dragstarted(d) {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          }

          function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
          }

          function dragended(d) {
            if (!d3.event.active) simulation.alphaTarget(0.5);
            d.fx = null
            d.fy = null
          }

          return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
        },

        select(d){
          var _this = this
          let data = {}
          for(var i in d.obj){
            let ifArray = d.obj[i] instanceof Array
            if(!ifArray){
              data[i] = d.obj[i]
            }
          }
          _this.$refs.detailPanel.currentNode= data
          _this.$refs.detailPanel.ifShow = true
        },

        getQueryResult(result,currentNode,currentType){
          for(var i=0;i<result.length;i++){//result:查询得到的节点组
            let flag = true
            for(var j=0;j<this.testGraph.nodes.length;j++){
              if(this.testGraph.nodes[j].id === result[i].id){
                flag = false
              }
            }
            if(flag){
              this.testGraph.nodes.push(result[i])
            }
            else{
              console.log("已存在的节点")
              console.log(result[i])
            }
            this.testGraph.links.push({
              "source":currentNode.name,
              "target":result[i].id,
              "value":5,
              "relationship":currentType
            })
          }

          for(var i=this.testGraph.links.length-1;i>=0;i--){
            if(this.testGraph.links[i].source.id === currentNode.name && this.testGraph.links[i].relationship !== currentType){
              let ifRemove = true;
              for(var k=0;k<result.length;k++){
                if(result[k].id === this.testGraph.links[i].target.id){
                  ifRemove = false
                  console.log("不移除此节点"+result[k].id)
                  break
                }
              }
              if(ifRemove){
                console.log(this.testGraph.nodes)
                for(var j=this.testGraph.nodes.length-1;j>=0;j--){
                  console.log("移除此节点"+this.testGraph.links[i].target.id)
                  if(this.testGraph.nodes[j].id === this.testGraph.links[i].target.id){
                    this.testGraph.nodes.splice(j, 1);
                  }
                }
                console.log(this.testGraph.nodes)
              }
              this.testGraph.links.splice(i,1)
            }
          }
          this.updateGraph(this.testGraph)
        },

        queryTest(d){
          console.log(this.guanlian.length)
          for(var i=0;i<this.guanlian.length;i++){
            console.log(guanlian[i])
            this.testGraph.nodes.push(guanlian[i])
          }
          this.updateGraph(this.testGraph)

        }

      },
      created(){
        // getGraphResponse("载人飞船",5,300).then(
        //   res => {
        //     console.log(res)
        //     this.links=res.data.nodes
        //     this.nodes=res.data.links
        //     this.$router.push({path:'/forth',query:{
        //       links:res.data.nodes,
        //       nodes:res.data.links
        //     }})
        //   },
        //   err => alert('网络错误')
        // )
        axios.get('/graph',{
          params:{
            nodeName:'载人飞船',
            depth:5,
            maxNums:300
          }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))

        
      }
    }
</script>

<style>
  body{
    margin: 0px;
  }

  .container2{
    width: 800px;
    height: 500px;
    border: 1px solid #2c3e50;
    border-radius:8px;
    margin: 0 auto;
    margin-top: 100px;
    background: #154360 repeating-linear-gradient(30deg,
    hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 15px,
    transparent 0, transparent 30px);
  }
  .node{
    stroke:#fff;
    stroke-width:1;
    cursor: pointer;
  }

  .node:hover{
    stroke-width:5;
  }

  .nodeName{
    fill:white;
  }

</style>
