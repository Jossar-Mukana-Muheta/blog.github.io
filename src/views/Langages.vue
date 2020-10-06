<template>
<div>
  <Section_title title="Mes Compétences" subtitle="Skills"/>

  <div class="langages">
    <Skills_card choix="backEnd"/>
  </div>
</div>
</template>

<script>
import Section_title from "@/components/Section_title";
import Skills_card from "@/components/Skills_card";
export default {
name: "Langages",
  components: {Skills_card, Section_title},
  data:()=>{
  return{
    choix: "skills"
  }
  }
}
</script>

<style lang='scss' scoped>
  @import "src/styles/variables";

  .langages{
    margin-top: 50px;
  }


</style>
