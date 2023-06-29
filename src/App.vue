<template>
  <NavBar/>
  <router-view/>
  <FooTer/>
</template>

<script>
import NavBar from '@/components/NavBar'
import FooTer from '@/components/FooTer.vue';


export default{
  components: {
    NavBar, FooTer
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50 !important;
}

nav a.router-link-exact-active {
  color: rgb(147, 23, 44) !important;
}
</style>
