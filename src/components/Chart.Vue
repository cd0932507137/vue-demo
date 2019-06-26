<template>
  <div class="hello">
    <NavComponent></NavComponent>
    <div class="container pt-5">
      <h3>折線圖</h3>
      <ve-line :data="lineData"></ve-line>
      <hr>
      <h3>餅圖</h3>
      <ve-pie :data="pietData"></ve-pie>
      <hr>
      <h3>儀錶盤</h3>
      <ve-gauge :data="gaugeData" :settings="gaugeSettings"></ve-gauge>
      <hr>
      <h3>圖表切換</h3>
      <button class="btn btn-primary" @click="changeType">切換圖表類型</button>
      <ve-chart :data="chartData" :settings="chartSettings"></ve-chart>
    </div>
  </div>
</template>

<script>
import NavComponent from './Nav'
export default {
  components: {
    NavComponent
  },
  data () {
    this.gaugeSettings = {
      dimension: 'type',
      metrics: 'value'
    }
    this.typeArr = ['line', 'histogram', 'pie']
      this.index = 0
    return {
      lineData: {
        columns: ['日期', '訪問用戶', '下單用戶'],
        rows: [
          { 日期: '2018-05-22', 訪問用戶: 32371, 下單用戶: 19810 },
          { 日期: '2018-05-23', 訪問用戶: 12328, 下單用戶: 4398 },
          { 日期: '2018-05-24', 訪問用戶: 92381, 下單用戶: 52910 },
          { 日期: '2018-05-25', 訪問用戶: 75315, 下單用戶: 66910 }
        ]
      },
      pietData: {
        columns: ['區域', '觀光人數'],
        rows: [
          { 區域: '離島', 觀光人數: 1393 },
          { 區域: '東部', 觀光人數: 3530 },
          { 區域: '南部', 觀光人數: 2923 },
          { 區域: '中部', 觀光人數: 1723 },
          { 區域: '北部', 觀光人數: 3792 }
        ]
      },
      gaugeData: {
        columns: ['type', 'a', 'b', 'value'],
        rows: [{ type: '速度', value: 80, a: 1, b: 2 }]
      },
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '1月1日', '访问用户': 1523 },
          { '日期': '1月2日', '访问用户': 1223 },
          { '日期': '1月3日', '访问用户': 2123 },
          { '日期': '1月4日', '访问用户': 4123 },
          { '日期': '1月5日', '访问用户': 3123 },
          { '日期': '1月6日', '访问用户': 7123 }
        ]
      },
      chartSettings: { type: this.typeArr[this.index] }
    }
  },
  methods: {
    changeType: function () {
      this.index++
      if (this.index >= this.typeArr.length) { this.index = 0 }
      this.chartSettings = { type: this.typeArr[this.index] }
    }
  }
}
</script>

<style scoped>
</style>
