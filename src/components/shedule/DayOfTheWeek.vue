<template>
    <div class="day">
        <h2>{{ title }}</h2>
        <table>
          <thead>
            <td>время</td>
            <td>дело</td>
            <td></td>
            <td></td>
          </thead>
          <tbody>
            <DaysRow v-for="(task, key) in this.tasksList" 
                :key="key" :index="key" :time="task.time" :action="task.action" :removeAction="removeItem"/>
          </tbody>
        </table>
        <button class="add-event" :id="id" v-on:click="add">+</button>
      </div>
</template>

<script>
import DaysRow from './DaysRow.vue';
import './DayOfTheWeek.css';

export default {
    name: 'DayOfTheWeek',
    props: ['title', 'tasks', 'add', 'id'],
    components: { DaysRow },
    data() {
        return {
            tasksList: this.tasks
        }
    },
    methods: {
        removeItem: function(index) {
            this.tasksList.splice(index, 1);
            console.log(index);
        }
    }
}
</script>