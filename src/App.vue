<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList 
      v-bind:propsdata="todoItems"
      v-on:removeItem="removeOneItem" 
      v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>

import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoInput from './components/TodoInput.vue'
import TodoFooter from './components/TodoFooter.vue'



export default {
  data() {
      return {
          todoItems: []
      }
  },

  // created() {
  //       if (localStorage.length > 0) {
  //           for (let i =0; i<localStorage.length; i++) {
  //               if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
  //                   this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  //           }
  //         }
  //       }
  // },

  methods: {
    addOneItem(todoItem) {
      const obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.$store.state.todoItems.push(obj);
      console.log(this.todoItems);
    },

    removeOneItem(todoItem, index){
      this.$store.state.todoItems.splice(index, 1);
      localStorage.removeItem(todoItem.item);
    },

    toggleOneItem(todoItem, index){
      // todoItem.completed = !todoItem.completed;

      this.$store.state.todoItems[index].completed = !this.todoItems[index].completed;

      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
      console.log(index);
    },

    clearAllItems() {
      localStorage.clear();
      this.$store.state.todoItems = [];
    }
  },

  components: {
    //컴포넌트 태그명 : 컴포넌트 내용
    TodoHeader,
    TodoList,
    TodoInput,
    TodoFooter,
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}

</style>
