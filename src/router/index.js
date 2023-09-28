import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Skills from '../views/Skills.vue';
import Projects from '../views/Projects.vue';
import Contact from '../views/Contact.vue';
import Jobhunt from '../views/projects/Jobhunt.vue';
import Recipebox from '../views/projects/Recipebox.vue';
import Googleclone from '../views/projects/Googleclone.vue';
import Portfolio from '../views/projects/Portfolio.vue';
import Resume from '../views/Resume.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },

    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '/skills',
        name: 'skills',       
        component: Skills,
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects,
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    },
    {
        path: '/jobhunt',
        name: 'jobhunt',
        component: Jobhunt,
    },
    {
        path: '/recipebox',
        name: 'recipebox',
        component: Recipebox,
    },
    {
        path: '/googleclone',
        name: 'googleclone',
        component: Googleclone,
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: Portfolio,
    },
    {
        path: '/resume',
        name: 'resume',
        component: Resume,
    },
];

const router = createRouter({
    history: createWebHistory(), //will display as /.. instead of #.. in domain
    routes
})

export default router;