import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/pages/index'
// import Qianyue from '@/pages/qianyue'
// import Zhaomu from '@/pages/zhaomu'
// import News from '@/pages/news'
// import About from '@/pages/about'
// import Newsdetail from '@/pages/newsdetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve=>require(['@/pages/index'],resolve)
    },{
    	path:'/qianyue',
    	name:'qianyue',
      component:resolve=>require(['@/pages/qianyue'],resolve)
    	// component:Qianyue
    },{
    	path:'/zhaomu',
    	name:'zhaomu',
       component:resolve=>require(['@/pages/zhaomu'],resolve)
    	// component:Zhaomu
    },{
      path:'/news',
      name:'news',
       component:resolve=>require(['@/pages/news'],resolve)
      // component:News
    },{
      path:'/newsdetail',
      name:'newsdetail',
      component:resolve=>require(['@/pages/newsdetail'],resolve)
      // component:Newsdetail
    },{
      path:'/about',
      name:'about',
      component:resolve=>require(['@/pages/about'],resolve)
      // component:About
    }
  ]
})
