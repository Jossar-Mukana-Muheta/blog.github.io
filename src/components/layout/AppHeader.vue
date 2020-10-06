<template>
  <div>
    <v-navigation-drawer
        app
        v-model="drawer"
        class="white lighten-2"
        dark
        disable-resize-watcher
    >
      <v-toolbar-title class="name">Jossar MM</v-toolbar-title>

      <v-list nav dense>
        <v-list-item-group color="secondary">
          <v-list-item v-for="(items,item) in drawerItems" :key="item">
            <v-list-item-content>
              <v-list-item-title>
                <router-link :to="items.link">
                  {{ items.name}}
                </router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-spacer></v-spacer>
      <Social_bar/>
    </v-navigation-drawer>
    <v-app-bar
        prominent
    >
      <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click.stop="drawer = !drawer"
      >

      </v-app-bar-nav-icon>

      <v-toolbar-title class="name">Jossar Mukana Muheta</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn depressed class="hidden-sm-and-down" text v-for="(navItem, elt) in drawerItems" :key="elt"
      >
        <router-link :to="navItem.link">
          {{ navItem.name }}
        </router-link>
      </v-btn>

    </v-app-bar>
  </div>
</template>

<script>
import Social_bar from "@/components/Social_bar";
export default {
  name: "AppHeader",
  components: {Social_bar},
  data : function (){
    return{
      drawer: false,
      drawerItems : [
        {name: "Accueil", link: "/"},
        {name: "Bio", link: "/Bio"},
        {name: "MES COMPETENCES", link: "/Langages"},
        {name: "Portfolio", link: "/Portfolio"},
        {name: "Blog", link: "/Blog"},
        {name: "Contact", link: "/Contact"}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables.scss";
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Source+Serif+Pro:wght@200&display=swap');

.name{
  font-family: 'Permanent Marker', cursive;
}

.v-application a{
  color:$gray-text ;
  text-decoration: none;
}

button{
  margin-top: 40px;

}

</style>
