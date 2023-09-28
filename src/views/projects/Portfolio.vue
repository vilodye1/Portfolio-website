<template>
    <div class="pt-[80px] lg:pt-[100px] pb-10 project-container">
        <Title title="PatriciaBee.com"/>
        <img src="/public/portfolio.png" alt="screenshot image of patriciabee.com homepage digital business card">
        <!-- ABOUT -->
        <h2>GOAL</h2>
        <p>To provide users with a fun, quirky, and interactive experience showcasing what I have to offer. Each page unique in its own way purposely to showcase various styles of my design work. Although a professional website, this was a project in it's own right.</p>
        <br>
        <h2>STACK</h2>
        <ul>
            <li>Vue.js is the star of this project</li>
            <li>Vue Router for website routing</li>
            <li>JavaScript for small dynamics</li>
            <li>Vanilla-tilt for business card tilt effect</li>
            <li>EmailJS API for easy contact form sending</li>
            <li>CSS for 99% of styling</li>
            <li>TailwindCSS for minor styling</li>
        </ul>

        <br>
        <h2 class="uppercase">Features</h2>
        <ul>
            <li>Easy navigation</li>
            <li>Large text size for easy reading</li>
            <li>Mobile and tablet responsive</li>
        </ul>

        <br>
        <a class="github-link" href="https://github.com/vilodye1" target="_blank">
          <i class="fa-brands fa-github"></i>
            <p>View repo</p>
        </a>
        <div class="project-links">
            <router-link class="project-link" to="/recipebox"><i class="material-icons">arrow_back</i>Recipebox</router-link>
            <router-link class="project-link" to="/googleclone">Google Clone<i class="material-icons">arrow_forward</i></router-link>
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

img {
    margin: 20px auto;
    width: 800px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px 0px;
}

.github-link {
    display: flex;
    flex-direction: column;
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