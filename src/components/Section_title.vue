<template>
  <div class="title_section dark">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
name: "Section_title",
  props:[
      "title",
      "subtitle"
  ]
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.title_section{
  height: 200px;
  background-color: black;

h1{
  color: #fafafa;
  padding-top: 30px;
}

p{
  color: $gray-light-text;
}
}
</style>
