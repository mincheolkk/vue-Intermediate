<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
                <i class="fa-solid fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
                    @click="toggleComplete(todoItem, index)"></i>                
                <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
                <span class="removeBtn" @click="removeTodo(todoItem, index)">
                    <i class="fa-solid fa-trash"></i>
                </span>
            </li> 
        </ul>
    </div>
</template>
<script>
export default {

    data: function() {
        return {
            todoItems: []
        }
    },

    created: function() {
        if (localStorage.length > 0) {
            for (var i =0; i<localStorage.length; i++) {
                this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));

                // this.todoItems.push(localStorage.key(i));
            }
        }
    },
    methods: {
        removeTodo: function(todoItem, index) {
            console.log('removeeeee');
            console.log(todoItem,index);
            this.todoItems.splice(index, 1);
        },
        toggleComplete: function(todoItem, index) {
            console.log(index);
            todoItem.completed = !todoItem.completed;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem))

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
</style>