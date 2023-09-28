<template>
    <div class="h-full pt-[150px] pb-[100px] skills-page">
        <div class="skills-container">

            <div class="skills-text">
                <Title title="skills"/>
                <br>
                <p>
                    I am a UI/UX designer and a Full-Stack Web Developer, with a focus on custom development using <b>PHP</b> alongside popular frameworks. 
                    <br><br>
                    While my project count is small, the projects I do feature are large in scale, have taken many months to complete, and are truly of my own work. Aside from my own personal endeavors, I freelance personal and professional websites for family, friends, and my community.
                    <br><br>
                    I build all of my websites with <b>Vue</b> and <b>Laravel</b>, additionally using <b>Vue Router</b> and <b>Pinia</b>. I am also able to interpret and convert <b>Vuex</b> stores to <b>Pinia</b> stores.  
                    <br><br>
                    I have extensive knowledge of <b>JavaScript</b>, <b>mySQL</b>, and good ol' fashioned <b>CSS</b>. For quick projects, I will happily use <b>TailwindCSS</b> and <b>Bootstrap</b>.
                    <br><br>
                    Beginning of 2023, I have transitioned from using a <b>Windows</b> platform to a <b>Linux</b> operating system using <b>Visual Studio Code</b> editor for coding. I have become very comfortable with the <b>command line</b>.
                    <br><br>
                    I use <b>Git</b> on mostly large-scale projects, feel free to take a look at my <b>Github</b> page for all of my random projects.
                    <br><br>
                    Design-wise, I have an extensive background in creative design, although not completely digital, I feel that my creative past plays a huge role in how I plan and build my websites. In 2012 I became a creative pet stylist turning poodles into Captain America and Buzz Lightyear. It takes a lot of planning before you can put scissors on a dog and then airbrushing their coats. With a large and loyal clientele, I consulted with hundreds of people on the overall look and maintenance of their dog during my career.
                    <br><br>
                    After my retirement from grooming, I worked in Marketing for two art companies for five years. There I learned how to use <b>Photoshop</b>, and was also taught Graphic Design principles and techniques.
                    <br><br>
                    For my web design process, I comfortably use <b>Figma</b> for wireframing and user flows. I am very comfortable creating mock-up designs with just <b>HTML</b> and <b>CSS</b>.
                    <br><br>
                </p>
                <router-link class="resume-link" to="/resume">View My Resume</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import Title from '../components/core/Title.vue';
import { onMounted } from 'vue';

onMounted(() => {
    window.scrollTo(0, 0);
})
</script>

<style scoped>
    .skills-page {
        background-image: url('/public/skills-background.png');
        background-size: 150vw 100vh;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-color: #FFF;
    }
    .skills-container {
        background-color: rgba(255, 247, 243, 0.8);
        background-size: cover;
        backdrop-filter: blur(10px);
        width: 90vw;
        margin: 0 auto;
        padding: 5px;
        border: 5px solid rgb(203, 173, 1);
        box-shadow: rgb(44, 62, 80) 0px -15px 15px -15px, rgb(44, 62, 80) 0px 15px 15px -15px;
    }
    .skills-text {
        border: 2px solid rgb(229, 195, 0);
        font-size: 16px;
        font-family: Shippori Mincho, sans-serif;
        padding: 20px;
        letter-spacing: 1.1px;
        line-height: 1.2;
        margin: 5px;
    }

    .resume-link {
        font-family: Mate SC, sans-serif;
        border-radius: 5px;
        font-size: 24px;
        display: flex;
        margin: 20px auto 0 auto;
        border-bottom: 1px dotted #000;
        width: 220px;
        justify-content: center;
    }

    .resume-link:hover {
        border-bottom: 1px dotted rgb(203, 173, 1);
        color: rgb(203, 173, 1);
    }

    @media (min-width: 768px)
{
    .skills-container {
        width: 70vw;
    }
}
    @media (min-width: 1024px)
    {
        .skills-page {
        background-size: cover;
        background-position: top center;
    }
    .skills-container {
        width: 800px;
        margin: 0 auto;
        padding: 25px;
        border: 10px solid rgb(203, 173, 1);
    }
    .skills-text {
        border: 5px solid rgb(229, 195, 0);
        font-size: 20px;
        padding: 30px 50px 50px 50px;
    }

    .resume-link {
        font-size: 32px;
        width: 300px;
    }

    .resume-link:hover {
        border-bottom: 1px dotted rgb(203, 173, 1);
        color: rgb(203, 173, 1);
    }
    }
</style>