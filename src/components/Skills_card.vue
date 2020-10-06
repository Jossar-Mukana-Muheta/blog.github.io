<template>
  <div><h2><span :class="{ 'colored-text' : choicefront }"><button @click.prevent="frontEnd">FRONT-END</button></span>  || <span :class="{ 'colored-text' : choiceback }"><button @click.prevent="back">BACK-END</button></span></h2>
  <div class="skills_container">
    <v-hover
        v-for="(card,item) in selectedSkills" :key="item"
    >
      <template v-slot="{ hover }">
  <v-card

      max-width="400"

      :class="`elevation-${hover ? 24 : 6}`"
      class="mx-auto  transition-swing"
  >
    <v-img
        class="white--text align-end"
        height="200px"
        :src="card.image"
    >
      <v-card-title>{{ card.title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0"
      v-for="(description, elt) in card.description" :key="elt"
    >
      {{ description }}
    </v-card-subtitle>



    <v-card-actions>
      <v-btn
          color="orange"
          text
      >
        Portfolio
      </v-btn>
    </v-card-actions>
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
        {title : "Vue Js", description: ["Vuex","Vue router","Vuetify","","",""], image: "https://www.log2e.com/wp-content/uploads/2019/01/vuejs_tutorial.png"},
        {title : "Front-end", description: ["SASS", "Flexbox", "Responsive Design", "Bootstrap","Webpack"], image: "https://3cthinkers.com/en/wp-content/uploads/2017/03/dynamicpages.jpeg"},

      ],
      backEnd : [
        {title : "Node Js", description: ["Express", "Mongoose", "Jsonwebtoken","API rest",""], image: "https://www.surrealcms.com/uploads/nodejs-logo.png"},
        {title : "", description: ["GitHub", "Trello", "Firebase", "MongoDB", "MySql", "Vs Code", "WebStorm"], image: "https://embedwistia-a.akamaihd.net/deliveries/a38d197dbbd618052f512eece506dd41572f77aa.webp?image_crop_resized=960x540"}
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
