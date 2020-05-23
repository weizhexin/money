import recordStore from './recordStore';
import tagStore from './tagStore';
const store = {
    //record store
    ...recordStore,
    //tag store
   ...tagStore
    }
    export default store;