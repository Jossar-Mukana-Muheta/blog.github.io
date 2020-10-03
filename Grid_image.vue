<template>
  <div class="container_img">
    <div v-for="(image, item) in img" :key="item" class="image">
      <img :src="item" alt="photo">
    </div>
  </div>
</template>

<script>
export default {
name: "Grid_image",
  data(){
  return{
    img: [
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
        "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
    ]
  }
  }
}

</script>

<style scoped>

</style>
