---
title: Projects - isYangs
display: 我的项目
description: 这是我的项目列表，你可以在这里找到我所有的项目。
plum: true
wrapperClass: 'text-center'
projects:
  '当前开发':
    - name: 'GioPic'
      link: 'https://github.com/isYangs/GioPic'
      desc: '一款开源的图片上传软件'
      icon: 'i-material-symbols-drive-folder-upload saturate-0'

  'LskyPro插件':
    - name: 'LskyPro for WordPress'
      link: 'https://github.com/isYangs/LskyPro-Plugins'
      desc: 'WordPress上传兰空图床企业版的插件'
      icon: 'i-bi-wordpress'
    - name: 'LskyPro for Typecho'
      link: 'https://github.com/isYangs/LskyPro-Plugins'
      desc: 'Typecho上传兰空图床企业版的插件'
      icon: 'i-ri-file-list-3-fill'
---

<!-- @layout-full-width -->

<ListProjects :projects="frontmatter.projects" />
