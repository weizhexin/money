import tagListModel from '@/models/tagListModel'
import recordListModels from '@/models/recordListModels'
const store = {
    //record store
    recordList :recordListModels.fetch(),
    createRecord :(record: RecordItem)=>{
      return recordListModels.create(record);
    },
    
    
    //tag store
    removeTag : (id: string)=>{
        return tagListModel.remove(id);
    },
    updateTag : (id: string, name: string)=>{
      return tagListModel.update(id, name);
    },
    findTag (id: string){
      return this.tagList.filter(t=>t.id === id)[0];
    },
    tagList : tagListModel.fetch(),
    createTag : (name: string)=>{
      const message =  tagListModel.create(name);
      if(message == 'duplicated'){
          window.alert('不能重复名称哦！亲')
      }else if(message == 'success'){
          window.alert('添加标签成功')
      }
    }
    }
    export default store;