<template>
  <div class="formation container">

    <v-hover>
      <template v-slot="{ hover }">
  <v-card
      class="mx-auto"
      max-width="350"
      tile
      :elevation="hover ? 24 : 6"
  >
    <v-list dense>
      <v-subheader >FORMATION</v-subheader>
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
      { text: 'OpenCLassRooms', icon: 'mdi-crown', year:"2020", description: "BAC +2 développeur Web Full Stack" },
      { text: 'Web Force 3', icon: 'mdi-crown',year:"2018",description: "Certification développeur web et mobile" },
      { text: 'BTS Assurance', icon: 'mdi-crown',year:"2016",description: "" },
    ],
  }),
}
</script>
