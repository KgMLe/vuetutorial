<template>
    <nav>
      <router-link to="/" class="nav-link justify-content-start" href="/index.html">
        <img src="https://i.postimg.cc/cH4KmvhX/Eye-Spy-e-Bay-Logo-removebg-preview.png" alt="logo" loading="lazy" class="logo">
      </router-link>  
    <ul class="nav nav-tabs justify-content-center">   
  <li class="nav-item">
    <router-link to="/" class="nav-link">Home</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/about" class="nav-link">Products</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/checkout" class="nav-link">Checkout</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/admin" class="nav-link">Admin</router-link>
  </li>
</ul>
      
    </nav>
  </template>

  <script>
</script>

<style scoped>
img[alt='logo']{
  width: 50px;
  height: 50px;
}
</style>