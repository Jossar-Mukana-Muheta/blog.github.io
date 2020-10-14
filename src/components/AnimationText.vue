<template>
  <div class="text">
    <p>Je Suis</p>
    <h2 class="titre_principal"> DEVELOPPEUR FRONT-END </h2>
    <h2>Je créer des applications web conviviale et moderne</h2>
  </div>
</template>

<script>
export default {
name: "AnimationText"
}
</script>

<style lang='scss' scoped>

p,h1,h2,h3{
  color: white;
  text-align: start;
  padding-left: 16px;

}

.titre_principal{

  @include desktop{
    font-size: 60px;
  }

}

.text{
  animation: text-appared 6s 200ms ;
  margin-top: 40px;

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
