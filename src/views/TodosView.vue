<template>
  <div class="todos">
    <header>
      <router-link to="/todos/simple_todos" active-class="active"><h1>simple todos</h1></router-link>
      <router-link to="/todos/complex_todos" active-class="active"><h1>complex todos</h1></router-link>
    </header>
    <div class="todos-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TodosView'
}
</script>

<style>
.todos header {
  width: 81vw;
}

.todos header a {
  font-size: 1.27vw;
}

@media all and (min-width: 200px) and (max-width: 900px) {
  .todos header {
  width: 81vw;
}

.todos header a {
  font-size: 6vw;
}
}
</style>

