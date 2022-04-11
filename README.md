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
- 通过 `npm run stage` 启动测试 , 执行 `development`
- 通过 `npm run prod` 启动开发 , 执行 `development`
- 通过 `npm run stageBuild` 打包测试 , 执行 `staging`
- 通过 `npm run build` 打包正式 , 执行 `production`

##### 配置介绍

&emsp;&emsp;以 `VUE_APP_` 开头的变量，在代码中可以通过 `process.env.VUE_APP_` 访问。  
&emsp;&emsp;比如,`VUE_APP_ENV = 'development'` 通过`process.env.VUE_APP_ENV` 访问。  
&emsp;&emsp;除了 `VUE_APP_*` 变量之外，在你的应用代码中始终可用的还有两个特殊的变量`NODE_ENV` 和`BASE_URL`

在项目根目录中新建`.env.*`

- .env.development 本地开发环境配置

```bash
NODE_ENV='development'
# must start with VUE_APP_
VUE_APP_ENV = 'development'

```

- .env.staging 测试环境配置

```bash
NODE_ENV='production'
# must start with VUE_APP_
VUE_APP_ENV = 'staging'
```

- .env.production 正式环境配置

```bash
 NODE_ENV='production'
# must start with VUE_APP_
VUE_APP_ENV = 'production'
```