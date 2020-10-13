<template>
  <div><h2><span :class="{ 'colored-text' : choicefront }"><button @click.prevent="frontEnd">FRONT-END</button></span>  || <span :class="{ 'colored-text' : choiceback }"><button @click.prevent="back">BACK-END</button></span></h2>
  <div class="skills_container">
    <v-hover
        v-for="(card,item) in selectedSkills" :key="item"
    >
      <template v-slot="{ hover }">
  <v-card

      width="400"
      :class="`elevation-${hover ? 24 : 6}`"
      class="mx-auto  transition-swing"
  >
    <v-img
        class="white--text align-end"
        height="200px"
        :src="card.image"
        cover
        color="black"
    >
      <v-card-title>{{ card.title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0"
      v-for="(description, elt) in card.description" :key="elt"
    >
      {{ description }}
    </v-card-subtitle>




  </v-card>
      </template>
    </v-hover>
  </div>
  </div>
</template>

<script>
export default {
  name: "Skills_card",
  props: [
      "choix"
  ],
  data:()=>{
    return{
      choice : "",
      choicefront:false,
      choiceback: false,
      skills : [
        {title : "JavaScript", description: ["Manipulation et modification du DOM", "Gestion des événements"," Communication avec une API"," Gérer du code asynchrone"," Gestion des requêtes http, requête url, local Storage"], image: "https://miro.medium.com/max/3600/1*6ahbWjp_g9hqhaTDSJOL1Q.png"},
        {title : "Vue Js", description: ["Vuex","Vue router","Vuetify","","",""], image: "https://www.log2e.com/wp-content/uploads/2019/01/vuejs_tutorial.png"},
        {title : "HTML 5", description: [" Assurer la conformité d'une page web aux standards HTML"," Intégrer du contenu conformément à une maquette"," Adapter l'affichage d'un site web (responsive, mobile first)","Définir la structure d'une page web à partir d'une maquette","",""], image: "https://www.mathieuchartier.com/wp-content/uploads/html5.jpeg"},
        {title : "CSS 3", description: ["Mettre en œuvre des effets CSS graphiques avancés"," Assurer la cohérence graphique d'un site web"," Utiliser des animation CSS avancé (transition, keyframes)"," Utilisation de CSS grid et de flexbox","Materializecss","Bootstrapp"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2uNH2fAJOW7P1q6aPj4kgLim98YMQjQLWzg&usqp=CAU"},
        {title : "Sass", description: ["Utilisation du pattern 7-1", " Utilisation des mixins, variable"], image: "https://www.pierre-giraud.com/wp-content/uploads/2019/09/sass-cours-logo.jpg"},
        {title : "SEO", description: ["Bonne pratique pour amélioration référencement naturel", " Assurer l'accessibilité d'un site web", "Écrire un code HTML et CSS maintenable","Optimiser la taille et la vitesse d’un site web","Faire un audit et optimiser le référencement d'un site web","Améliorer la crawabilité"], image: "https://www.pme-web.com/wp-content/uploads/bfi_thumb/Referencement-Google-Page-Facebook-n5p5qxo2ng5qb9hvf4czm0g5w8qwuadn46rpoihkpk.png"},
        {title : "Front-end", description: ["Flexbox", "Responsive Design", "Bootstrap","Webpack"], image: "https://d22wsyl1zemnyu.cloudfront.net/images/frontendfront-logo-share.png"}

      ],
      backEnd : [
        {title : "Node Js", description: ["Création d’un serveur Node avec Express", "Création d’une API en respectant le RGPD et les standards OWASP", "Création de routes en suivant les spécifications","Implémenter le CRUD (create, Read, update, delete)",""], image: "https://www.surrealcms.com/uploads/nodejs-logo.png"},
        {title : "Base de donées", description: ["MongoDB", "Firebase", "MySql","AWS"], image: "https://www.kindpng.com/picc/m/218-2183666_clip-art-database-logo-database-cloud-hd-png.png"},
        {title : "", description: ["GitHub", "Trello", "Vs Code", "WebStorm"], image: "https://embedwistia-a.akamaihd.net/deliveries/a38d197dbbd618052f512eece506dd41572f77aa.webp?image_crop_resized=960x540"}
      ]
    }
},
  methods: {
    frontEnd : function (){
      this.choice = this.skills
      this.choicefront = true
      this.choiceback = false
},
    back : function (){
      this.choice = this.backEnd
      this.choicefront = false
      this.choiceback = true
    }
  },
  computed:{
    selectedSkills: function (){
      return this.choice
    }
  },
  created() {
    this.choice = this.skills
    this.choicefront = true
  }
}
</script>

<style lang='scss' scoped>
@import "src/styles/variables";

.skills_container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

}

.v-card{
  margin-top: 20px;
  margin-bottom: 20px;
}

h2{
  margin-top: 50px;
  margin-bottom: 50px;
}

.colored-text{
  color: $pink-pastel;
}
</style>
