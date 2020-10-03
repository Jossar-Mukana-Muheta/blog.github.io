<template>
  <div class="contact_container">
    <Section_title title="Contact" subtitle="Stay in touch"/>
    <p class="slogan">Tous conseils et suggestions étant un bienfait, n'hésiter pas à me contacter, je suis aussi disponible pour tous types de projets.</p>
    <div class="main">
      <div class="main_content">
          <img src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80" alt="desktop">
        <Contact_card/>
      </div>
      <div class="side_content">
        <h3>Suivez-moi sur les réseaux sociaux.
        </h3>
        <Social_bar/>
        <h3 class="article_title">Derniers articles
        </h3>
        <Grid_image/>
      </div>
    </div>
  </div>
</template>

<script>
import Section_title from "@/components/Section_title";
import Social_bar from "@/components/Social_bar";
import Grid_image from "@/components/Grid_image";
import Contact_card from "@/components/Contact_card";
export default {
name: "Contact",
  components: {Contact_card, Grid_image, Social_bar, Section_title}
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables.scss";


.main{
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  @include desktop{
    flex-direction: row;
  }
}

.main_content{

  @include desktop{
    width: 60%;
  }
}

.side_content{

  @include desktop{
    width: 40%;
  }

}

.slogan{
  margin: 50px;
}

h3{
  margin-top: 30px;

}

.article_title{
  @include desktop{
    text-align: left;
    margin-left: 20px;
  }
}

.main_content{
  display: flex;
  padding: 1.5rem;
  flex-direction: column;

  @include desktop{
    align-items: center;
  }

  img{
    width: 100%;
    margin-bottom: 20px;

    @include desktop{
      width: 60%;
    }
  }
}
</style>
