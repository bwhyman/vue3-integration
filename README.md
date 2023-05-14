# vue3-integration

#### Development Environments

vue 3.2.47

element-plus 2.3.4

#### Dynamic Routing

公用组件/router/store，以及基于角色加载router/store数据

在主路由声明可见但需登录的路由，声明重定向到登录组件而非路由组件。登录后基于角色，加载新路由替换，必须声明name属性且相同。

在入口判断角色并加载角色数据，防止刷新时重置信息。

全局守卫

嵌套路由

#### UI

栅格布局/卡片/轮播图等基本组件

Skeleton 骨架组件，在信息加载完成前占用空间。

#### Others

使用自动引入，按需引入

没有使用CDN节点，编译体积过大

top-level-await错误。安装插件可通过编译，但运行时阻塞无法继续执行，原因未知。只能显示声明async-await函数
