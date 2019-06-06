// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import { i18n } from './plugins/i18'
import VCharts from 'v-charts'
// 折线图
import VeLine from 'v-charts/lib/line.common'
import VePie from 'v-charts/lib/pie.common'
import VeGauge from 'v-charts/lib/gauge.common'

Vue.use(VueAxios, axios, VCharts)
Vue.config.productionTip = false
// 折线图
Vue.component(VeLine.name, VeLine)
// 饼图
Vue.component(VePie.name, VePie)
// 仪表盘
Vue.component(VeGauge.name, VeGauge)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
