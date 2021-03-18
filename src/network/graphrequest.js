import request from "./base.js";

export function getGraphResponse(name,depth,nums) {
    return request({
        url:  "/space/graph",
        method: 'get',
        params:{
            nodeName:name,
            depth:depth,
            maxNums:nums
        }
    })
}