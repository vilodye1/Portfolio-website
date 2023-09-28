<template>
    <div class="pt-[80px] lg:pt-[100px] pb-10 project-container">
        <Title title="RecipeBox"/>
        <video src="/public/recipeboxvideo2.mp4" autoplay loop muted alt="video of recipebox website userflow"></video>
        <!-- ABOUT -->
        <h2>GOAL</h2>
        <p>RecipeBox is an ongoing project that has been recreated many times throughout my code journey with a vision to provide users with a way to connect with their loved ones through sharing their most cherished heirloom recipes with whoever they choose. Oftentimes, folks don't want to share their best recipes with the whole world, yet in a world that visits their loved ones online often, I wanted to create a space that was usable for everyone, young and old, even those who are not great with technology. Think Facebook but exclusively for sharing recipes.</p>
        <br>
        <h2>STACK</h2>
        <ul>
            <li>Complete LAMP stack project; Linux, Apache, MySQL, PHP</li>
            <li>CSS for styling</li>
            <li>JavaScript for search bar & light/dark mode</li>
        </ul>

        <br>
        <h2 class="uppercase">Features</h2>
        <ul>
            <li>Login & registration for private recipe keeping.</li>
            <li>Uses password hashing for security</li>
            <li>Users can add, update, and delete recipes</li>
            <li>Recipes can be filtered by name</li>
            <li>Mobile and tablet responsive</li>
            <li>Users can add & edit a Top 6 favorite recipes on their homepage</li>
            <li>UI is easy on the eyes and simple to navigate</li>
            <li>Light/dark mode for 24-hr viewing</li>
        </ul>
        <div class="image-gallery">
            <h2>IMAGE GALLERY</h2>
            <img src="/public/recipe-signup-mobile.png" alt="screenshot image of the mobile signup page for recipebox">
            <img src="/public/ui5.png" width="800px" alt="screenshot image of the recipebox homepage">
            <img src="/public/ui7.png" width="800px" alt="screenshot image of the recipebox Top 6 page">
            <img src="/public/mysql3.png" width="800px" alt="screenshot image of mySQL database showcasing the entire recipebox backend">
        </div>
 

        <br>
        <a class="github-link" href="https://github.com/vilodye1/RecipeBox/tree/main" target="_blank">
          <i class="fa-brands fa-github"></i>
            <p>View repo</p>
        </a>
        <div class="project-links">
            <router-link class="project-link" to="/jobhunt"><i class="material-icons">arrow_back</i>JobHunt</router-link>
            <router-link class="project-link" to="/portfolio">PatriciaBee<i class="material-icons">arrow_forward</i></router-link>
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
.image-gallery img{
    margin: 20px auto;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 0px;
}
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