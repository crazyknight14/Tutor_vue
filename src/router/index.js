import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login.vue';
import Homepage from '../components/Homepage.vue';
import Student from '../components/Student.vue';
import Tutor from '../components/Tutor.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/home',
        name: 'home',
        component: Homepage
    },
    {
        path: '/student',
        name: 'name',
        component: Student
    },
    {
        path: '/tutor',
        name: 'tutor',
        component: Tutor
    },
  ]
})