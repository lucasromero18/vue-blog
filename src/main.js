import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

//USING VueResource
Vue.use(VueResource);
//USING VueRouter
Vue.use(VueRouter);

//CREATING INSTANCE OF THE VUE ROUTER
const router = new VueRouter({
  routes: Routes
})


//REGISTERING CUSTOM DIRECTIVES GLOBALLY HERE IF NEEDED IN EVERY COMPONENT 
Vue.directive('theme', {
  bind(el, binding, vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1200px"
    }else if(binding.value == 'narrow'){
      el.style.maxWidth = "560px"
    }
    if(binding.arg == 'column'){
      el.style.background = '#ddd';
      el.style.padding = '20px'

    }
  }
})



//REGISTERING CUSTOM FILTERS GLOBALLY HERE IF NEEDED IN EVERY COMPONENT, OTHERWISE REGISTER LOCALLY IN COMPONENT
Vue.filter('snippet', function(value){
  return value.slice(0, 100) + '...'
})

Vue.config.productionTip = false


//INSTANCE
//DEFINE THE VUE ROUTER WITHIN YOUR ACTIVE INSTANCE
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
