# vue-wx-front

### 项目结构
>vue-wx-front  -- UI主目录    
├── public -- 静态资源   
├    ├── favicon.ico -- 图标   
├    └── index.html -- 首页   
├── src -- 源码目录    
├    ├── api -- 后端交互的接口   
├    ├── assets -- 静态资源目录
├    ├── css
├        ├── index.less     -- 全局通用样式
├        ├── mixin.less     -- 全局mixin
├        └── variables.less -- 全局变量   
├    ├── components -- 封装的组件    
├    ├── config -- 环境配置    
├    ├── filters -- 过滤器   
├    ├── plugins -- 插件   
├    └── route -- VUE路由   
├         ├── index -- 路由入口    
├         └── router.config.js -- 路由表    
├    ├── store -- VUEX      
├    └── util -- 工具包   
├         ├── request.js -- axios封装   
├         ├── vconsole.js -- 移动端调试插件
├         ├── jsApiList.js -- 微信JS接口列表
├         ├── wechatPlugin.js -- jssdk插件配置
├         ├── storage.js -- 本地存储封装
├         └── util -- 工具包   
├    └── views -- 业务上的vue页面
├         └── home -- 公众号
├    ├── layouts  -- 路由布局页面(是否缓存页面)
├    ├── App.vue -- 根组件    
├    └── main.js -- 入口js    
├── .env.development -- 开发环境   
├── .env.production -- 生产环境   
├── .env.staging -- 测试环境   
├── .editorconfig -- ESLint配置   
├── .gitignore -- git忽略      
├── .postcssrc.js -- CSS预处理配置(rem适配)    
├── babel.config.js -- barbel配置入口    
├── jsconfig.json -- vscode路径引入配置 
├── package.json -- 依赖管理    
└── vue.config.js -- vue cli3的webpack配置   

### 启动项目

```bash

npm install

npm run serve
```
<span id="top">目录</span>

### <span id="env">✅ 配置多环境变量 </span>

`package.json` 里的 `scripts` 配置 `serve` `stage` `build`，通过 `--mode xxx` 来执行不同环境

- 通过 `npm run serve` 启动本地 , 执行 `development`
- 通过 `npm run prod` 启动开发 , 执行 `development`
- 通过 `npm run stageBuild` 打包测试 , 执行 `staging`
- 通过 `npm run build` 打包正式 , 执行 `production`
