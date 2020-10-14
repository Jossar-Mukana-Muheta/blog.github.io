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
  })
,

created(){
  this.$store.dispatch("addALL")

}
};
</script>

<style lang="scss">
@import "./styles/variables.scss";

.container-body{
  display: grid !important;
  grid-auto-rows: 0.2fr 3fr 0.3fr ;
  grid-gap: 5px;

}

.contain{
  min-height: 100vh;
}

.v-application {
  font-family: $body-font;
  text-align: center;
  padding: 3px;

}
.headline,
.title,
.subheading{
  font-family: $body-font !important;
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

.slogan{
  margin-top: 50px;
}

h3{
  margin-top: 30px;
}
</style>
