<template>
  <div>
    <h3 class="article_title">Mes centres d'intêret
    </h3>
    <div class="container_img">
      <div v-for="photo in img" :key="photo" class="image">
        <img :src="photo" alt="photo">
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Grid_image",
  data(){
  return{
    img: [
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1588442025058-dffe84001858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=898&q=80",
        "https://images.unsplash.com/photo-1601701119533-fde20cecbf4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
        "https://images.unsplash.com/photo-1601696004236-391e81b4ba9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1601681873506-669fd846d01c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1592421972344-e7db99d3f6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80",
        "https://images.unsplash.com/photo-1494022299300-899b96e49893?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1486728297118-82a07bc48a28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
        "https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1543055131-ac87bf2f6ac1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    ]
  }
  }
}

</script>

<style lang="scss" scoped>

@import "src/styles/variables";

  .image{
    width: 25%;


    img{
      width: 90%;
      min-height: 70px;
      max-height: 180px;
      transition: all 1s ease-in-out;
      z-index: 1;

      @include desktop{
        width: 70%;
      }

      &:hover{
      opacity: 0.5;
        z-index: 2;
    }

    }
  }

h3{
  text-align: left;
  margin-left: 20px;
}

  .container_img{
    display: flex;
    flex-direction: row;
    margin: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
