<template>
<div >
  <img class="heartbeat" src="../assets/iphone-transparence.png" alt="iphone">
</div>
</template>

<script>
export default {
name: "ImageHeartbeat"
}
</script>

<style lang='scss' scoped>

.heartbeat {
  animation: heartbeat 1s infinite alternate;
}

@keyframes heartbeat {
100%{
  transform: scale(1.1);
}
}
</style>
