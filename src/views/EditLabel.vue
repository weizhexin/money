<template>
  <Layout>
      <div class="navBar">
          <Icon class="leftIcon" @click="goBack" name="left"/>
          <span class="title">编辑标签</span>
          <span class="right"></span>
      </div>
        <div class="form-wrapper">
        <FormItem :value="tag.name"
                   @update:value="update" 
                   field-name="标签名" 
                   placeholder="清输入标签名"/>
        </div>
        <div class="button-wrapper">
        <button @click="remove" class='createTag'>删除标签</button>
        </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
//import tagListModel from '../models/tagListModel';
import FormItem from '@/components/FormItem.vue';

@Component({
    components:{FormItem}
})
export default class EditLabel extends Vue{
    tag?: { id: string; name: string} = undefined;
    created(){
        this.tag =  window.findTag( this.$route.params.id);
        if(!this.tag){
            this.$router.replace('/404');
        }
    }
    update(name: string){
       if(this.tag){
           window.updateTag(this.tag.id, name);
       }
    }
    remove(){
        if(this.tag){
            if(window.removeTag(this.tag.id)){
                this.$router.back();
            }
        }
        
    }
    goBack(){
        this.$router.back();
    }
}
</script>

<style lang="scss" scoped>
    .navBar{
        text-align: center;
        font-size: 16px;
        padding: 12px 16px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        >.title{
            border: 1px solid red;
        }
        >.leftIcon{
           border:1px solid black;
           width:24px;
           height:24px;
        }
        >.right{
             border:1px solid red;
           width:24px;
           height:24px;
        }
    }
    .form-wrapper{
        background: white;
        margin-top:8px ;
        
        
    }
    .createTag{
        background: #767676;
        color:white;
        border-radius:4px;
        border:none;
        height: 40px;
        padding: 0 16px;
    }
    .button-wrapper{
        text-align: center;
        margin-top:44-16px;
        padding:16px 0;
    }
</style>