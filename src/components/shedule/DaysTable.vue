<template>
    <div class="days">
        <DayOfTheWeek :id="'monday'" :add="addRow" title="Понедельник" :tasks="tasksList.monday"/>
        <DayOfTheWeek :id="'tuesday'" :add="addRow" title="Вторник" :tasks="tasksList.tuesday"/>
        <DayOfTheWeek :id="'wednesday'" :add="addRow" title="Среда" :tasks="tasksList.wednesday"/>
        <DayOfTheWeek :id="'thursday'" :add="addRow" title="Четверг" :tasks="tasksList.thursday"/>
        <DayOfTheWeek :id="'friday'" :add="addRow" title="Пятница" :tasks="tasksList.friday"/>
        <DayOfTheWeek :id="'saturday'" :add="addRow" title="Суббота" :tasks="tasksList.saturday"/>
        <DayOfTheWeek :id="'sunday'" :add="addRow" title="Воскресенье" :tasks="tasksList.sunday"/>
    </div>
</template>

<script>
import DayOfTheWeek from './DayOfTheWeek.vue';

export default {
    name: 'DaysTable',
    components: { DayOfTheWeek },
    data() {
        return {
            isChecked: false,
            tasksList: {
                monday: [
                    {id: 0,time: '', action: ''},
                ],
                tuesday: [
                    {id: 0,time: '', action: ''},
                ],
                wednesday: [
                    {id: 0,time: '', action: ''},
                ],
                thursday: [
                    {id: 0,time: '', action: ''},
                ],
                friday: [
                    {id: 0,time: '', action: ''},
                ],
                saturday: [
                    {id: 0,time: '', action: ''},
                ],
                sunday: [
                    {id: 0,time: '', action: ''},
                ]
            }
        }
    },
    methods: {
        addRow: function (event) {
            let day = event.target.id;
            this.tasksList[day].unshift({time: '', action: ''});
        }
    }
}
</script>