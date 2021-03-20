import request from "./base.js";

export function getHuanResponse(page) {
    return request({
        url:  "/space/query/news",
        method: 'get',
        params:{
            "page":page
        }
    })
}