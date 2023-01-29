<template>
    <div class="complex-block">
        <h1>Complex Todos</h1>
        <div class="todos-block">
            <div class="todos-data">
                <div>
                    <label for="title">Название задачи</label>
                    <input name="title" type="text" v-model="taskTitle" placeholder="Введите задачу"/>
                    <button :disabled="!taskText.length || !taskTitle.length" v-on:click="addTask">Добавить</button>
                    <p class="complex-info">Всего задач: {{ complexTasks.length }}</p>
                </div>
                <div>
                    <label for="description">Описание задачи</label>
                    <textarea placeholder="Описание задачи" name="description" class="task-description" v-model="taskText"></textarea>
                </div>
            </div>
            <div class="complex-statistic">
            </div>
            <h2>Задачи</h2>
        </div>
        <div class="complex-list-block">
            <div class="complex-list">
                <div v-for="(item, key) in this.complexTasks" :key="key" class="complex-item" :class="{'done' : item.isDone}">
                    <p class="complex-item-title">{{ item.title }}</p>
                    <p class="complex-item-description">{{ item.description }}</p>
                    <div class="complex-marker">
                        <p class="marker done-marker" v-on:click="setDone(item, key)">&#10004;</p>
                        <p class="marker remove-marker" v-on:click="removeItem(key)"><b>X</b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import './TodosItem.css';
import './ComplexTodos.css';

export default {
    name: 'ComplexTodos',
    data() {
        return {
            complexTasks: [],
            taskTitle: '',
            taskText: ''
        }
    },
    created() {
        if(localStorage.getItem('complexTasks')) {
            this.complexTasks = JSON.parse(localStorage.getItem('complexTasks'));
            localStorage.setItem("complexTasks", JSON.stringify(this.complexTasks));
        }
    },
    methods: {
        removeItem: function(index) {
            this.complexTasks.splice(index, 1);
            localStorage.setItem("complexTasks", JSON.stringify(this.complexTasks));
        }, 
        addTask: function() {
            this.complexTasks.push({title: this.taskTitle, description: this.taskText, isDone: false});
            this.taskText = '';
            this.taskTitle = '';
            localStorage.setItem("complexTasks", JSON.stringify(this.complexTasks));
        },
        setDone: function(item, key) {
            item.isDone = !item.isDone;
            if(item.isDone) {
                this.doneTasks += 1;
            } else {
                this.doneTasks -= 1;
            }
            this.complexTasks[key].isDone = item.isDone;
            localStorage.setItem("complexTasks", JSON.stringify(this.complexTasks));
        },
    }
}
</script>