<template>
  <div id="app">
      <div class="header">
        <h1>Henoch Hernanda</h1>
      </div>
      <div id="container">
      <div id="nav">
        <ul>
            <li @click="routeToHome"><h1 class="h1-menu">Home</h1></li>
            <li @click="routeToArticle"><h1 class="h1-menu">Article</h1></li>
            <li @click="routeToContact"><h1 class="h1-menu">Contact</h1></li>
            <li @click="routeToAbout"><h1 class="h1-menu">About Me</h1></li>
        </ul>
      </div>
      <router-view class="content"/>
    </div>
  </div>
</template>

<script>
import router from '../src/router'

export default {
  methods: {
    routeToHome () {
      router.push({ name: 'home' })
    },
    routeToArticle () {
      router.push({ name: 'List Articles' })
    },
    routeToContact () {
      router.push({ name: 'contact' })
    },
    routeToAbout () {
      router.push({ name: 'About me' })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#container{
  display: flex;
  justify-content: flex-start;
}

.content{
  width: 70%;
}

.header{
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
}

#nav {
  display: flex;
  padding: 30px;
  width: 30%;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

    .h1-menu:hover{
        text-decoration: underline;
    }
</style>
