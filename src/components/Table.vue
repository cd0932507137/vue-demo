<template>
  <div class="hello">
    <NavComponent></NavComponent>
    <div class="container pt-5">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">{{$tc('picture')}}</th>
            <th scope="col">{{$tc('name')}}</th>
            <th scope="col">{{$tc('email')}}</th>
            <th scope="col">{{$tc('gender')}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in tableData" :key="item.id">
            <th scope="row">{{ i+1 }}</th>
            <td>
              <img :src="item.picture.medium" class="img-thumbnail">
            </td>
            <td>{{ item.name.first }}{{ item.name.last }}</td>
            <td>{{ item.email }}</td>
            <td v-if="item.gender === 'female'">{{$tc('female')}}</td>
            <td v-else>{{$tc('male')}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NavComponent from './Nav'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tableData: []
    }
  },
  methods: {
    getData () {
      let vm = this
      this.axios
        .get('https://randomuser.me/api/?results=50')
        .then(function (response) {
          // 成功回應
          console.log(response.data)
          vm.tableData = response.data.results
        })
        .catch(function (error) {
          // 失敗回應
          console.log(error)
        })
    }
  },
  mounted () {
    this.getData()
  },
  components: {
    NavComponent
  }
}
</script>

<style scoped>
</style>
