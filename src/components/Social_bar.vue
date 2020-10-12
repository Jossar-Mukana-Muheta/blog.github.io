<template>
  <v-card-text>
    <h3>Suivez-moi sur les réseaux sociaux.
    </h3>
  <v-btn
      v-for="(icon,key) in icons"
      :key="key"
      class="mx-2 black--text"
      :href="icon.lien"
      target="_blank"
      icon
  >
    <v-icon size="14px">{{ icon.social }}</v-icon>
  </v-btn>
  </v-card-text>
</template>

<script>
export default {
name: "Social_bar",
  data(){
  return{
    icons: [
      {social: 'mdi-github', lien:"https://github.com/Jossar-Mukana-Muheta"},
      {social: 'mdi-twitter', lien:"https://twitter.com/MJossar"},
      {social :'mdi-linkedin', lien:"https://www.linkedin.com/in/jossar-mukana-muheta/"},
      {social :'mdi-trello', lien:"https://trello.com/mukanamuhetajossar/"},
      {social : 'mdi-gmail', lien:"mailto:mukanamj.devpro@gmail.com"},
    ],
  }
  }
}
</script>

<style scoped>

</style>
