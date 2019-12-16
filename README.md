### 关于react前后端同构的一些心得

## 同构，即通过webpack打包后，生成一个server bundle 和client bundle, 首次渲染时，服务器解析server bundle, 生成html，返回给前端页面，完成ssr，首屏渲染后，由客户端解析client bundle完成其他正常前端交互操作,完成csr
## 总结注意点: 
- 构建webpack配置，主要的分别建立客户端和服务端入口文件以及webpack配置文件，客户端除了常规配置外需配置 target以及nodeExternal
- 状态管理主要使用redux react-redux redux thunk ，其中针对客户端和服务端的reducer需要区分导出，客户端要加全局变量储存首次ajax请求的西部数据
- 为避免首次进入客户端路由为生成，需用静态模板作路由，并引入数据provider数据，服务端拿到所有异步数据后，更新store数据，渲染模板字符串
- 由于首屏异步数据的获取需要使用页面中模拟的loadData方法去dispatch获取异步数据，所以路由渲染应以配置方式在服务端入口和客户端入口分别渲染，并且服务端入口还需使用matchPath来判断对应路由页面是否有loadData以此请求异步数据