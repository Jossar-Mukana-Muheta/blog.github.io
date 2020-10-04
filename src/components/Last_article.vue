<template>
  <div class="last_articleContainer">
    <h3 class="article_title">Derniers articles
    </h3>
    <div class="container_article">
      <div
          class="article_item"
          v-for="(item, i) in items"
          :key="i"

      >

        <v-hover>
          <template v-slot="{ hover }">
        <v-card
            :elevation="hover ? 24 : 6"

        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                  class="headline mb-1"
                  v-text="item.title"
              ></v-card-title>

              <v-card-subtitle v-text="item.artist" color="black"></v-card-subtitle>

                <v-btn
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                >
                  lire ...
                </v-btn>

            </div>

            <v-avatar
                class="ma-3"
                size="125"
                tile
            >
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
          </template>
        </v-hover>
      </div>
    </div>
  </div>
</template>

<script>
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
</style>
