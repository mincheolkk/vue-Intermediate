<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
        <!-- <button @click="addTodo">add</button> -->
        <span class="addContainer" @click="addTodo"> 
            <i class="far fa-calendar-plus addBtn"></i>
        </span>

        <Modal :show="showModal" @close="showModal = false">
            <template #header>
                <h3>custom header! !
                    <i class="closeModalBtn fas fa-times" @click="showModal = false"></i> 
                </h3>
            </template>
            <template #body>
                하이
            </template>
        </Modal>
    </div>
</template>
<script>
import Modal from './common/AlertModal.vue'

export default {
    data: function() {
        return {
            newTodoItem: "",
            showModal: false
        }
    },
    methods: {
        addTodo: function() {
            if (this.newTodoItem !== '') {
                this.$emit('addTodoItem', this.newTodoItem);
                this.clearInput();
            } else {
                console.log(this.showModal)
                this.showModal = !this.showModal;
            }
        },
        clearInput: function() {
        // input 박스 초기화 방법
            this.newTodoItem = '';
        }
    },
    components :{
        Modal: Modal
    }

}
</script>
<style scoped>
input:focus {
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    height: 40px;
    width: 80%;
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: white;
    vertical-align: middle;
}
.closeModalBtn {
    color: #42b983;
}
</style>