import Create from './components/Create/Create.vue'
import Home from './components/Home/Home.vue'
import Search from './components/Search/Search.vue'
import Update from './components/Update/Update.vue'


export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/lot/update',
    component: Updates
  },
  {
    path: '/lot/create',
    component: Create
  },
  {
    path: '/search',
    component: Search
  }
]
