type RootState = {
  recordList: RecordItem[];
  createRecordError: Error | null;
  tagList: Tag[];
  currentTag?: Tag;
}
type RecordItem = {
    tags: Tag[];
    notes: string;
    type: string;
    amount: number; // 数据类型 object | string
    createdAt?: string;  // 类 / 构造函数
  }
  type Tag = {
    id: string;
    name: string;
  }
  type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    save: () => void; 
    update: (id: string , name: string) => 'success' | 'NotFound' | 'duplicated';
    remove: (id: string) => boolean;
    create: (name: string) => 'success' | 'duplicated'; // success表示成功 duplicated表示name重复
  }

  // interface Window{
  //   store:{
  //     tagList: Tag[];
  //   createTag: (name: string) => void;
  //   removeTag: (id: string) => boolean;
  //   updateTag: (id: string,name: string) => 'success' | 'NotFound' | 'duplicated';
  //   findTag: (id: string) => Tag | undefined;
  //   recordList: RecordItem[];
  //   createRecord: (record: RecordItem) => void;
  //   }
    
  // }
  