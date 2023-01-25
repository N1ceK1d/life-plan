<template>
    <div class="complex-block">
        <h1>Complex Todos</h1>
        <div class="todos-block">
            <div class="todos-data">
                <div>
                    <label for="title">Название задачи</label>
                    <input name="title" type="text" v-model="taskTitle" placeholder="Введите задачу"/>
                    <button v-on:click="addTask">Добавить</button>
                    <p class="complex-info">Всего задач: {{ complexTasks.length }}</p>
                </div>
                <div>
                    <label for="description">Описание задачи</label>
                    <textarea name="description" class="task-description" v-model="taskText"></textarea>
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
            complexTasks: [
            ],
            taskTitle: '',
            taskText: ''
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
        }
    }
}
</script>