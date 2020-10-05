<template>
  <div class="bio_container">
    <Section_title title="A propos de moi ..." subtitle="About Me"/>
    <p class="slogan">Découvrez ici mon parcours, mes formations ainsi que mes hobbies.</p>
    <div class="bio_main">
      <div class="bio_content">
        <img src="../assets/profil.jpg" alt="photo-profil">
        <p>
          Bonjour, je m'appelle MUKANA MUHETA jossar<br/>
          Je suis passionnée par les nouvelles technologies et particulièrement tout ce qui touche au développement web et mobile, après avoir travaillé pendant des années dans la gestion de sinistre assurance, j'ai décidé de reprendre en parallèle mes études et de m'auto-former pour faire de ma passion mon métier.<br/>
          J'ai d'abord été autodidacte en me formant seul en ligne, puis j'ai pu intégrer depuis février 2020 une formation diplômant avec Openclassrooms et me spécialiser entant que développeur Full Stack Javascript.<br/>
          J'ai donc choisit de me spécialiser sur Vuejs et NodeJs<br/>

          Je me suis ensuite lancer en Freelance pour mettre en pratique mes compétences<br/>

          J'apprends constamment les technologies Web et d'autres sujets liés au design.</p>
        <Time_list/>
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

.bio_content{
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  align-items: center;
  @include desktop{
    width: 60%;
    align-items: center;
  }

  img{
    width: 50%;
    margin-bottom: 20px;
    border-radius: 20px;

    @include desktop{
      width: 60%;
    }
  }
}

.bio_side{

  @include desktop{
    width: 40%;
  }

}

</style>
