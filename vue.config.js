const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{ //配置代理服务器,在获取服务器数据时解决跨域问题
    proxy: 'http://localhost:3000'
  }
})
