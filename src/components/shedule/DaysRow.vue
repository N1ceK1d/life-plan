<template>
    <tr class="row-item">
        <td class="line"><input class="time" type="text" :v-model="lineTime" :readonly="!isChecked"></td>
        <td class="line"><input class="move" type="text" :v-model="lineAction" :readonly="!isChecked" ></td>
        <td>
            <label :class="{ 'stopchange' : isChecked }">
                &#9998;
                <input v-model="isChecked" type="checkbox"/>
                <span></span>
            </label>
        </td>
        <td class="delete" :id="index" v-on:click="removeAction(index)"><b>X</b></td>
    </tr>
</template>

<script>
import './DaysRow.css';

export default {
    name: 'DaysRow',
    props: ['time', 'action', 'index', 'removeAction'],
    data() {
        return {
            isChecked: false,
            lineAction: this.action,
            lineTime: this.time
        }
    },
}
</script>