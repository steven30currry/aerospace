<template lang='pug'>
<div class="home">
	section
		.gridster
				ul
			
						li.purple(data-row='3', data-col='2', data-sizex='1', data-sizey='1')
								.content
									img(src='https://img-blog.csdnimg.cn/20210316162335136.png#pic_center')
									a(href='firstview')
										h3 天文资讯
						li.green(data-row='1', data-col='2', data-sizex='2', data-sizey='2')
							.content
									img(src='https://img-blog.csdnimg.cn/20210316162335181.png#pic_center')
									a(href='fifth')
										h3 航天器知识图谱
						li.instagram(data-row='3', data-col='3', data-sizex='1', data-sizey='1')
							.content
									img(src='https://img-blog.csdnimg.cn/20210316162335142.png#pic_center')
									a(href='second')
										h3 中国航天发展
						li.facebook(data-row='1', data-col='4', data-sizex='1', data-sizey='1')
							.content
									img(src='https://img-blog.csdnimg.cn/20210316162335164.png#pic_center')
									a(href='third')
										h3 问答机器人

						li.youtube(data-row='2', data-col='4', data-sizex='1', data-sizey='2')
							.content
									img(src='https://img-blog.csdnimg.cn/20210316162451479.png#pic_center')
									a(href='sixth')
										h3 数据可视化
	//- textarea#debug	

</div>
</template>

<script>
import bar from 'assets/js/home.js'
export default {
  name: 'home',
  date(){ 
    return {

    }
  },
  mounted(){
    bar()

  }
}
</script>

<style lang="scss" scoped  >
/* =============================================================================
   NORMALIZATION
========================================================================== */
$purple: #9f17a7;
$teal: #189dad;

// TODO: Normalize color names
@each $name,
	$rgb in (teal: #189dad,
	green: #169e19,
	purple: #9d16a3,
	facebook: #3b579d,
	instagram: #444444,
	youtube: #C73A3F) {
	// TODO: Create background Color styles
	ul {
		.#{$name} {
			background-color: $rgb !important;
			color: #fff;
		}
	}
}

/*包含以下四种的链接*/
a {
    text-decoration: none;
	color: #fff;
}
/*正常的未被访问过的链接*/
a:link {
    text-decoration: none;
}
/*已经访问过的链接*/
a:visited {
    text-decoration: none;
}
/*鼠标划过(停留)的链接*/
a:hover {
    text-decoration: none;
}
/* 正在点击的链接*/
a:active {
    text-decoration: none;
}


.gridster ul li {
	text-align: center;
	list-style-type: none;
	.content {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		img{
			display: inline-block;
    		font: normal normal normal 14px/1 FontAwesome;
			height: 60px;
			margin-bottom: 5px;
		}
		h3 {
			margin: 0;
			padding: 0;
			font-size: 1.1rem;
			font-weight: normal;
		}
	}
}

 

.gridster {
	max-width: 960px;
	margin: 5rem auto;
}

.preview-holder {
	border: none !important;
	border-radius: 0 !important;
	background: rgba(255, 255, 255, 0.2) !important;
}


//使得当前页面全部变黑
.home {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background: url(../../assets/img/home.jpg) no-repeat;
  background-size: 1400px 700px;
}

.demo {
	opacity: 0;
}

.oi-4x{
	font-size: 4rem;
}
</style>
