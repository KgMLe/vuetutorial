<template>
  <div class="home">
    <img alt="Vue logo" src="https://i.postimg.cc/Y0kMzJp7/cd93a5895e6954a1457a63-removebg-preview.png">
    <HomePage msg="SEE THE WORLD THROUGH STYLISH FRAMES"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HomePage
  }
}
</script>
