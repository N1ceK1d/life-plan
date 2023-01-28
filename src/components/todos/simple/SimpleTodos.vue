<template>
    <div class="simple-block">
        <h1>Simple Todos</h1>
        <div class="todos-block">
            <input type="text" v-model="taskText" placeholder="Введите задачу"/>
            <button :disabled="taskText.length == 0" v-on:click="addTask">Добавить</button>
            <div class="simple-statistic">
                <p>Всего задач: {{ tasks.length }}</p>
                <p>Выполнено: {{ doneTasks.length }}</p>
            </div>
            <div class="simple-list">
                <TodosItem v-for="(item, key) in this.tasks" 
                    :key="key" 
                    :id="key" 
                    :title="item.text"
                    :removeItem="removeItem"
                    :isComplete="item.isComplete" />
                <p class="nothing-text" v-if="tasks.length == 0">Пусто</p>
            </div>
        </div>
    </div>
</template>

<script>
import TodosItem from './TodosItem.vue';
import './SimpleTodos.css'

export default {
    name: 'SimpleTodos',
    components: {TodosItem},
    data() {
        return {
            tasks: [],
            taskText: '',
            doneTasks: []
        }
    },
    created() {
        if(localStorage.getItem('tasks')) {
            this.tasks = JSON.parse(localStorage.getItem('tasks'));
        }
    },
    methods: {
        removeItem: function(index) {
            this.tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(this.tasks));
        },
        addTask: function() {
            this.tasks.unshift({text: this.taskText, isComplete: false});
            this.taskText = '';
            localStorage.setItem("tasks", JSON.stringify(this.tasks));
        },
    }
}
</script>