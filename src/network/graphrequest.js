import request from "./base.js";

export function getGraphResponse(name,depth,nums) {
    return request({
        url:  "http://39.100.119.221:8085/api/graph",
        method: 'get',
        params:{
            nodeName:name,
            depth:depth,
            maxNums:nums
        }
    })
}