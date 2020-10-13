<template>
<div >
  <img class="heartbeat" src="../assets/imac2.jpg" alt="iphone">
</div>
</template>

<script>
export default {
name: "ImageHeartbeat"
}
</script>

<style lang='scss' scoped>

img{
  height: 150px;

  @include desktop{
    height: 300px;
  }

}

.heartbeat {
  animation: heartbeat 1s infinite alternate;
}

@keyframes heartbeat {
100%{
  transform: scale(1.1);
}
}
</style>
