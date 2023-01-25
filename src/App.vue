<template>
  <header>
    <router-link to="/life" active-class="active"><h1>LIFE PLAN</h1></router-link>
    <router-link to="/todos" active-class="active"><h1>TODOS</h1></router-link>
  </header>
  <section>
    <router-view></router-view>
  </section>
</template>

<script>
import './App.css'; 

export default {
    name: "App"
}
</script>

