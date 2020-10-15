<template>
  <div class="container_article">
    <div class="article"
         v-for="(item, key) in article"
         :key="key"
    >
      <div class="left_side">
        <img :src='item.image' alt="">
        <p>{{item.creer}}</p>
          <p v-if="item.time <= 1">{{ item.time + " minute de lecture"}}</p>
          <p v-else>{{ item.time + " minutes de lecture"}}</p>
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
    article : Array
  }
}

</script>

<style lang='scss' scoped>
@import "src/styles/variables";

.container_article{
  margin-top: 50px;

  @include desktop{
    margin-left: 15%;
    margin-right: 15%;
  }

}

.article{
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: start;
  border-bottom: gray 1px solid;

  @include desktop{
    flex-direction: row;
    display: flex;


  }

  img{
    height: 200px;
    width: 100%;
    @include desktop{
      width: 250px;
    }

  }

}

.left_side{
  display: flex;
  flex-direction: column;
  align-items: start;


  p{
    margin-top: 5px;
    margin-bottom: 0px;
  }
}

.right_side{

  display: flex;
  flex-direction: column;
  align-items: start;


  @include desktop{
    margin-left: 10px;
  }

  p{
    text-align: justify;
    height: 150px;
    overflow: scroll;

    @include desktop{
      max-height: 400px;
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
h2{
  margin-bottom: 0.5em;
}

span{
  margin: 0px;
}

</style>
