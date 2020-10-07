<template>
  <div class="home">
    <div class="presentation">
      <AnimationText/>
      <AnimationButton/>
    <AnimationBall/>

    </div>
    <h1>VueJs || NodeJS <span class="colored-text">Développeur</span> </h1>
    <div class="home_image_container">
      <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="desktop">
      <img src="https://images.unsplash.com/photo-1500207432837-973f6b39fcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" alt="nature">
      <img src="https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">
    </div>
    <h2 id="accueil">Hello, je suis <span class="colored-text">Jossar</span></h2>
    <p>Jeune développeur web spécialisé en <span class="colored-text">Vue JS et Node JS</span> <br/> Vous découvrirez ici ma passion pour le développement web et différents articles de mon <RouterLink to="/Blog">blog</RouterLink> qui vous permettront à vous aussi de découvrir, apprendre et connaître mes compétences à travers  <router-link to="/Portfolio">mes réalisations</router-link>. </p>
    <Social_bar/>
  </div>
</template>

<script>
// @ is an alias to /src


import Social_bar from "@/components/Social_bar";
import AnimationBall from "@/components/AnimationBall";
import AnimationButton from "@/components/AnimationButton";
import AnimationText from "@/components/AnimationText";
export default {
  name: 'Home',
  components: {
    AnimationText,
    AnimationButton,
    AnimationBall,
    Social_bar

  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.presentation{
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  margin-top: -49px;


}





.home{
  margin-top: 40px;
}


.home_image_container{
  display: flex;
align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @include desktop{
    flex-direction: row;
  }


  img{
    width: 40%;
    transition: all 1s ease-in-out;


    &:hover{
      transform: rotateX(25deg);
      opacity: 0.5;
      position: relative;

    }

  }
}

.colored-text{
  color: $pink-pastel;
}

h1{
  color: $gray-light !important;
  margin: 40px;
}

p{
  @include desktop{
    margin: 70px;
    margin-left: 25%;
    margin-right: 25%;
  }
  }

h2{
  margin: 40px;
}
</style>
