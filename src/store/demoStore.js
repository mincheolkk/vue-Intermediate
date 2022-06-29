import {
    createStore
  } from 'vuex'  


  export const store = createStore({
    state() {
      price:100
    },

    getters: {
        originalPice(state) {
            return state.price;
        },
        doublePrice(state) {
            return state.price * 2;
        },
        triplePrice(state) {
            return state.price * 3;
        }
    },
});