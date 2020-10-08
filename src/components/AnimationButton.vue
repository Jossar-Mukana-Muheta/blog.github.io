<template>
  <div>
  <v-btn
      class="mx-2"
      fab
      dark
      :color="backgroundColor"
      elevation="25"
      :href="lien"
  >
    <v-icon :color="iconColor" dark>
      {{ icon }}
    </v-icon>
  </v-btn>
  </div>
</template>

<script>
export default {
name: "AnimationButton",
  props:[
    'backgroundColor',
      'iconColor',
      'icon',
      'lien'
  ]
}
</script>

<style lang='scss' scoped>
div{
  @include desktop{
    align-self: flex-end;
  }
}

a{
  margin: 50px;

    animation: scrollDown  1s infinite alternate;

}

@keyframes scrollDown {
  0%{
    transform: translateY(10px);
  }
  /*60%{
    transform: translateY(-10px);
  }*/
  100%{
    transform: translateY(-10px);
  }
}
</style>
