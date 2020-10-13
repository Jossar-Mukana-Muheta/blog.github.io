<template>
  <div class="container_article">
    <div class="article"
         v-for="(item, key) in article"
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
        <p class="text">{{ item.texte }}</p>
      </div>


    </div>
  </div>
</template>

<script>
export default {
name: "ArticleBlog",
  props: {
    article : Object
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
    height: 150px;
    overflow: scroll;

    @include desktop{
      height: 200px;
    }

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
