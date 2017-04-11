<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="about"></router-view>
    <router-view name="expertise"></router-view>
    <router-view name="team"></router-view>
    <router-view name="works"></router-view>
    <router-view name="testimonials"></router-view>
    <router-view name="contact"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">

@import "libs/bootstrap-grid/bootstrap-grid"

#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

</style>
