<template>
  <div>
     <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style lang="css" scoped>
.home {
  font-size: 50px;
}
</style>
