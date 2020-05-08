<template>
  <div>
    <Layout class-prefix="layout">
        <NumberPad />
        <Types />
        <Notes />
        <Tags :data-source.sync="tags" />
     
    </Layout>
  </div>
</template>

<script >
import NumberPad from '@/components/NumberPad.vue';
import Types from '@/components/Types.vue';
import Notes from '@/components/Notes.vue';
import Tags from '@/components/Tags.vue';
export default {
  name: "Money",
  components:{Tags,Notes, Types, NumberPad},
  data(){
    return {
       tags:['衣','食','住','行']
    }
  } 
  
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";




</style>