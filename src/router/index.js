import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
import consoleLayout from '../views/console/layout/index'



/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/register',name:'register', component: () => import('@/views/register/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'home',
    hidden: true,
    children: [{
        path: 'home',
        component: () => import('@/views/home/index')
      },
      {
        path: 'specialist',
        name:"specialist",
        component: () => import('@/views/home/specialist/specialist/index')
      },
      {
        path: 'specialistDetails/:specialistId',
        name:"specialistDetails",
        component: () => import('@/views/home/specialist/specialist/index')
      },
      {
        path: 'universities',
        name:"universities",
        component: () => import('@/views/home/universities/universities/index')
      },
      {
        path: 'universitiesDetails/:universitiesId',
        name:"universitiesDetails",
        component: () => import('@/views/home/universities/universities/index')
      }
    ]
  },
  {
    path: '/services',
    component: Layout,
    redirect: '/services/list',
    children: [
      {
        path: 'list/:randomValue',
        name: 'serviceLists',
        component: () => import('@/views/service/serviceLists/index'),
        meta: { title: '服务列表' }
      },
      {
        path:'serviceDetail/:service_id',
        name: 'serviceDetail',
        component: () => import('@/views/service/serviceDetail/index'),
        meta: { title: '服务详情' }
      },
      {
        path:'techDocument/:serviceId',
        name: 'techDocument',
        component: () => import('@/views/service/techDocument/index'),
        meta: { title: '技术文档' }
      }
    ]
  },
  {
    path: '/dataSet',
    component: Layout,
    redirect: '/dataSet/index',
    children: [
      {
        path: 'index',
        // path:'index',
        name: 'dataset',
        component: () => import('@/views/dataset/index'),
        meta: { title: '数据集' }
      }
    ]
  },
  {
    path:"/solution",
    component:Layout,
    // redirct:'/solution/template',
    children:[
      {
        path:"xiaoniu/:id",
        name:"xiaoniu",
        component:() =>import('@/views/solution/xiaoniu/index'),
        meta: { title: '模板' }
      }
    ]
  },
  {
    path:"/innovation",
    name:'innovation',
    component:() =>import('@/views/innovation/index'),
    
  },
  {
    path:"/nlpschool",
    name:'nlpschool',
    component:() =>import('@/views/nlpschool/index'),

  },
  {
    path:"/nlpDetails",
    name:'nlpDetails',
    component:() =>import('@/views/nlpschool/details/index'),
    
  },
  {
    path: '/console',
    component: consoleLayout,
    redirect: '/console/myService',
    children: [
      {
        path: 'myService',
        name: 'consoleService',
        component: () => import('@/views/console/myService'),
        meta:{
          title:'我的服务'
        }
      },
      {
        path: 'myServiceDetail',
        name: 'consoleServiceDetail',
        component: () => import('@/views/console/myServiceDetail'),
        meta:{
          title:'详情信息'
        }
      },
      {
        path: 'techDocument',
        name: 'consoleTechDocument',
        component: () => import('@/views/console/techDocument'),
        meta:{
          title:'技术文档'
        }
      },
      {
        path: 'myApplicantion',
        name: 'consoleMyApplicantion',
        component: () => import('@/views/console/myApplicantion'),
        meta:{
          title:'我的应用'
        }
      },
      {
        path: 'myDataSet',
        name: 'consoleMyDataSet',
        component: () => import('@/views/console/myDataSet'),
        meta:{
          title:'我的数据集'
        }
      },
      {
        path: 'mine',
        name: 'consoleMine',
        component: () => import('@/views/console/mine'),
        meta:{
          title:'帐号信息'
        }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

