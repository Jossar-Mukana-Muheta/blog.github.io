<template>
  <v-btn
      class="mx-2"
      fab
      dark
      color="white"
      elevation="25"
      href="#accueil"
  >
    <v-icon color="black" dark>
      mdi-chevron-double-down
    </v-icon>
  </v-btn>
</template>

<script>
export default {
name: "AnimationButton"
}
</script>

<style lang='scss' scoped>
a{
  margin: 50px;
  &:hover{
    animation: scrollDown ease-in-out 2s infinite;
  }
}

@keyframes scrollDown {
  10%{
    transform: translateY(10px);
  }
  60%{
    transform: translateY(-10px);
  }
  100%{
    transform: translateY(10px);
  }
}
</style>
