import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './global'
import './filters'
import dayjs from 'dayjs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './bus'
// vue-video-player
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import 'videojs-contrib-hls' //单是 RTMP 的话不需要第三方库，如果是 HLS 的话需要引入videojs-contrib-hls，看具体情况而定。
// 弹幕
import { vueBaberrage } from 'vue-baberrage'

Vue.use(ElementUI)
Vue.use(VideoPlayer);
Vue.use(vueBaberrage);
Vue.prototype.$dayjs = dayjs
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')