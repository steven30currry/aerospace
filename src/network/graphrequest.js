import request from "./base.js";

export function getGraphResponse(name,depth,nums) {
    return request({
<<<<<<< HEAD
        url:  "/space/graph/",
=======
        url:  "/space/graph/nodeList",
>>>>>>> 6c849cb4078df3277f998496669c1b79f164f16b
        method: 'get',
        params:{
            "nodeName":name,
            "depth":depth,
            "maxNums":nums
        }
    })
}