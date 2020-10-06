<template>
  <div class="container_portfolio">
    <Section_title title="PORTFOLIO" subtitle="Works"/>
    <h2>Découvrez queqlues une de mes <span class="colored-text">réalisations</span></h2>
    <v-row
       class="justify-center"
    >

      <v-col
          v-for="(n,projet) in allProjet"
          :key="projet"
          class="d-flex  child-flex"
          cols="6"
          md="3"
      >
        <v-hover v-slot:default="{ hover }">
        <v-img

            :src="n.image"
            :lazy-src="n.image"
            aspect-ratio="1"
            class="grey lighten-2"
        >
          <v-expand-transition>
            <div
                v-if="hover"
                class="hover_div d-flex flex-column  transition-fast-in-fast-out black darken-9 v-card--reveal display-3 white--text"



            >
              <v-card-title>
                {{ n.title }}
              </v-card-title>
              <v-card-subtitle>
                {{ n.description }}
              </v-card-subtitle>
              <v-card-subtitle>
                {{ n.techno }}
              </v-card-subtitle>
              <v-btn

                  color="orange"
                  class="white--text"
                  fab
                  large
                  :href="n.link"
                  target="_blank"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>
          </v-expand-transition>
          <template v-slot:placeholder>
            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
            >
              <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        </v-hover>
      </v-col>

    </v-row>
  </div>
</template>

<script>
import Section_title from "@/components/Section_title";
export default {
name: "Portfolio",
  components: {Section_title},
  data:()=>{
  return{
    projets: [
      {title: "Association JESSE", techno: "Vue Js / Node Js", description: "Association humanitaire", link: "https://asso-jesse.fr/", image: "https://images.unsplash.com/photo-1601922369043-c1e6808d9102?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
      {title: "So Peckocko", techno: "Node Js / Express / MongoDB", description: "Construire une API sécurisé", link: "https://github.com/Jossar-Mukana-Muheta/So_Peckocko-Backend", image: "https://images.unsplash.com/photo-1601622290660-60d506f88934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80"},
      {title: "Orinico", techno: "JavaScript", description: "Construire un site e-commerce", link: "https://jossar-mukana-muheta.github.io/Orinoco.github.io/", image: "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
      {title: "La chouette agence", techno: "Google search console, Google Analytics, Référencement naturel", description: "Optimisation SEO d’un site", link: "https://jossar-mukana-muheta.github.io/Openclassroom_SEO_optimise.github.io/", image: "https://images.unsplash.com/photo-1601922510016-656f24258a8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"}
    ]
  }
},
  computed: {
    allProjet: function (){
      return this.projets
    }
  }
}
</script>

<style lang='scss' scoped>
@import "src/styles/variables";

h2{
  margin-top: 50px;
  margin-bottom: 50px;
}

.colored-text{
  color: $pink-pastel;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}

.hover_div{
  height: 100%;

  .v-card__subtitle, .v-card__text, .v-card__title {
    padding: 5px;

    @include desktop{
      padding: 16px;
    }
  }

  .v-btn--fab.v-size--large {
    height: 44px;
    width: 47px;

    @include desktop{
    height: 44px;
    width: 47px;
    }
  }


}
</style>
