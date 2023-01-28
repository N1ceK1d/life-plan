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
                <TodosItem v-for="(item, key) in complexTasks"
                    :key="key"
                    :id="key" 
                    :title="item.title" 
                    :description="item.description"
                    :removeItem="removeItem"
                    />
                    <p class="nothing-text" v-if="complexTasks.length == 0">Пусто</p>
            </div>
        </div>
    </div>
</template>

<script>
import TodosItem from './TodosItem.vue';
import './ComplexTodos.css';

export default {
    name: 'ComplexTodos',
    components: { TodosItem },
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
        }, 
        addTask: function() {
            this.complexTasks.push({title: this.taskTitle, description: this.taskText});
            this.taskText = '';
            this.taskTitle = '';
            localStorage.setItem("complexTasks", JSON.stringify(this.complexTasks));
        }
    }
}
</script>