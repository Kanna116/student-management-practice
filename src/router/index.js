import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import StudentView from '../views/student/indexPage.vue';
import AddStudent from '../views/student/addStudent.vue';
import EditStudent from '../views/student/editStudent.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/student',
      name: 'student',
      component: StudentView
    }, {
      path: '/student/add',
      name: "newStudent",
      component: AddStudent
    }, {
      path: '/student/edit/:id',
      name: "editStudent",
      component: EditStudent
    }
  ]
})

export default router
