<template>
  <div class="bio_container">
    <Section_title title="A propos de moi ..." subtitle="About Me"/>
    <h2 class="slogan">Découvrez ici mon <span class="colored-text">parcours</span>, mes formations ainsi que mes hobbies.</h2>
    <div class="bio_main">
      <div class="bio_content">
        <p>
          Bonjour, je m'appelle MUKANA MUHETA jossar<br/>
          Je suis passionnée par les nouvelles technologies et particulièrement tout ce qui touche au développement web et mobile, après avoir travaillé pendant des années dans la gestion de sinistre assurance, j'ai décidé de reprendre en parallèle mes études et de m'auto-former pour faire de ma passion mon métier.<br/>
          J'ai d'abord été autodidacte en me formant seul en ligne, puis j'ai pu intégrer depuis février 2020 une formation diplômant avec Openclassrooms et me spécialiser entant que développeur Full Stack Javascript.<br/>
          J'ai donc choisit de me spécialiser sur Vuejs et NodeJs<br/>

          Je me suis ensuite lancer en Freelance pour mettre en pratique mes compétences<br/>

          J'apprends constamment les technologies Web et d'autres sujets liés au design.</p>
        <h3>FORMATION</h3>
        <Time_list/>
        <h3>SOFT SKILLS</h3>
        <Formation_list/>
      </div>
      <div class="bio_side">
        <Social_bar/>
        <Last_article/>
        <Grid_image/>
      </div>
    </div>
  </div>
</template>

<script>
import Section_title from "@/components/Section_title";
import Social_bar from "@/components/Social_bar";
import Last_article from "@/components/Last_article";
import Grid_image from "@/components/Grid_image";
import Formation_list from "@/components/Formation_list";
import Time_list from "@/components/Time_list";
export default {
  components: {Time_list, Formation_list, Grid_image, Last_article, Social_bar, Section_title}
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.bio_main{
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  @include desktop{
    flex-direction: row;
    align-items: center;
  }
}
p,h1,h2,h3{
  text-align: start;
  padding-left: 16px;

}

p{

  @include desktop{
    padding-right: 100px;
  }
}


.bio_content{
  display: flex;
  flex-direction: column;
  align-items: start;
  @include desktop{
    width: 70%;
    align-items: start;

  }



  img{
    width: 30%;
    margin-bottom: 20px;
    border-radius: 20px;

    @include desktop{
      width: 25%;
    }
  }
}

.bio_side{

  @include desktop{
    width: 30%;
    background-color: $gray-light-text;
  }

}

.colored-text{
  color: $pink-pastel;
}



</style>
