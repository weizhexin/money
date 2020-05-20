<template>
     <div class="tags">
        <div class="new">
          <button @click="create">新增标签</button>
        </div>
        <ul class="current">
          <li v-for="tag in dataSource" :key="tag.id"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{tag.name}}</li>
        </ul>
      </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {
    @Prop() readonly dataSource: string[] | undefined;
    selectedTags: string[] = []
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
      // console.log(name)
      if(name === ''){
        window.alert('标签名称不能为空！')
      }else if(this.dataSource){
          this.$emit('update:dataSource', [...this.dataSource, name]);
        }
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