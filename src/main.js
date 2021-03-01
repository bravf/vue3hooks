import { createApp, h } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import Request from './demos/request.vue'
import HelloWord from './demos/HelloWorld.vue'
import Mouse from './demos/mouse.vue'
import Move from './demos/move.vue'
import FingerMove from './demos/finger-move.vue'
import Fullscreen from './demos/fullscreen.vue'
import Interval from './demos/interval.vue'
import Timeout from './demos/timeout.vue'
import Title from './demos/title.vue'
import Countdown from './demos/countdown.vue'
import Wheel from './demos/wheel.vue'

const routes = [
  { path: '/request', component: Request },
  { path: '/helloworld', component: HelloWord },
  { path: '/mouse', component: Mouse },
  { path: '/move', component: Move },
  { path: '/fullscreen', component: Fullscreen },
  { path: '/finger-move', component: FingerMove },
  { path: '/interval', component: Interval },
  { path: '/timeout', component: Timeout },
  { path: '/title', component: Title },
  { path: '/countdown', component: Countdown },
  { path: '/wheel', component: Wheel },
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

const app = createApp({
  render: () => h(App),
})
app.use(ElementPlus, { size: 'mini' })
app.use(router)
app.mount('#app')
