<template>
  <div class="hello">
    <NavComponent></NavComponent>
    <div class="container">
      <div class="row pt-5">
        <div class="jumbotron">
          <h1 class="display-4">{{ msg }}</h1>
          <p class="lead">{{ title }}</p>
          <hr class="my-4">
          <p>{{ text }}</p>
        </div>
      </div>
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
      title: 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.',
      text: 'It uses utility classes for typography and spacing to space content out within the larger container.'
    }
  },
  components: {
    NavComponent
  }
}
</script>

<style scoped>

</style>
