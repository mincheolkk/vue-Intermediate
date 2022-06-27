// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex);

// export const store = new Vuex.Store({
//     state: {
//         headerText: "TOdo it "
//     }
    
// });

import {
    createStore
  } from 'vuex'
  

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i =0; i<localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
              }
            }
        return arr;
        },
    }

export const store = createStore({
    state() {
      return {
          headerText: "tototo it" ,
          todoItems: storage.fetch()
      }
    }
});
  
//   export default store;