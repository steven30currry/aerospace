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
    //     plugins: [ 
    //         new webpack.ProvidePlugin({ 
    //               $:"jquery", 
    //               jQuery:"jquery", 
    //              "windows.jQuery":"jquery"
    //      }) 
    //    ]
    }
}