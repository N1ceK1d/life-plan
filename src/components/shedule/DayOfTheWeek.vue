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
            <tr :key="key" class="row-item" v-for="(item, key) in tasksList">
                <td><input class="time" type="text" v-model="item.time" :readonly="!item.isChecked"></td>
                <td><input class="move" type="text" v-model="item.action" :readonly="!item.isChecked" ></td>
                <td>
                    <label :class="{ 'stopchange' : item.isChecked }">
                        &#9998;
                        <input v-model="item.isChecked" type="checkbox" v-on:click="save(item, key)"/>
                        <span></span>
                    </label>
                </td>
                <td class="delete" v-on:click="removeItem(key)" >
                    <b :class="{'disabledRemove' : this.tasksList.length == 1}">X</b>
                </td>
            </tr>
          </tbody>
        </table>
        <button 
            class="add-event" v-on:click="addRow"
            :disabled="isDisabled">
            +
        </button>
      </div>
</template>

<script>
import './DaysRow.css';
import './DayOfTheWeek.css';

export default {
    name: 'DayOfTheWeek',
    props: ['title'],
    data() {
        return {
            tasksList: [{time: '', action: '', isChecked: false}]
        }
    },
    computed: {
      isDisabled: function() {
        if(this.tasksList[this.tasksList.length - 1].time != '' && this.tasksList[this.tasksList.length - 1].action != '') {
            return false;
        } else {
            return true;
        }
      },
    },
    created() {
        if(localStorage.getItem(`${this.title}`)) {
            this.tasksList = JSON.parse(localStorage.getItem(`${this.title}`));
            localStorage.setItem(`${this.title}`, JSON.stringify(this.tasksList));
        }
    },
    methods: {
        removeItem: function(index) {
            if(this.tasksList.length > 1) {
                this.tasksList.splice(index, 1);
                localStorage.setItem(`${this.title}`, JSON.stringify(this.tasksList));
            }
        },
        addRow: function () {
            this.tasksList.push({time: '', action: '', isChecked: false});
            localStorage.setItem(`${this.title}`, JSON.stringify(this.tasksList));
        },
        save: function(item, event) {
            if(item.isChecked == true) {
                this.tasksList[event] = {time: item.time, action: item.action, isChecked: false};
                localStorage.setItem(`${this.title}`, JSON.stringify(this.tasksList));
            }
        }
    }
}
</script>