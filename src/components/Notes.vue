<template>
 <div>
 
        <label class="notes">
          <span class="name">备注</span>
          <input type="text"  :value="value" @input="onInput"
          placeholder="在这里输入备注" />
        </label>
      </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  
  @Component
  export default class Notes extends Vue{
    value = '';
    onInput(event: KeyboardEvent){
      const input = event.target as HTMLInputElement;
      this.value = input.value
    }
    }
</script>

<style lang="scss" scoped>
    .notes {
  display: flex;
  background: #f5f5f5;
  font-size: 14px;
  padding-left: 16px;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>