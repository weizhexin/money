const localStorageKeyName = 'tagList';
type TagListModel = {
  data: string[];
  fetch: () => string[];
  save: () => void; 
  create: (name: string) => 'success' | 'duplicated'; // success表示成功 duplicated表示name重复
}
const tagListModel: TagListModel = {
  data :[],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
  create(name: string){
    if(this.data.indexOf(name)>=0){return 'duplicated';}
    this.data.push(name);
    this.save();
    return 'success';
  }
};

export default tagListModel; 