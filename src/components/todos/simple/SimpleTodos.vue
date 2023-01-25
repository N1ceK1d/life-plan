<template>
    <div class="simple-block">
        <h1>Simple Todos</h1>
        <div class="todos-block">
            <input type="text" v-model="taskText" placeholder="Введите задачу"/>
            <button v-on:click="addTask">Добавить</button>
            <div class="simple-statistic">
                <p>Всего задач: {{ tasks.length }}</p>
                <p>Выполнено: {{ doneTasks }}</p>
            </div>
            <div class="simple-list">
                <TodosItem v-for="(item, key) in this.tasks" 
                    :key="key" 
                    :id="key" 
                    :title="item.text"
                    :removeItem="removeItem"
                    :isComplete="item.isComplete" />
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
            tasks: [
                {text: 'Выучить 2 песни на гитаре', isComplete: false},
                {text: 'Прочитать 10 книг за два месяца', isComplete: false}, 
                {text: 'Создать сайт', isComplete: false}, 
                {text: 'Купить одежду', isComplete: false}, 
                {text: 'Заняться спортом', isComplete: false}, 
                {text: 'Досмотреть запланированные аниме', isComplete: false}, 
                {text: 'Начать ухаживать за кожей лица', isComplete: false}
            ],
            taskText: '',
            doneTasks: 0
        }
    },
    methods: {
        removeItem: function(index) {
            this.tasks.splice(index, 1);
        },
        addTask: function() {
            this.tasks.unshift({text: this.taskText, isComplete: false});
            this.taskText = '';
        },
    }
}
</script>