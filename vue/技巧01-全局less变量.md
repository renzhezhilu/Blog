
### 01.安装`style-resources-loader`依赖
### 02.添加/修改`vue.config.js`
### 03.重启vue ui和热更新
```javascript
// vue.config.js
const path = require('path')
module.exports = {
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    },
    css: {
      loaderOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    }
}
function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, 'src/assets/public.less'), // 需要全局导入的less
            ],
        })
}

```