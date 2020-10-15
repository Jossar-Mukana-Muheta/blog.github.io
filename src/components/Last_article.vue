<template>
  <div class="last_articleContainer">
    <h3 class="article_title">Derniers articles de mon blog :</h3>
    <div class="container_article">
      <div >
        <v-container>
          <v-row dense>
        <v-col
            v-for="(item, i) in getAllArticle"
            :key="i"
            cols="12"
        >
          <v-card
              color="#CEABA0"
              dark
          >
            <div class="d-flex flex-no-wrap justify-space-around">
              <div>
                <v-card-title
                    style="word-break: inherit"
                    v-text="item.titre"
                ></v-card-title>

                <v-card-subtitle v-text="item.categorie"></v-card-subtitle>
                <v-card-subtitle v-text="item.creer"></v-card-subtitle>
                <v-btn depressed color="transparent" class="ma-1">
                  <RouterLink :to="{name: 'Article', params:{ titre: item.id }}">lire</RouterLink>
                </v-btn>
              </div>

              <v-avatar
                  class="ma-3"
                  size="125"
                  tile

              >
                <v-img :src="item.image"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
        </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
name: "Last_article",
  data: ()=>{
  return{
    items: [
      {
        color: '#FFFFFF',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People',
      },
      {
        color: '#FFFFFF',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
    ],
  }
  },
  computed: {
    ...mapGetters([
        'getAllArticle'
    ])
  }
}
</script>

<style lang='scss' scoped>

.last_articleContainer{
  margin-top: 50px;
  margin-bottom: 50px;
}

.container_article{
  display: flex;
  flex-direction: column;
  align-items: center;
}

  .article_item{
    width: 85%;
    margin: 20px;
  }

  img{
    height: 20px;
  }

p,h1,h2,h3{
  text-align: start;
  padding-left: 16px;
  @include desktop{
    padding-left: 0px;
  }
}
</style>
