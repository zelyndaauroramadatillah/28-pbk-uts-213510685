<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/kegiatan">TO DO LIST</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      filterDone: false
    }
  }
}
</script>