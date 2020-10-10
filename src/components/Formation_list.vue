<template>
  <div class="formation_container">

    <v-hover>
      <template v-slot="{ hover }">
  <v-card
      class="mx-auto"
      max-width="500"
      tile
      :elevation="hover ? 24 : 6"
  >
    <v-list min-width="300" dense>
      <v-subheader >SOFT SKILLS</v-subheader>
      <div class="container_skills">
      <v-list-item-group
          v-model="item"
          color="primary"

      >
        <v-list-item
            v-for="(item, i) in items"
            :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
            <v-list-item-subtitle v-text="item.year" color="red"></v-list-item-subtitle>
            <v-list-item-subtitle v-text="item.description" color="red"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      </div>
    </v-list>
  </v-card>
      </template>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: 'Formation_list',
  data: () => ({
    item: 1,
    items: [
      { text: "Curiosité d'esprit", icon: 'mdi-white-balance-incandescent' },
      { text: 'Pensée critique', icon: 'mdi-brain' },
      { text: 'Organisé', icon: 'mdi-folder-multiple-outline', },
      {text: "Toujours positive", icon:'mdi-thumb-up' },
      {text: "Esprit d'équipe", icon: 'mdi-human-male-female'}
    ],
  }),
}
</script>

<style lang="scss" scoped>
  @import "src/styles/variables.scss";

  .formation_container{
    margin-top: 50px;
  }
</style>
