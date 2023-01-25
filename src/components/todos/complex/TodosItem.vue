<template >
    <div :key="id" class="complex-item" :class="{'done' : isDone}">
        <p class="complex-item-title">{{ title }}</p>
        <p class="complex-item-description">{{ description }}</p>
        <div class="complex-marker">
            <p class="marker done-marker" v-on:click="setDone">&#10004;</p>
            <p class="marker remove-marker" v-on:click="removeItem(id)"><b>X</b></p>
        </div>
    </div>
</template>

<script>
import './TodosItem.css';

export default {
    name: 'TodosItem',
    props: ['id', 'title', 'description', 'removeItem'],
    data() {
        return {
            isDone: false
        }
    },
    methods: {
        setDone: function() {
            this.isDone = !this.isDone;
        },
    }
}
</script>