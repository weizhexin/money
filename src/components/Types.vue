<template>
 <div>
        <ul class="types">
          <li :class="{selected:value === '-', [classPrefix+'-item']:classPrefix}" @click="selectType('-')">支出</li>
          <li :class="{selected:value === '+', [classPrefix+'-item']:classPrefix}" @click="selectType('+')">收入</li>
        </ul>
      </div>
</template>

<script lang="ts">
        import Vue from 'vue';
         import {Component, Prop} from 'vue-property-decorator';
        @Component
        export default class Types extends Vue{
          @Prop(String) readonly value!: string;
          @Prop(String) classPrefix?: string;
          //type = '-'  // '-'表示支出，'+'表示收入
          selectType(type: string){       //type只能是'+'或'-'
            if(type!=='-' && type!=='+'){
              throw new Error('type is unknown')
            }
            this.$emit('update:value',type);
            //this.type = type
          }
          // @Watch('type')
          // onTypeChanged(value: string){
          //   this.$emit('update:value',value);
          // }
        }
   
</script>

<style lang="scss" scoped>
  .types {
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;
      > li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
     align-items: center;
      position: relative;
       &.selected::after {
        content: "";
       position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;
    }
  }
}
</style>