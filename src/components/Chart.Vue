<template>
  <div class="hello">
    <NavComponent></NavComponent>
    <div class="container pt-5">
      <h3>折線圖</h3>
      <ve-line :data="chartData"></ve-line>
      <hr>
      <h3>餅圖</h3>
      <ve-pie :data="pietData"></ve-pie>
      <hr>
      <h3>儀錶盤</h3>
      <ve-gauge :data="gaugeData" :settings="gaugeSettings"></ve-gauge>
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
    return {
      chartData: {
        columns: ['日期', '訪問用戶', '下單用戶'],
        rows: [
          { 日期: '2018-05-22', 訪問用戶: 32371, 下單用戶: 19810 },
          { 日期: '2018-05-23', 訪問用戶: 12328, 下單用戶: 4398 },
          { 日期: '2018-05-24', 訪問用戶: 92381, 下單用戶: 52910 },
          { 日期: '2018-05-25', 訪問用戶: 75315, 下單用戶: 66910 }
        ]
      },
      pietData: {
        columns: ['日期', '访问用户'],
        rows: [
          { 日期: '1/1', 访问用户: 1393 },
          { 日期: '1/2', 访问用户: 3530 },
          { 日期: '1/3', 访问用户: 2923 },
          { 日期: '1/4', 访问用户: 1723 },
          { 日期: '1/5', 访问用户: 3792 },
          { 日期: '1/6', 访问用户: 4593 }
        ]
      },
      gaugeData: {
        columns: ['type', 'a', 'b', 'value'],
        rows: [{ type: '速度', value: 80, a: 1, b: 2 }]
      }
    }
  }
}
</script>

<style scoped>
</style>
