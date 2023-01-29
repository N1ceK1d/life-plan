<template>
    <div class="days">
        <DayOfTheWeek title="Понедельник"/>
        <DayOfTheWeek title="Вторник"/>
        <DayOfTheWeek title="Среда"/>
        <DayOfTheWeek title="Четверг"/>
        <DayOfTheWeek  title="Пятница"/>
        <DayOfTheWeek title="Суббота"/>
        <DayOfTheWeek  title="Воскресенье"/>
    </div>
</template>

<script>
import DayOfTheWeek from './DayOfTheWeek.vue';

export default {
    name: 'DaysTable',
    components: { DayOfTheWeek },
}
</script>