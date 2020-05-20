<template>
 <div>
        <label class="formItem">
          <span class="name">{{this.fieldName}}</span>
          <input type="text"
          :value="value"
          @input="onValueChanged($event.target.value)"  
           
          :placeholder="this.placeholder" />   
          <!-- :value="value" @input="onInput"  和 v-model 相等 -->
        </label>
      </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';
  
  @Component
  export default class FormItem extends Vue{
    @Prop({default:''}) readonly value!: string;

    @Prop({required:true})  fieldName!: string; 
    @Prop() placeholder?: string;

    @Watch('value')
    onValueChanged(value: string){
      this.$emit('update:value', value)
    }
    // onInput(event: KeyboardEvent){
    //   const input = event.target as HTMLInputElement;
    //   this.value = input.value
    // }
    }
</script>

<style lang="scss" scoped>
    .formItem{
  display: flex;
 
  font-size: 14px;
  padding-left: 16px;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>