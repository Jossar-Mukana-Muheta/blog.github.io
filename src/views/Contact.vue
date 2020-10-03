<template>
  <div class="contact_container">
    <Section_title title="Contact" subtitle="Stay in touch"/>
    <div class="main">
      <div class="main_content">
          <p>Tous conseils et suggestions étant un bienfait, n'hésiter pas à me contacter, je suis aussi disponible pour tous types de projets.</p>
          <div class="information">

          </div>
        <div>
          <img src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80" alt="desktop">
        </div>
        <h3>Suivez-moi sur les réseaux sociaux.
        </h3>
        <Social_bar/>
      </div>
      <div class="side_content">
        <Grid_image/>
      </div>
    </div>
  </div>
</template>

<script>
import Section_title from "@/components/Section_title";
import Social_bar from "@/components/Social_bar";
import Grid_image from "../../Grid_image";
export default {
name: "Contact",
  components: {Grid_image, Social_bar, Section_title}
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables.scss";

.main{
  display: flex;
  margin-top: 30px;
}

.main_content{
  display: flex;
  padding: 1.5rem;
  flex-direction: column;

  img{
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
