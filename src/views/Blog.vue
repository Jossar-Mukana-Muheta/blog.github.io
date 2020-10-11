<template>
  <div>
  <Section_title title="BLOG" subtitle="Suivez mon quotidien de dévelloppeur en reconversion" />
    <div class="container_article">
      <div class="article"
           v-for="(item, key) in getAllArticle"
           :key="key"
      >
        <div class="left_side">
          <img :src='item.image' alt="">
          <p>{{item.creer}}</p>
          <p>{{item.time + " minute de lecture"}}</p>
        </div>
        <div class="right_side">
          <span class="categorie">{{item.categorie}}</span>
          <h2>{{ item.titre}}</h2>
          <p>{{ item.texte }}</p>
          <div class="like">
            <v-btn
                class="mx-2"
                fab
                dark
                small
                color="pink"
            >
              <v-icon dark>
                mdi-heart
              </v-icon>
            </v-btn>
            <p>{{item.like}}</p>
          </div>
        </div>


      </div>
    </div>


  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Section_title from "@/components/Section_title";

export default {
name: "Blog",
  components: {Section_title},
  computed:{
    ...mapGetters([
      'getAllArticle'
    ])
  },

  created(){
    this.$store.dispatch("addALL")
  }
}

</script>



<style lang='scss' scoped>
@import "src/styles/variables";

.container_article{
  margin-top: 50px;
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
    height: 250px;
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
