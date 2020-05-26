<template>
     <div class="tags">
        <div class="new">
          <button @click="createTag">新增标签</button>
        </div>
        <ul class="current">
          <li v-for="tag in tagList" :key="tag.id"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{tag.name}}</li>
        </ul>
      </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import { mixins } from 'vue-class-component';
  import TagHelper from '@/mixins/TagHelper'

  @Component({
  })
  export default class Tags extends mixins(TagHelper) {
    get tagList(){
       return this.$store.state.tagList;
    }
    selectedTags: string[] = []
    created(){
      this.$store.commit('fetchTags')
    }
    toggle(tag: string){
      const index = this.selectedTags.indexOf(tag);
      if(index >=0){
        this.selectedTags.splice(index, 1)
      }else{
         this.selectedTags.push(tag)
      } 
      this.$emit('update:value', this.selectedTags)
    }
    create(){
      const name = window.prompt('请输入标签名称')
      if(!name){
        return window.alert('标签名称不能为空！')
      }
        this.$store.commit('createTag',name);
    }
    }
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  > .current {
    display: flex;
    > li {
      $bg:rgb(217, 217, 217);
      background: $bg;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      &.selected{
        color:$bg;
        background: darken($bg, 40%);
      }
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 6px;
    }
  }
}
</style>