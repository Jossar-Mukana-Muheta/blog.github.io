<template>
  <div class="home">
    <div id="loader-wrapper">
      <span class="loader"><span class="loader-inner"></span></span>
      <AnimationBall class="ball"/>
    </div>
    <div class="presentation">
        <AnimationText/>
      <ImageHeartbeat class="imagebounce"/>
      <AnimationButton background-color="white" icon-color="black" icon="mdi-chevron-double-down" lien="#accueil"/>
    </div>
<div class="contenu">
  <h1><span class="colored-text">Développeur</span> Front-end Vue Js || Paris - France </h1>
  <div class="home_image_container">
  </div>
  <h2 id="accueil">Hello, je suis <span class="colored-text">Jossar</span></h2>
  <p>Développeur web front-end spécialisé en <span class="colored-text">Vue JS </span> <br/> Vous découvrirez ici ma passion pour le développement web et différents articles de mon <RouterLink to="/Blog">blog</RouterLink> qui vous permettront à vous aussi de découvrir, apprendre et connaître mes compétences à travers  <router-link to="/Portfolio">mes réalisations</router-link>. </p>
  <Social_bar/>
</div>
  </div>
</template>

<script>

// @ is an alias to /src
import Social_bar from "@/components/Social_bar";
import AnimationBall from "@/components/AnimationBall";
import AnimationButton from "@/components/AnimationButton";
import AnimationText from "@/components/AnimationText";
import ImageHeartbeat from "@/components/ImageHeartbeat";
export default {
  name: 'Home',
  components: {
    ImageHeartbeat,
    AnimationText,
    AnimationButton,
    AnimationBall,
    Social_bar

  },
  created() {
    setTimeout(function(){
      document.getElementById("loader-wrapper").style.opacity="0";
      document.getElementById("loader-wrapper").style.zIndex="-2"
    }, 3000);
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

#loader-wrapper{
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: $black;
  display:flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  z-index: 99;
}

.loader {
  display: inline-block;
  width: 50px;
  height: 50px;
  margin-top: 50vh;
  position: relative;
  border: 4px solid #Fff;
  animation: loader 2s infinite ease;
}
.loader-inner {
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: #fff;
  animation: loader-inner 2s infinite ease-in;
}
@keyframes loader {
  0% { transform: rotate(0deg);}
  25% { transform: rotate(180deg);}
  50% { transform: rotate(180deg);}
  75% { transform: rotate(360deg);}
  100% { transform: rotate(360deg);}
}
@keyframes loader-inner {
  0% { height: 0%;}
  25% { height: 0%;}
  50% { height: 100%;}
  75% { height: 100%;}
  100% { height: 0%;}
}
.presentation{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: $black;
  margin-top: -49px;

  @include desktop{
    flex-direction: row;
  }
}

.contenu{

  padding-left: 16px;

  @include desktop{
    margin-left: 15%;
    margin-right: 15%;
  }

}

.home{
  margin-top: 40px;
}


.home_image_container{
 height: 300px;
  background-image: url("../assets/2586.jpg");
  background-attachment: fixed;
  background-position: center;

  background-size: contain;


  @include desktop{
    background-size: cover;
    height: 400px;
  }

}

.colored-text{
  color: $pink-pastel;
}

h1{
  color: $gray-light !important;
  margin-top: 40px;
  margin-bottom: 40px;
}

h2{
  margin-top: 40px;
  margin-bottom: 0.5em;
}

p,h1,h2,h3{
  text-align: start;


  }
p{

  @include desktop{
    padding-right: 600px;
  }
}

</style>
