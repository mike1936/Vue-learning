/**
 * Vue CLI 3 更改了项目的文件结构，之前 2.0 项目的 build 和 config 文件夹移除。如果需要自定义配置，
 * 需要在项目的 "根目录" 下添加一个 vue.config.js 文件。 在这个文件中，我们可以进行一些个性化定制。
 * */

// module.exports / exports 为 Node.js 导出
module.exports = {
    // 基本路径
    baseUrl: "./",
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // 服务器端口号
    devServer: {
        port: 2222
    }
};



module.exports = {
    // 基本路径
    baseUrl: '/',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: () => { },
    configureWebpack: () => { },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        open: true,                                 //配置自动启动浏览器
        host: '127.0.0.1',
        port: 6688,                                 // 端口号
        https: false,
        hotOnly: false,                             // https:{type:Boolean}
        proxy: null,                                // 设置代理
        // proxy: 'http://localhost:4000'           // 配置跨域处理,只有一个代理
        // proxy: {                                 // 配置多个代理
        //     '/api': {
        //         target: '<url>',
        //         ws: true,
        //         changeOrigin: true
        //     },
        //     '/foo': {
        //         target: '<other_url>'
        //     }
        // },
        before: app => { }
    },
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
}
