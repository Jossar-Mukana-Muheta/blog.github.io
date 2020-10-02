<template>
  <v-app>
    <v-main>
      <AppHeader/>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>


import AppHeader from "@/components/layout/AppHeader";
export default {
  name: 'App',

  components: {
    AppHeader

  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "./styles/variables.scss";

.v-application {
  font-family: $body-font-family;
  text-align: center;
  padding: 3px;

}
.headline,
.title,
.subheading{
  font-family: $body-font-family !important;
}


body{
  background-color: #fafafa !important;
  min-height: 100%;
  overflow: hidden;

}

* {
  padding: 0;
  margin: 0;
}
</style>
