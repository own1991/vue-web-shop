import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'

    },
    //首页
    {
        path: '/home',
        component: Home,
        children: [{
            path: "",
            name: "Home",
            component: () =>
                import ('../views/index/Index')
        }]
    },
    //分类
    {
        path: '/category',
        component: Home,
        children: [{
            path: "",
            name: "category",
            component: () =>
                import ('../views/category/Category')
        }]
    },
    //购物车
    {
        path: '/shoppingCart',
        component: Home,
        children: [{
            path: "",
            name: "shoppingCart",
            component: () =>
                import ('../views/shoppingCart/ShoppingCart')
        }]
    },
    //我的
    {
        path: '/my',
        component: Home,
        children: [{
            path: "",
            name: "my",
            component: () =>
                import ('../views/my/My')
        }]
    },
    //详情页
    {
        path: '/details:id',
        name: 'details',
        component: () =>
            import ('../views/details/Details'),
    },
    //最近浏览
    {
        path: '/browse',
        name: 'browse',
        component: () =>
            import ('../views/browse/Browse'),
    },
    //结算
    {
        path: '/shoppingPayMent',
        name: 'shoppingPayMent',
        component: () =>
            import ('../views/shoppingPayMent/ShoppingPayMent'),
    },
    //我的订单
    {
        path: '/order:id',
        name: 'order',
        component: () =>
            import ('../views/order/Order'),
    },
    //评价中心
    {
        path: '/evaluate',
        name: 'evaluate',
        component: () =>
            import ('../views/evaluate/Evaluate'),
    },
    //评价晒图
    {
        path: '/rate:id',
        name: 'rate',
        component: () =>
            import ('../views/rate/Rate'),
    },
    //查看评价
    {
        path: '/aevaluated',
        name: 'aevaluated',
        component: () =>
            import ('../views/aevaluated/Aevaluated'),
    },
    //城市定位
    {
        path: '/city',
        name: 'city',
        component: () =>
            import ('../views/city/City'),
    },
    //地址列表
    {
        path: '/address',
        name: 'address',
        component: () =>
            import ('../views/address/Address'),
    },
    //地址修改
    {
        path: '/addressEdit',
        name: 'addressEdit',
        component: () =>
            import ('../views/addressEdit/AddressEdit'),
    },
    //登录
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login/Login'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router