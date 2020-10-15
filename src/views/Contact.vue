<template>
  <div class="contact_container">
    <Section_title title="Contact" subtitle="Stay in touch"/>
    <h2 class="slogan">Tous conseils et suggestions étant un bienfait, n'hésiter pas à me <span class="colored-text">contacter</span>, je suis aussi disponible pour tous types de projets.</h2>
    <div class="contact_main">
      <div class="contact_content">
          <img src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80" alt="desktop">
        <Contact_card/>
      </div>
      <div class="contact_side">
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
import Grid_image from "@/components/Grid_image";
import Contact_card from "@/components/Contact_card";
import Last_article from "@/components/Last_article";
export default {
name: "Contact",
  components: {Last_article, Contact_card, Grid_image, Social_bar, Section_title}
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables.scss";

p,h1,h2,h3{
  text-align: start;
  padding-left: 16px;
  @include desktop{
    padding-left: 15%;
  }
}

.contact_main{
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  @include desktop{
    flex-direction: row;
  }
}

.contact_content{
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  @include desktop{
    width: 70%;
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

.contact_side{

  @include desktop{
    width: 30%;
  }

}

.colored-text{
  color: $pink-pastel;
}
</style>
