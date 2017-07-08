// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import index from './page/index'
import detail from './page/detail'
import statistics from './components/detailComponent/statistics'
import analysis from './components/detailComponent/analysis'
import publish from './components/detailComponent/publish'
import forecast from './components/detailComponent/forecast'


const routes=[
  {
    path:'/',component:index
  },
  {
    path:'/detail',component:detail,
    redirect:'/detail/statistics',
    children:[
      {
        path:'statistics',component:statistics
      },
      {
        path:'analysis',component:analysis
      },
      {
        path:'publish',component:publish
      },
      {
        path:'forecast',component:forecast
      },
    ]
  }
];
const router=new VueRouter({
  mode:'history',
  routes,
})
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template:'<App></App>',
  components: { App}
});

