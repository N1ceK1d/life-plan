<template>
    <div class="simple-block">
        <h1>Simple Todos</h1>
        <div class="todos-block">
            <input type="text" v-model="taskText" placeholder="Введите задачу"/>
            <button :disabled="taskText.length == 0" v-on:click="addTask">Добавить</button>
            <div class="simple-statistic">
                <p>Всего задач: {{ tasks.length }}</p>
                <p>Выполнено: {{ doneTasks }}</p>
            </div>
            <div class="simple-list">
                <div :key="key" class="simple-item" :class="{'done' : item.isDone}" v-for="(item, key) in this.tasks" >
                    <p class="item-title">{{ item.text }}</p>
                    <div class="marker-block">
                        <p class="marker done-marker" v-on:click="setDone(item, key)">&#10004;</p>
                        <p class="marker remove-marker" v-on:click="removeItem(item, key)"><b>X</b></p>
                    </div>
                </div>
                <p class="nothing-text" v-if="tasks.length == 0">Пусто</p>
            </div>
        </div>
    </div>
</template>

<script>
import './TodosItem.css';
import './SimpleTodos.css'

export default {
    name: 'SimpleTodos',
    data() {
        return {
            tasks: [],
            taskText: '',
            doneTasks: 0
        }
    },
    created() {
        if(localStorage.getItem('tasks')) {
            this.tasks = JSON.parse(localStorage.getItem('tasks'));
            this.tasks.map((item) => {
                if(item.isDone) {
                    this.doneTasks += 1;
                }
            })
        }
    },
    methods: {
        removeItem: function(item, index) {
            this.tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(this.tasks));
            if(item.isDone) {
                this.doneTasks -= 1;
            }
        },
        addTask: function() {
            this.tasks.unshift({text: this.taskText, isDone: false});
            this.taskText = '';
            localStorage.setItem("tasks", JSON.stringify(this.tasks));
        },
        setDone: function(item, key) {
            item.isDone = !item.isDone;
            if(item.isDone) {
                this.doneTasks += 1;
            } else {
                this.doneTasks -= 1;
            }
            this.tasks[key].isDone = item.isDone;
            localStorage.setItem("tasks", JSON.stringify(this.tasks));
        },
    }
}
</script>