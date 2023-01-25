<template>
  <div class="life">
    <DaysTable/>
  </div>
</template>

<script>
import DaysTable from '../components/shedule/DaysTable.vue'

export default {
  name: 'LifePlanView',
  components: {
    DaysTable
  }
}
</script>
