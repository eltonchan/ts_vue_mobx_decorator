
module.exports = {
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/
    chainWebpack: (config) => {
        config.module
            .rule('html')
            .test(/\.html$/)
            .use('html-loader')
            .loader('html-loader')
            .end();
    },
};
