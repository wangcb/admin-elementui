// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import setter from './util/setter'

Vue.use(ElementUI)
Vue.use(setter)

Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
    if (to.name !== 'login' && !true) next({ name: 'login' })
    else next()
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
