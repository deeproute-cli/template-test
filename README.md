#### 初始模板

#### React + Typescript

- assets 文件夹放置全局的css，重置css和一些全局的img
- components 放置通用的全局公共组件
- hooks 放置自定义的hooks
- pages 里面的文件夹对应路由里面的每个页面
- service 放置axios来管理请求
- utils 放置一些通用方法工具


- 每个组件和页面里面分为 属于当前组件或者页面的子组件 还有对应的index.tsx 和 style.tsx。style.tsx书写对应的css

- 使用 `yarn add @craco/craco` 来重写webpack配置，需要在根目录下书写一个 craco.config.js。API文档[https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#api]
