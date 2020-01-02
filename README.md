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

4. 动画效果的入场动画无法实现；

   需要添加组件缓存，keep-alive
   
5. 点击事件会触发2次

  解决办法（如果this.scorll不存在，新建，否则重置！

  ```javascript
  if ( ! this.scorll) {
   new Scroll()
  } else {
    this.scroll().refresh()
  }
  ```

  http://www.bubuko.com/infodetail-2216820.html
  better-scroll会将点击事件去掉，如果滚动部分需要有点击事件，需要在参数里加上click：true。同时，在PC上或某些手机端，由于未成功将touchend事件move掉，点击事件会执行两次。better-scroll派发的event事件和原生js的event有属性上的区别，其中有一个属性为event._constructed。better-scroll派发的事件中event._constructed为true，原生点击事件中没有这个属性。

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

