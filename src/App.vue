<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList v-bind:propsdata="todoItems"></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>

import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoInput from './components/TodoInput.vue'
import TodoFooter from './components/TodoFooter.vue'



export default {
  // name: "App",
  data: function() {
      return {
          todoItems: []
      }
  },
  created: function() {
        if (localStorage.length > 0) {
            for (var i =0; i<localStorage.length; i++) {
                this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));

            }
        }
  },

  components: {
    //컴포넌트 태그명 : 컴포넌트 내용
    'TodoHeader': TodoHeader,
    'TodoList': TodoList,
    'TodoInput': TodoInput,
    'TodoFooter': TodoFooter,
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
