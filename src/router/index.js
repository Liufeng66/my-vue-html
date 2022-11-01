// 该文件是专门用于创建整个应用的路由器

// 第一步引入插件(本质是一个构造函数)
import VueRouter from 'vue-router'

// 引入一下用到的组件
import Index from "../components/Index";
import Story from "../components/Story";
import Role from "../components/Role";
import Equipment from "../components/Equipment";
import Monster from "../components/Monster";
import Download from "../components/Download";

// 第二步创建router实例对象并暴露
export default new VueRouter({
    routes: [
        {
            path: "/",
            redirect: "/index"
        },
        {
            // path是路径
            path: "/index",
            //跳转的组件
            component: Index
        },
        {
            path: "/story",
            component: Story,
        },

        {
            path: "/role",
            component: Role
        },
        {
            path: "/equipment",
            component: Equipment
        },
        {
            path: "/monster",
            component: Monster
        },
        {
            path: "/download",
            component: Download
        }


    ]
})
// 然后去main.js中引入router实例