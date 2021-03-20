const webpack = require("webpack")
module.exports = {
    lintOnSave:false,
    configureWebpack: {
        resolve :{
            alias:{
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',

            }
        },
    },
    devServer: {
        open: true,
        https: false,
        port: '8080',
        host: '127.0.0.1',
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy: {//配置跨域
            '/api': {
                target: 'http://39.100.119.221:8085/',//这里后台的地址模拟的;应该填写你们真实的后台接口
                ws: true,
                changOrigin: true,//允许跨域
                pathRewrite: {
                    '^/api': '/'//请求的时候使用这个api就可以
                }
            }

        }
    },

}