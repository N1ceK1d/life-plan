import { createRouter, createWebHashHistory } from 'vue-router'
import LifePlanView from './views/LifePlanView.vue';
import TodosView from './views/TodosView.vue';
import ComplexTodos from './components/todos/complex/ComplexTodos.vue';
import SimpleTodos from './components/todos/simple/SimpleTodos.vue';

const routes = [
  {
    path: '/life',
    name: 'life',
    component: LifePlanView,
    alias: '/'
  },
  {
    path: '/todos',
    name: 'todos',
    component: TodosView,
    children: [
      {
        path: 'complex_todos',
        name: 'complex_todos',
        component: ComplexTodos
      },
      {
        path: 'simple_todos',
        name: 'simple_todos',
        component: SimpleTodos,
        alias: '/todos/'
      }
    ]
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
