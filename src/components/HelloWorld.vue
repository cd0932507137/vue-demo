<template>
  <div class="hello">
    <NavComponent></NavComponent>
    <div class="container">
      <div class="row pt-5">
        <div class="jumbotron">
          <h1 class="display-4">{{$tc('msg')}}</h1>
          <p class="lead">{{$tc('title')}}</p>
          <hr class="my-4">
          <p>{{$tc('text')}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavComponent from './Nav'
export default {
  name: 'HelloWorld',
  components: {
    NavComponent
  }
}
</script>

<style scoped>

</style>
