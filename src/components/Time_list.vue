<template>
  <v-card
      class="mx-auto ml-0"
      width="400"
  >
    <v-card-text class="py-0 ma-0 texteElement">
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
                BAC +2 développeur Web Full Stack Javascript
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
.v-card{
  margin-top: 50px;
  margin-bottom: 50px;
}

.texteElement{
  @include desktop{
    transition: all 3s ease-in-out;
    &:hover{
      transform: translate(50%);
    }
  }
}
</style>
