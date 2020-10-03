
<template>
  <v-card
      max-width="375"
      class="mx-auto"
  >

    <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="#CEABA0">
            mdi-phone
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>(+33) 07 60 40 22 82</v-list-item-title>
          <v-list-item-subtitle>Mobile</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action></v-list-item-action>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="#CEABA0">
            mdi-email
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>mukanamj.devpro@gmail.com</v-list-item-title>
          <v-list-item-subtitle>Professionnel</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>


      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="#CEABA0">
            mdi-map-marker
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Paris</v-list-item-title>
          <v-list-item-subtitle>France</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
name: "contact_card"
}
</script>

<style lang='scss' scoped>

</style>
