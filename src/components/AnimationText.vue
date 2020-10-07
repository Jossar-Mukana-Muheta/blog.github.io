<template>
  <div class="text">
    <p>Je Suis</p>
    <h1> DEVELOPPEUR FRONT-END </h1>
    <h2>Je créer des applications web conviviale et moderne</h2>
  </div>
</template>

<script>
export default {
name: "AnimationText"
}
</script>

<style lang='scss' scoped>

h1,h2,p{
  color: white;
}

.text{
  animation: text-appared 6s 200ms ;

}

@keyframes text-appared{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }

}

</style>
