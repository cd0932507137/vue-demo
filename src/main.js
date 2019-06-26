// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import { i18n } from './plugins/i18'
import VCharts from 'v-charts'
// 圖表
import VeLine from 'v-charts/lib/line.common'
import VePie from 'v-charts/lib/pie.common'
import VeGauge from 'v-charts/lib/gauge.common'
import VeHistogram from 'v-charts/lib/histogram.common'
import VeChart from 'v-charts/lib/chart.common'

Vue.use(VueAxios, axios, VCharts)
Vue.config.productionTip = false
// 折線圖
Vue.component(VeLine.name, VeLine)
// 餅圖
Vue.component(VePie.name, VePie)
// 儀表盤
Vue.component(VeGauge.name, VeGauge)
// 柱狀圖
Vue.component(VeHistogram.name, VeHistogram)
Vue.component(VeChart.name, VeChart)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
