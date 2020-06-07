<template>
  <div>
    <Layout class-prefix="layout">
        <NumberPad :value="record.amount" @update:value = "onUpdateAmount" @submit="saveRecordTtem"/>
        <Tabs :data-source='recordTypeList' :value.sync="record.type" />
        <div class="notes">       
          <FormItem field-name="备注" placeholder="请在这里输入备注" 
          :value.sync="record.notes"
         /> 
         <!-- @update:value = "onUpdateNotes" -->
        </div>
        <Tags @update:value="record.tags = $event"/>
    </Layout>
  </div>
</template>

<script lang = ts >
import Vue from 'vue';
import NumberPad from '@/components/NumberPad.vue';
import Types from '@/components/Types.vue';
import FormItem from '@/components/FormItem.vue';
import Tags from '@/components/Tags.vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList'



@Component({
  components:{Tags,FormItem, Types, NumberPad,Tabs},
})
export default class Money extends Vue {
        recordTypeList = recordTypeList
        get recordList(){
          return  this.$store.state.recordList;
        }

        record: RecordItem = {
          tags:[], notes:'', type:'-', amount:0
        }
        create(){
          this.$store.commit('fetchRecords')
        }
        onUpdateNotes(value: string){
          this.record.notes = value
        }
       
        onUpdateAmount(value: string){
          this.record.amount = parseFloat(value) 
        }
        saveRecordTtem(){
          this.$store.commit('createRecord',this.record);
          if(this.$store.state.createRecordError === null){
            window.alert('已保存')
            this.record.notes = ''
          }
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