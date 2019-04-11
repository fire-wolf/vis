import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',name: 'index',component: resolve=>(require(['@/components/index'],resolve)),
        children:[
            {path: '/basics',name: 'basics',component: resolve=>(require(['@/components/basics'],resolve))},
            {path: '/basics1',name: 'basics1',component: resolve=>(require(['@/components/basics1'],resolve))},
            {path:'/node',name:'node',component:() => import('@/components/node')},
            {path: '/circleimg',name: 'circleimg',component: resolve=>(require(['@/components/node/circleimg'],resolve))},
            {path: '/color',name: 'color',component: resolve=>(require(['@/components/node/color'],resolve))},
            {path: '/shadow',name: 'shadow',component: resolve=>(require(['@/components/node/shadow'],resolve))},
            {path: '/shape',name: 'shape',component: resolve=>(require(['@/components/node/shape'],resolve))},
            {path: '/customgroups',name: 'customgroups',component: resolve=>(require(['@/components/node/customgroups'],resolve))},
            {path: '/groups',name: 'groups',component: resolve=>(require(['@/components/node/groups'],resolve))},
            {path: '/icon',name: 'icon',component: resolve=>(require(['@/components/node/icon'],resolve))},
            {path: '/html',name: 'html',component: resolve=>(require(['@/components/node/html'],resolve))},
            {path: '/images',name: 'images',component: resolve=>(require(['@/components/node/images'],resolve))},
            {path: '/imgOrborder',name: 'imgOrborder',component: resolve=>(require(['@/components/node/imgOrborder'],resolve))},
            {path: '/dashedOrborder',name: 'dashedOrborder',component: resolve=>(require(['@/components/node/dashedOrborder'],resolve))},
            {path: '/widthOrheight',name: 'widthOrheight',component: resolve=>(require(['@/components/node/widthOrheight'],resolve))},
            {path:'/edge',name:'edge',component:() => import('@/components/edge')}
        ]

    } 
  ]
})
