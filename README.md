# Shop

## 使用工具

- [x] vant //移动端 Vue 组件库

  https://youzan.github.io/vant/#/zh-CN/home

- [x] better-scroll //移动端（已支持 PC）各种滚动场景需求的插件

  https://better-scroll.github.io/docs/zh-CN/guide/base-scroll.html#

- [ ] fastclick取消移动端点击延迟

- [x] vw适配方案



## 难点

1. 使用better-scroll时，container的高度必须大于bscroll的高度，否则无法实现；

2. vant轮播图需要清除冒泡，否则滑动轮播图会触发点击事件；

   ```javascript
   :stop-propagation='false' 
   ```

3. better-scroll 运用两层，click属性必须外层为true内层为false，不然子元素点击事件会触发两次

   https://www.imooc.com/article/18232

   







## 其它

**VM适配方案**

```javascript
 //安装postcss-aspect-ratio-mini postcss-cssnext postcss-import postcss-px-to-viewport postcss-url postcss-viewport-units postcss-write-svg
 //然后在package.json添加以下代码:
	"postcss": {
    "plugins": {
      "postcss-import": {},
      "postcss-url": {},
      "postcss-aspect-ratio-mini": {},
      "postcss-write-svg": {
        "utf8": false
      },
      "postcss-cssnext": {},
      "postcss-px-to-viewport": {
        "viewportWidth": 375,
        "viewportHeight": 667,
        "unitPrecision": 3,
        "viewportUnit": "vw",
        "selectorBlackList": [
          ".ignore",
          ".hairlines"
        ],
        "minPixelValue": 1,
        "mediaQuery": false
      },
      "cssnano": {
        "cssnano-preset-advanced": {
          "preset": "advanced",
          "autoprefixer": false,
          "postcss-zindex": false,
          "zindex": false
        }
      }
    }
  }
```

