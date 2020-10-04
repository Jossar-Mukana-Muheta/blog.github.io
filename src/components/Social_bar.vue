<template>
  <v-card-text>
    <h3>Suivez-moi sur les réseaux sociaux.
    </h3>
  <v-btn
      v-for="icon in icons"
      :key="icon"
      class="mx-2 black--text"
      icon
  >
    <v-icon size="14px">{{ icon }}</v-icon>
  </v-btn>
  </v-card-text>
</template>

<script>
export default {
name: "Social_bar",
  data(){
  return{
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }
  }
}
</script>

<style scoped>

</style>
