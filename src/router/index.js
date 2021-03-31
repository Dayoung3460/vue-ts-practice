import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import HelloWorld from "../components/HelloWorld"
import Hello2 from "../components/Hello2"

export default new Router({
  routes: [
      {
          path: '/',
          name: 'HelloWorld',
          component: HelloWorld
      },
      {
          path: '/2',
          name: 'Hello2',
          component: Hello2
      },
  ]
})
