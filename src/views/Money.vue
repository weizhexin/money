<template>
  <div>
    <Layout class-prefix="layout">
        <NumberPad :value="record.amount" @update:value = "onUpdateAmount" @submit="saveRecordTtem"/>
        <Types :value.sync="record.type" />
        <div class="notes">       
          <FormItem field-name="备注" placeholder="请在这里输入备注" @update:value = "onUpdateNotes"/>
        </div>
        <Tags :data-source.sync="tags" @update:value = "onUpdateTags" />
    </Layout>
  </div>
</template>

<script lang = ts >
import Vue from 'vue';
import NumberPad from '@/components/NumberPad.vue';
import Types from '@/components/Types.vue';
import FormItem from '@/components/FormItem.vue';
import Tags from '@/components/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/models/recordListModels';
import tagListModel from '@/models/tagListModel';

const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch();

@Component({
  components:{Tags,FormItem, Types, NumberPad}
})
export default class Money extends Vue {
        tags = tagList;
        recordList: RecordItem[]= JSON.parse( window.localStorage.getItem('recordList') || '[]')
        record: RecordItem = {
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
        saveRecordTtem(){
          const record2: RecordItem = JSON.parse( JSON.stringify(this.record));
          record2.createdAt = new Date();
          this.recordList.push(record2);
        } 
        @Watch('recordList')
        onRecordTtemListChanged(){
          window.localStorage.setItem('recordList', JSON.stringify(this.recordList) )
        }
        
  
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes{
  padding:12px 0;
}
</style>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";




</style>