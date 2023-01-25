<template>
    <div :key="id" class="simple-item" :class="{'done' : isDone}">
        <p class="item-title">{{ title }}</p>
        <div class="marker-block">
            <p class="marker done-marker" v-on:click="setDone">&#10004;</p>
            <p class="marker remove-marker" v-on:click="removeItem(id)"><b>X</b></p>
        </div>
    </div>
</template>

<script>
import './TodosItem.css';

export default {
    name: 'TodosItem',
    props: ['id', 'title', 'removeItem', 'isComplete'],
    data() {
        return {
            isDone: this.isComplete
        }
    },
    methods: {
        setDone: function() {
            this.isDone = !this.isDone;
        },
    }
}
</script>
