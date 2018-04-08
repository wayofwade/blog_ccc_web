<template>
  <div>
    <div id="my-head"><v-header></v-header></div>
    <div id="my-body"><router-view></router-view></div>
  </div>
</template>
<script>
import vHeader from './Header.vue'
export default {
  components: {
    vHeader
  }
}
</script>

<style scoped>
  #my-head{
  width:100%;
    background-color: #eeeeee;
}

#my-body {
  width:100%;
}
</style>
