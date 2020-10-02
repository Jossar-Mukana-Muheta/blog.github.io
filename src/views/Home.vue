<template>
  <div class="home">
    <h1>VueJs Développeur blog</h1>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {

  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.home{
  margin-top: 40px;
}

h1{
  color: $gray-light !important;
}
</style>
