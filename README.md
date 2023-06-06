# vue3-integration

#### Development Environments

vue 3.2.47

element-plus 2.3.4

miragejs 0.1.47

### Project Structures

src

- assets，组件用静态资源，会被编译

- axios

- components，全局组件

- mock

- role，基于独立角色的路由等数据模块
  
  - user

- router，默认全局路由

- services，业务逻辑，整合api请求

- types，类型常量等

- views，视图组件

#### Dynamic Routing

基于角色`异步`动态加载router数据模块。

在主路由声明可见但需登录的路由规则，配置重定向到登录。登录后基于角色，加载新路由name属性相同自动替换。

为防止页面刷新登录信息丢失，将`token/role`置于sessionStorage；将登录后返回的`用户基本数据`置于sessionStorage。

在main入口判断角色并加载角色路由等数据，避免在角色权限路由路径下刷新页面时，直接加载默认路由信息，并重定向到登录组件，致使异步加载的角色权限路由失效。全部声明在一个路由文件较简单，但项目复杂时不利于维护。

角色模块是`异步`加载，在入口通过async/await同步等待加载完成后，再加载默认配置。

加载响应式user对象时，判断sessionStorage中的值并加载。

全局守卫

嵌套路由

#### UI

栅格布局/卡片/轮播图等基本组件

Skeleton 骨架组件，在信息加载完成前占用空间。

#### Others

使用slot自定义权限组件

使用自动引入，按需引入

没有使用CDN节点，编译体积过大

top-level-await错误。安装插件可通过编译，但运行时阻塞无法继续执行，原因未知。只能显示声明async-await函数
