<template>
    <div class="container_article">
      <div class="article"
           v-for="(item, key) in elt"
           :key="key"
      >
        <div class="left_side">
          <img :src='item.image' alt="photo">
          <p>{{item.creer}}</p>
          <p>{{item.time + " minute de lecture"}}</p>
        </div>
        <div class="right_side">
          <span class="categorie">{{item.categorie}}</span>
          <h2>{{ item.titre}}</h2>
          <p class="text">{{ item.texte }}</p>
        </div>
      </div>
    </div>

</template>

<script>


export default {


name: "Article",
  data(){
  return{
    elt : []
  }
},
  computed: {

  },
  methods:{
    addElt : function (id){
      return this.elt.push(this.$store.getters['getById'](id))
    }
  }
,
  created() {
  this.addElt(this.$route.params.titre)
  }

}
</script>

<style lang='scss' scoped>
@import "src/styles/variables";

.container_article{
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.article{
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: gray 1px solid;

  @include desktop{
    flex-direction: row;
    display: flex;
    margin: 20px;
    width: 90vw;
  }

  img{
    height: 200px;
    width: 250px;
  }

}

.left_side{
  display: flex;
  flex-direction: column;
  align-items: center;


  p{
    margin-top: 5px;
    margin-bottom: 0px;
  }
}

.right_side{
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;

  p{
    text-align: justify;


  }
}

.categorie{
  color: $pink-pastel;
  text-transform: uppercase;
}

.like{
  display: flex;

  p{
    color: $pink-pastel;
    font-weight: bold;
    font-size: larger;
  }
}
</style>
