---
title: 在Vue中使用useDark时遇到的问题
date: 2023-12-19T02:04:00.000+00:00
lang: zh
duration: 2min
comment: true
type: note
---

## 描述

前两天在用Vue写一个主页的时候，想着用useDark来实现深色模式，但是在使用的时候遇到了一个有趣的问题，就是在使用滑块开关来控制深色模式的时候，发现滑块开关的过渡效果失效了，这是为什么呢？ 因为 transition 失效了，所以就没有了过渡效果。

## 原因/解决方案

可以点击这里<a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useColorMode/index.ts#L122" target="_blank"><span op75 i-simple-icons-github /> 去看看源码</a>

经过一番查找，在这个 <a href="https://github.com/vueuse/vueuse/issues/3167" target="_blank"><span op75 i-simple-icons-github /> Issues</a> 中找到了问题原因，失效是因为 userColorMode 在处理改变的时候，先禁用 transition 再取消禁用导致的。在创建 useDark 的时候，options 中的 disableTransition 就是禁用 transition，它的默认值是 true，所以就导致没有过渡动画了。那么默认传入 disableTransition 为 false 的值就可以了。

```ts
const isDark = useDark({ disableTransition: false })
```

项目中可以这样使用：
![code.png](https://7.isyangs.cn/8/6581201e3f241-8.png)

好了大功告成，下次见！
