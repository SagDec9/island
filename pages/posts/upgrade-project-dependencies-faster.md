---
title: 我是如何快速的升级项目依赖的
date: 2024-03-13T16:06:27.000Z
lang: zh
duration: 5min
comment: true
---

推荐一个工具，可以帮助我们快速的升级项目依赖，它就是 [AntFu](https://github.com/antfu) 大佬写的 [Taze](https://github.com/antfu/taze)。

Taze 只需要通过一个命令就可以检测到项目中可升级的依赖，下面来看看如何使用。

### 安装

```bash
npm i -g taze

# 或者直接使用 npx taze执行
```

### 使用/扫描可升级的依赖

如果你全局安装了直接输入 Taze 即可

可以看到打印的非常详细 包含版本变化，最新发布日期

![示例1d](https://7.isyangs.cn/1/65f1da0fd28ce-1.png)

<div class="text-center relative">
  Taze 可以自由的在 major、minor、patch 之间切换
  <img class="!m0" src="https://7.isyangs.cn/1/65f1e03ae169e-1.png" alt="major" />
  检测 major 更新
  <img class="!m0" src="https://7.isyangs.cn/1/65f1e009e4e1b-1.png" alt="minor" />
  检测 minor 更新
  <img class="!m0" src="https://7.isyangs.cn/1/65f1e168c3ecc-1.png" alt="patch" />
  检测 patch 更新
</div>

> 上面的这些命令只有扫描作用，不会真正的升级依赖

### 使用/执行升级操作

如果想要执行升级操作 只需要在命令后面追加上 -w

```bash
taze -w # Taze 会直接把所有可升级的依赖写入到 package.json 中
```

接下来 ni 就可以完成升级了。

> 提示：
>
> ni 也是一个AntFu大佬写的小工具，可自行[前往查看](https://github.com/antfu/ni)
>
> ni 等同于 npm install 或者 yarn install

另外 Taze 支持 monorepo 只需要在命令后面追加上 -r 所有包含 package.json 的子目录都会被检测

```bash
taze -r # 检测所有子目录
```

<img class="!m0" src="https://7.isyangs.cn/1/65f1eaf4d2420-1.png" alt="示例2" />

如果我想更新这个项目所有依赖包括子目录的依赖，只需要这样即可

```bash
taze -r -w
```

### 使用/其他功能

```bash
taze -p # 只匹配 dependencies 依赖
taze -d # 只匹配 devDependencies 依赖
taze -w -i # 写入 package.json 之后直接进行安装，会提示选择安装源
taze -h # 帮助，查看所有命令
```

还有就是 Taze 还支持配置文件，在项目下新建一个 taze.config.js 文件

```javascript
import { defineConfig } from 'taze'

export default defineConfig({
  // 忽略的包名
  exclude: [
    'webpack'
  ],
  // 是否从注册表中获取最新的包信息，不使用缓存
  force: true,
  // 是否写入 package.json
  write: true,
  // 是否在升级后直接执行安装
  install: true,
  // 为每个包设置不同的升级模式
  packageMode: {
    'typescript': 'major',
    'unocss': 'ignore',
    '/vue/': 'latest'
  },
  // 禁用检查 "overrides" package.json 字段
  depFields: {
    overrides: false
  }
})
```

还有更多使用方法可以查看 [Taze](https://github.com/antfu/taze?tab=readme-ov-file#-taze) 的文档。

[本文谢绝转载，谢谢]
