<template>
  <div>
      <Layout>
         <div class="tags">
            <router-link    class="tag" 
                            v-for="tag in tags" 
                            :key="tag.id"
                            :to="`/Labels/edit/${tag.id}`">
                <span>{{tag.name}}</span> 
                <Icon name="right" /> 
            </router-link>
         </div>
         <div class="createTag-wrapper">
             <!-- <difButton class='createTag' @click="createTag">新建标签</difButton>            -->
             <button  class='createTag' @click="createTag">新建标签</button>
         </div>
         </Layout>
  </div>
</template>

<script>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import { mixins } from 'vue-class-component';
    import TagHelper from '@/mixins/TagHelper'
    
    @Component({
        computed:{
            tags(){
                return this.$store.state.tagList;
            }
        }
    })
export default class Labels extends mixins(TagHelper) {
    beforeCreate(){
           this.$store.commit('fetchTags');
       }
}  
    
</script>

<style lang = "scss" scoped>
    .tags{
        background: white;
        font-size: 16px;
        padding:0 16px;
        color: #000;
        > .tag {
            min-height: 44px;
            display: flex;
            justify-content:space-between;
            align-items:center;
            border-bottom:1px solid #e6e6e6;
        }
        svg{
            height:18px;
            width:18px;
        }
    }
    .createTag{
        background: #767676;
        color:white;
        border-radius:4px;
        border:none;
        height: 40px;
        padding: 0 16px;
        &-wrapper{
            text-align: center;
            padding: 16px;
            margin-top: 44-16px;
        }
    }
</style>