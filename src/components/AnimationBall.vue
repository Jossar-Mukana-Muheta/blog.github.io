<template>
  <div class="box">
    <div id="anim-two">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
name: "AnimationBall"
}
</script>

<style lang='scss' scoped>
// Little Circles Bounce
#anim-two {
  text-align: center
}
// padding-top: 150px
ul {
  text-align: center;
  list-style: none
}
li {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: red;
  display: inline-block;
  margin: 0 5px;
  transform: translateY(-30px);
  animation: bounce-balls 2s cubic-bezier(0.245, 0.325, 0.510, 1.305) infinite alternate;

  &:nth-child(1) {
    background: #FF0000;
    animation-delay: .6s
  }

  &:nth-child(2) {
    background: #FFA500;
    animation-delay: .7s
  }

  &:nth-child(3) {
    background: #ffff00;
    animation-delay: .8s
  }

  &:nth-child(4) {
    background: #008000;
    animation-delay: .6s
  }

  &:nth-child(5) {
    background: #0000FF;
    animation-delay: .6s
  }

  &:nth-child(6) {
    background: #4b0082;
    animation-delay: .7s
  }

  &:nth-child(6) {
    background: #ee82ee;
    animation-delay: .8s
  }
}
@keyframes bounce-balls {
  30% {
    transform: translateY(-430px)
  }
  60% {
    transform: translateY(105px)
  }
  80% {
    transform: translateY(90px)
  }
  100% {
    transform: translateY(95px)
  }
}
</style>
