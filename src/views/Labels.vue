<template>
  <div>
      <Layout>
         <ol class="tags">
            <li v-for="tag in tags" :key="tag">
                <span>{{tag}}</span> 
                <Icon name="right" /> 
            </li>
         </ol>
         <div class="createTag-wrapper">
             <button class="createTag" @click="createTag">新建标签</button>
         </div>
         </Layout>
  </div>
</template>

<script>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import tagListModel from '../models/tagListModel';
    tagListModel.fetch(); 

    @Component
    export default class Labels extends Vue {
        tags =  tagListModel.data;
        createTag(){
            const name = window.prompt('请输入标签名');
            if(name){
                const message =  tagListModel.create(name);
                if(message == 'duplicated'){
                    window.alert('不能重复名称哦！亲')
                }else if(message == 'success'){
                    window.alert('添加标签成功')
                }
            }
        }  
    }
</script>

<style lang = "scss" scoped>
    .tags{
        background: white;
        font-size: 16px;
        padding:0 16px;
        color: #000;
        > li {
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