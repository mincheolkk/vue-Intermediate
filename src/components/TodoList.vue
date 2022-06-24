<template>
    <div>
        <TransitionGroup tag="ul" name="fade" class="container">
                <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
                    <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
                        v-on:click="toggleComplete(todoItem, index)"></i>                
                    <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
                    <span class="removeBtn" @click="removeTodo(todoItem, index)">
                        <i class="removeBtn fas fa-trash-alt"></i>
                    </span>
                </li> 
        </TransitionGroup>
    </div>
</template>
<script>
export default {
    props: ['propsdata'],
    methods: {
        removeTodo: function(todoItem, index) {
            this.$emit('removeItem',todoItem, index);
        },
        toggleComplete: function(todoItem, index) {
            this.$emit('toggleItem', todoItem, index)
        }
    },

}
</script>
<style sccped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}
.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.checkBtnCompleted {
    color: #b3adad;
}
.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}
.removeBtn {
    margin-left: auto;
    color: #de4343;
}

/* 리스트 아이템 트랜지션 효과 */
.container {
  position: relative;
  padding: 0;
}

.item {
  width: 100%;
  height: 30px;
  background-color: #f3f3f3;
  border: 1px solid #666;
  box-sizing: border-box;
}

/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>