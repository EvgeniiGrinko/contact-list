import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)



export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    
    {
      path: '/list',
      name: 'List',
      component: () =>  import("../views/List"),
    },
    {
      path: '/contact/:id',
      name: 'contact',
      component: () =>  import("../views/Contact.vue")
    },
    {
      path: '/create',
      name: 'create',
      component: () =>  import("../views/Create.vue")
    }
  ]
})


