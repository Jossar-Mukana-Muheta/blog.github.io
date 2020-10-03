<template>
  <v-footer
      color="#CEABA0"
      padless

  >


      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>JMM</strong>
      </v-card-text>

  </v-footer>
</template>

<script>
export default {
name: "AppFooter",
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>

<style scoped>

footer{
  margin-top: 30px;
}
</style>
