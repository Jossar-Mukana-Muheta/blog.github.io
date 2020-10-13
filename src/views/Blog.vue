<template>
  <div>
  <Section_title title="BLOG" subtitle="Suivez mon quotidien de dévelloppeur Web en reconversion" />
    <div class="selection">
    </div>
  <ArticleBlog :article="getAllArticle"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Section_title from "@/components/Section_title";
import ArticleBlog from "@/components/ArticleBlog";

export default {
name: "Blog",
  components: {ArticleBlog, Section_title},
  data(){
  return{
    choice : "",
    choicefront:false,
    choiceback: false,
  }
  },
  computed:{
    ...mapGetters([
      'getAllArticle'
    ])

  }
}

</script>



<style lang='scss' scoped>
@import "src/styles/variables";

.selection{
  margin-top: 50px;
}



</style>
