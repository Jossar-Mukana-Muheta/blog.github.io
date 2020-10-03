<template>
  <v-app>
      <div class="container-body">
        <AppHeader/>
        <div class="contain">
          <router-view />
        </div>
        <AppFooter/>
      </div>



  </v-app>
</template>

<script>


import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";
export default {
  name: 'App',

  components: {
    AppFooter,
    AppHeader

  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "./styles/variables.scss";

.container-body{
  display: grid !important;
  grid-template-rows: inherit ;
  grid-gap: 20px;

}

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

p{
  color: $gray-text;
}
</style>
