<template>
    <div class="pt-[100px] pb-10">
        <a href="public/PatriciaBlascoResume2023.pdf" download><i class="material-icons text-5xl cursor-pointer hover:text-green-500">download</i></a>
        <div class="resume-container">
            <div class="header">
                <div class="name">
                    <h2>Patricia Blasco</h2>
                    <p>Full-Stack Developer | UI/UX Designer</p>
                </div>
                <div class="resume-details flex justify-start flex-wrap">
                    <p class="flex justify-center items-center gap-1"><i class="material-icons">place</i>Cocoa, FL</p>
                    <p class="flex justify-center items-center gap-1"><i class="material-icons">email</i>patriciabee.dev@gmail.com</p>
                    <p class="flex justify-center items-center gap-1"><i class="material-icons">web</i>patriciabee.com</p>
                    <p><span class="font-extrabold border px-1 rounded mr-1">in</span>linkedin.com/in/p-blasco</p>
                </div>
            </div>
            <div class="resume-text">
                <div class="career-objective">
                    <h3>Career Objective</h3>
                    <p class="mb-5">	             	
	                    Creative and detail-oriented Web Developer & UI/UX designer with experience in designing and coding user-friendly, mobile-responsive websites & applications of all kinds. Worked through 4 years of purely dedicated learning experience, learning JavaScript, PHP, MySQL, Vue, and Laravel, and creating websites for friends, family, and my community. Ready and eager to pursue new challenges in a company that will allow me to collaborate and grow my skills to deliver visually stunning and accessible websites to the world.
                    </p>
                </div>
                <div class="skills">
                    <h3>Skills</h3>
                    <p class="mb-5">
                        Vue.js | Laravel | PHP | JavaScript | CSS | MySQL | Node.js | Pinia | TailwindCSS | <br>BootStrap | Git  | Figma | Linux | Windows | Apache | Visual Studio Code   
                    </p>
                </div>
                <div class="work-experience">
                    <h3>Work Experience</h3>
                        <div class="work-flex flex justify-between">
                            <p class="work-title font-bold">Web Developer | UI/UX Designer, freelance</p><p class="date text-gray-400">5/2021 - present</p>
                        </div>
                        <div class="mb-2">
                            <li>Design, develop and maintain landing pages and portfolio websites using LAMP stack and other technologies and frameworks.</li>
                            <li>Collaborate with web designers to replicate websites using mock-up designs.</li>
                            <li>Convert website code to be fully responsive across a variety of devices.</li>
                        </div>
                        <hr>
                        <div class="work-flex flex justify-between">
                            <p class="work-title font-bold mt-2">Marketing Assistant, Marmont Hill Inc.</p><p class="date text-gray-400">2/2019 - 2/2021</p>
                        </div>
                        <div class="mb-2">
                            <li>Work from home position directly assisting marketing manager with administrative duties using MS Word and Excel.</li>
                            <li>Uploaded art collections to various back-end interfaces for dozens of companies.</li>
                            <li>Collaborated with art buyers to set up flash sales for retail websites, keeping an organized calendar of events.</li>
                        </div>
                        <hr>
                        <div class="work-flex flex justify-between">
                            <p class="work-title font-bold mt-2">Marketing Coordinator, Oliver Gal Artist Co.</p><p class="date text-gray-400">2/2015 - 2/2017</p>
                        </div>
                        <div class="mb-2">
                            <li>Active collaborator to marketing team, bringing forth new ideas and solutions to various problems, also assisted with creating new themes and collections to offer art buyers.</li>
                            <li>Uploaded art collections to various back-end interfaces for dozens of companies.</li>
                            <li>Monitor sale sites daily for mistakes and report any issues to marketing team.</li>
                            <li>Created new lifestyle images for new products using Photoshop.</li>
                        </div>
                </div>
                <div class="education pb-5">
                    <h3>Education</h3>
                    <p>
                        Udemy, Build Web Apps with React & Firebase<br>
                        Udemy, Zero to Mastery - Complete Web & Mobile Designer: UI/UX, Figma, + more<br>
                        Udemy, Modern JavaScript (Complete guide, from Novice to Ninja)<br>
                        Udemy, Zero to Mastery - JavaScript: The Advanced Concepts<br>
                        FreeCodeCamp – Responsive Web Design Certification
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    window.scrollTo(0, 0);
})
</script>

<style scoped>

a {
   position: absolute;
   left: 50%;
   transform: translate(-50%); 
}
.resume-container {
    width: 90vw;
    margin: 80px auto;
    box-shadow: rgb(44, 62, 80) 0px -15px 15px -15px, rgb(44, 62, 80) 0px 15px 15px -15px;
}
.header {
    background-color: rgb(160, 16, 45);
    padding: 30px 10px;
    color: #FFF;
}

.name {
    text-align: center;
    line-height: 1;
}

.name h2 {
    font-family: Mate SC, sans-serif;
    font-size: 42px;
}

.name p {
    font-family: Poppins, sans-serif;
    font-size: 16px;
    margin-top: 5px;
}

.resume-details {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    font-family: Poppins, sans-serif;
    font-size: 13px;
    padding: 10px;
}

.resume-text {
    background-color: #FFF;
    padding: 20px;
    font-family: Poppins, sans-serif;
    border: 1px solid lightgray;
}

.resume-text h3 {
    font-family: Shippori mincho, sans-serif;
    font-size: 24px;
    text-transform: uppercase;
    font-weight: bold;
    border-bottom: 2px solid rgb(160, 16, 45);
    color: rgb(160, 16, 45);
    margin-bottom: 10px;
}

.resume-text p{
    padding: 0 10px;
}

li {
    margin-left: 20px;
}

@media (min-width: 1024px)
{
    .resume-container {
    width: 800px;
}
.header {
    padding: 60px 0;
}
.name h2 {
    font-size: 64px;
}

.name p {
    font-size: 20px;
}

.resume-details {
    padding: 10px 40px;
}
    }
</style>