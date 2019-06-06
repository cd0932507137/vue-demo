<template>
  <div class="hello">
    <NavComponent></NavComponent>
    <div class="container pt-5">
      <ve-line :data="chartData"></ve-line>
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
    return {
      chartData: {
        columns: ['日期', '訪問用戶', '下單用戶'],
        rows: [
          { 日期: '2018-05-22', 訪問用戶: 32371, 下單用戶: 19810 },
          { 日期: '2018-05-23', 訪問用戶: 12328, 下單用戶: 4398 },
          { 日期: '2018-05-24', 訪問用戶: 92381, 下單用戶: 52910 },
          { 日期: '2018-05-25', 訪問用戶: 75315, 下單用戶: 66910 }
        ]
      }
    }
  }
}
</script>

<style scoped>
</style>
