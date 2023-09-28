<template>
    <div class="projects-container  pt-[80px] lg:pt-[90px]">
        <Title title="Projects" />
        <div class="projects-group">
            <!-- JOBHUNT -->
           <div class="project">
            <div class="bg">
                <img class="project-img" src="/public/jobhunt.png" alt="small screenshot image of jobhunt hero page">
                    <div class="overlay">
                        <div class="text-group">
                            <h2>JobHunt</h2>
                            <p>Laravel-based website for job hunters and seekers.</p>
                            <router-link class="project-link cursor-pointer" :to="{name:'jobhunt'}">Learn More <i class="material-icons">arrow_forward</i></router-link>
                        </div>
                    </div>
                </div>
           </div>
    <!-- RECIPE BOX -->
        <div class="project">
            <div class="bg">
                <img class="project-img" src="/public/recipebox.png" alt="small screenshot image of recipebox hero logo">
                    <div class="overlay" @mouseover="blurImage">
                        <div class="text-group">
                            <h2>RecipeBox</h2>
                            <p>A simple, user-friendly LAMP stack recipe keeping application that even Grandma would know how to use.</p>
                            <router-link class="project-link cursor-pointer" :to="{name:'recipebox'}">Learn More <i class="material-icons">arrow_forward</i></router-link>
                        </div>
                    </div>
                </div>
           </div>
        <!-- YourDesignHubb -->
        <div class="project">
            <div class="bg">
                <img class="project-img" src="/public/hubb.png" alt="small screenshot image of myDesignHubb.com homepage">
                    <div class="overlay">
                        <div class="text-group">
                            <h2>YourDesignHubb</h2>
                            <p>New website design and development using HTML, CSS, and PHP.</p>
                            <a href="https://yourdesignhubb.com/" target="_blank" class="project-link cursor-pointer">Visit site<i class="material-icons">open_in_new</i></a>
                        </div>
                    </div>
                </div>
           </div>
        <!-- Portfolio -->
        <div class="project">
            <div class="bg">
                <img class="project-img" src="/public/portfolio.png" alt="small screenshot image of digital business card on patriciabee.com homepage">
                    <div class="overlay">
                        <div class="text-group">
                            <h2>PatriciaBee</h2>
                            <p>A portfolio website powered by Vue and JavaScript.</p>
                            <router-link class="project-link" :to="{name:'portfolio'}">Learn More <i class="material-icons">arrow_forward</i></router-link>
                        </div>
                    </div>
                </div>
           </div>
        <!-- Google Clone -->
        <div class="project">
            <div class="bg">
                <img class="project-img" src="/public/Google.png" alt="small screenshot image of Google homepage">
                    <div class="overlay">
                        <div class="text-group">
                            <h2>Google Clone</h2>
                            <p>A fun, interactive project created using only the fundamentals.</p>
                            <router-link class="project-link" :to="{name:'googleclone'}">Learn More <i class="material-icons">arrow_forward</i></router-link>
                        </div>
                    </div>
                </div>
           </div>
        <!-- Homeschool Network -->
        <div class="project">
            <div class="bg">
                <img class="project-img" src="/public/Homeschool-network.png" alt="small screenshot image of Homeschool Network userflow on Figma">
                    <div class="overlay">
                        <div class="text-group">
                            <h2 class="text-sm">Homeschool Network</h2>
                            <p>A Vue/Laravel CMS application created for Homeschool co-ops and programs.</p>
                            <p class="project-link">Coming Soon</p>
                        </div>
                    </div>
                </div>
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
.projects-container {
    background-color: #efefef;
    width: 99vw;
    height: auto;
    border-radius: 6px;
    padding-bottom: 60px;
}

.projects-group {
    display: grid;
    grid-template-columns: auto;
    gap: 30px;
    justify-content: center;
    margin-top: 50px;
    padding: 0 20px;
}

img, .overlay {
    transition: .3s all;
    border-radius: 3px;
}

.bg {
    width: 100%;
    position: relative;
    margin: 0 auto;
}
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    opacity: 0;
}

.project-img {
    width: 550px;
    height: 200px;
}

.project:hover .overlay {
    opacity: 1;
}

.project:hover img {
    filter: blur(5px);
}

.text-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    margin: 10% auto;
    padding: 0 20px;
}

.text-group h2 {
    font-family: Mate SC, sans-serif;
    font-size: 36px;
    margin: 0 auto;
    border-bottom: 1px dotted #fff;
}

.text-group p {
    font-family: Poppins, sans-serif;
    font-size: 16px;
}

.project-link {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: auto;
    margin: 0 auto;
    border-radius: 30px;
    color: #FFF;
    font-family: Poppins, sans-serif;
    font-weight: bold;
    font-size: 1.2em;
    border: 1px solid plum;
    padding: 10px 20px;
    background-color: plum;
}

.project-link:hover {
    filter: brightness(110%);
}

.project {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px 0px;
}

@media (min-width: 768px)
{
    .project-img {
        height: 290px;
    }
}

@media (min-width: 1024px)
{
    .projects-container {
    width: 99vw;
    height: 100vh;
}

.projects-group {
    grid-template-columns: auto auto auto;
    gap: 30px;
}

.project-img {
    width: 550px;
    height: 300px;
}

.text-group p {
    font-size: 20px;
}
    }
</style>