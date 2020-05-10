<template>
  <div>
    <Layout class-prefix="layout">
        <NumberPad :value="record.amount" @update:value = "onUpdateAmount" @submit="saveRecord"/>
        <Types :value.sync="record.type" />
        <Notes @update:value = "onUpdateNotes"/>
        <Tags :data-source.sync="tags" @update:value = "onUpdateTags" />
      {{record}}
    </Layout>
  </div>
</template>

<script lang = ts >
import Vue from 'vue';
import NumberPad from '@/components/NumberPad.vue';
import Types from '@/components/Types.vue';
import Notes from '@/components/Notes.vue';
import Tags from '@/components/Tags.vue';

import {Component, Watch} from 'vue-property-decorator';

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
}
@Component({
  components:{Tags,Notes, Types, NumberPad}
})
export default class Money extends Vue {
        tags = ['衣','食','住','行'];
        recordList: Record[]=[]
        record: Record = {
          tags:[], notes:'', type:'-', amount:0
        }
        onUpdateTags(value: string[]) {
          this.record.tags = value
        }
        onUpdateNotes(value: string){
          this.record.notes = value
        }
       
        onUpdateAmount(value: string){
          this.record.amount = parseFloat(value) 
        }
        saveRecord(){
          const record2 = JSON.parse( JSON.stringify(this.record))
          this.recordList.push(record2);
          console.log(this.recordList)
        } 
        @Watch('recordList')
        onRecordListChanged(){
          window.localStorage.setItem('recordList', JSON.stringify(this.recordList) )
        }
        
  
}
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