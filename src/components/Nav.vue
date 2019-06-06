<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">{{$tc('navTitle')}}</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">{{$tc('home')}}</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/table">{{$tc('table')}}</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/chart">{{$tc('chart')}}</router-link>
        </li>
      </ul>
      <div>
        <a href="#" @click="setLocale('en')">
          <img src="https://img.icons8.com/color/48/000000/liberia.png">
        </a>
        <a href="#" @click="setLocale('tw')">
          <img src="https://img.icons8.com/color/48/000000/taiwan.png">
        </a>
      </div>
      <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">{{$tc('welcome')}}</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    setLocale (locale) {
      import(`../langs/${locale}.json`).then(msgs => {
        this.$i18n.setLocaleMessage(locale, msgs)
        this.$i18n.locale = locale
      })
      // this.$i18n.locale = locale
    }
  }
}
</script>
