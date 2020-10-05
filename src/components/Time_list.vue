<template>
  <v-card
      class="mx-auto"
      max-width="400"
  >
    <v-card-text class="py-0">
      <v-timeline
          align-top
          dense
      >
        <v-timeline-item
            color="pink"
            small
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>2020</strong>
            </v-col>
            <v-col>
              <strong>OpenClassRooms</strong>
              <div class="caption">
                BAC +2 développeur Web Full Stack
              </div>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
            color="teal lighten-3"
            small
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>2018</strong>
            </v-col>
            <v-col>
              <strong>Web Force 3</strong>
              <div class="caption mb-2">
                Certification développeur web et mobile
              </div>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item
            color="pink"
            small
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>2016</strong>
            </v-col>
            <v-col>
              <strong>BTS Assurance</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
name: "Time_list"
}
</script>

<style lang='scss' scoped>

</style>
