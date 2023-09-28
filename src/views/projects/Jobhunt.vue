<template>
    <div class="pt-[80px] lg:pt-[100px] pb-10 project-container">
        <Title title="JobHunt"/>
        <video src="/public/jobhunt2.mp4" alt="video of jobhunt website user flow" autoplay loop muted></video>
        <!-- ABOUT -->
        <h2>GOAL</h2>
        <p>JobHunt is a fictional job hunting website for employers and employment-seeking individuals. I created this website to familiarize myself with the Laravel framework to incorporate in future applications.</p>
        <br>
        <h2>STACK</h2>
        <ul>
            <li>Laravel is the star of this project implementing migrations, models, controllers, and routes.</li>
            <li>Laravel Blade templates were used for User Interface and forms</li>
            <li>Laravel Breeze for authentication</li>
            <li>MySQL to store form data</li>
            <li>TailwindCSS for styling</li>
        </ul>

        <br>
        <h2 class="uppercase">Features</h2>
        <ul>
            <li>Login & registration for employers to create, edit, and delete job listings.</li>
            <li>Job listings can be filtered by text or tags from the search bar or tag library</li>
            <li>Mobile and tablet responsive</li>
        </ul>

        <br>
        <a class="github-link" href="https://github.com/vilodye1/JobHunt" target="_blank">
          <i class="fa-brands fa-github"></i><p>View repo</p>
        </a>

        <div class="project-links">
            <router-link class="project-link" to="/google-clone"><i class="material-icons">arrow_back</i>Google Clone</router-link>
            <router-link class="project-link" to="/recipebox">Recipebox<i class="material-icons">arrow_forward</i></router-link>
        </div>
    </div>
</template>

<script setup>
import Title from '../../components/core/Title.vue';
import { onMounted } from 'vue';

onMounted(() => {
    window.scrollTo(0, 0);
})
</script>

<style scoped>

.project-container {
    width: 90vw;
    margin: 0 auto;
}

.project-container h2 {
    font-family: shippori mincho, sans-serif;
    font-size: 28px;
    text-align: center;
}

.project-container p, ul {
    font-family: Poppins, sans-serif;
    font-size: 16px;
    text-align: left;
    padding: 20px;
    width: 100%;
    margin: 0 auto;
}

.project-container li {
    list-style-type:disc;
}

.project-links {
    display: flex;
    justify-content: space-between;
    margin: 50px 0 20px 0;
    padding: 10px 20px;
    background-color: #FFF;
}

.project-link {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.project-link:hover {
    color: blue;
}

video {
    margin: 20px auto;
    width: 800px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px 0px;
}

.github-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 120px;
    line-height: 1;
    margin: 0 auto;
}
.github-link i {
    font-size: 36px;
    margin-bottom: -10px;
}
.github-link p {
    text-align: center;
}

.github-link:hover {
    color: blue;
}

@media (min-width: 1024px)
    {
.project-container {
    width: 50vw;
}

.project-container h2 {
    font-size: 32px;
}

.project-container p, ul {
    font-size: 24px;
    text-align: justify;
    width: 80%;
}

.project-container a {
    font-size: 24px;
}

.github-link {
        width: 200px;
    }

    .project-links {
    margin: 50px 0 50px 0;
    padding: 10px 20px;
}
    }

</style>