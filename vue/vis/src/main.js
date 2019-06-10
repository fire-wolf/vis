import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import mockData from '@/assets/js/mock/index'



Vue.use(Element)

Vue.config.productionTip = false
Vue.prototype.addRouteFun =  (list,$router,callback) => { 
    console.log('menuList',list);
    let _arry = [];
    list.forEach(function(item){
      console.log('item',item);
      if(item.children && item.children.length>0){
        item.children.forEach(function(cItem){
          let _name = cItem.url.replace(/\//g,""); 
          let _url = item.url+cItem.url;
          $router.options.routes[0].children.push({path:cItem.url,name:_name,component:() => import('@/components'+_url)});
        })
         
      }
    });
    sessionStorage.setItem('routes',JSON.stringify(list));
    //this.$router.options.routes[0].children.push({path:'/layout3',name:'layout3',component:() => import('@/components/layout/layout3')});
    $router.addRoutes($router.options.routes); 
} 


router.beforeEach((to, from, next) => {
    //NProgress.start();
// to: Route: 即将要进入的目标 路由对象
// from: Route: 当前导航正要离开的路由
// next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
    console.log('全局路由监听'+to.path);
    if(to.matched.length==0){
    	//next({path:'/'});
    	if(sessionStorage.getItem('routes')){
    		let routers =  JSON.parse(sessionStorage.getItem('routes'));
    		console.log(router)
	    	// if(typeof(routers.obj.addRouteFun)=='function'){
	    	// 	routers.obj.addRouteFun(routers.menusList,routers.obj);
	    	// 	next({path:to.path});
	    	// }else{
	    	// 	next({path:'/'});
	    	// }
	    	router.app.addRouteFun(routers,router);
	    	next({path:to.path});
    	}else{
    		next({path:'/'});
    	}
    	
    }else{
    	next();	
    }
    
    // if (to.path == '/news') {
    //   next({path:'/Home'});
    // }else{
    	
    // }

    // let user = JSON.parse(sessionStorage.getItem('user'));
    // if (!user && to.path != '/login') {
    //     next({ path: '/login' })
    // } else{
    //     next()
    // }
})

/* eslint-disable no-new */
const _vue = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});


