<template>
  <div id="container">
    <nav style="background-color: #06283D; color: white;">
      <div style="text-align: center;">
        <router-link to="/" style="color: white;">Home</router-link> |
        <router-link to="/about" style="color: white;">About</router-link> 
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      filterDone: false
    }
  }
}
</script>
