<template>
    <div class=" pt-[200px] lg:pt-[250px] pb-[70px] about-background">
        <!-- Background of me working at my desk -->
        <div class="about-container">
            <div class="profile-pic"><img src="/public/portrait.png" alt="portrait image of Patricia Blasco"></div>
         
            <div class="about-text">
                <p class="text-gray-500 text-2xl lg:text-4xl font-bold my-10">Hi, I'm Trish-- full-stack web developer and UI/UX designer, mother of wildlings, quilt-maker, tinkerer, investigator, lover of spiders & cats, and I groom dogs too.</p>
                
                <p>I am an artistic developer with a collaborative spirit, inspired to fill the web with authentic websites. I enjoy scoping the internet for new and innovative ways to take the User Experience to a whole new level. Researching is a big part of my process, utilizing the full power of the web to deliver clean, organized code and a website that not only looks stunning, but is responsive and accessibile to a wide user audience.
                <br><br>
                With my out-of-the-box creative background, I take design and problem-solving to a whole new level. There is no doubt that I enjoy the process from start to finish, even the most tedious of tasks. If there is a goal, I must pursue it. No matter what it takes, no matter how much I stumble, I <i>never</i> give up. With my mighty mouse in hand, I <i>will</i> prevail.
                <br><br>
                I can plan, design, build, launch, and maintain a website on my own, and strive to learn something new with every project I create. I would love to build my own mobile game some day, but for now, websites are what I do best.
                <br><br>
                From ideation to design to implementation, I give my utmost attention to detail. After all, it is the little details that make up the big picture of a website.
                <br><br>
                Outside of web development, I also enjoy the whimsical process of hand quilting. I really cherish the balance that quilting has with my digital life and at the end of the day, I feel that it helps me perform better in my career.
                </p>
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
.about-background {
    background-image: url('/public/aboutv4.png');
    background-size: 100vw;
    background-attachment: fixed;
}
    .about-container {
        position: relative;
        background-color: #e4e4e4ee;
        width: 90vw;
        height: auto;
        margin: 0 auto;
        border-radius: 6px;
        backdrop-filter: blur(5px);
    }

    .profile-pic {
        position: relative;
        width: 200px;
        height: 200px;
        overflow: hidden;
        border-radius: 50%;
        margin: 0 auto;
        top: -100px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 15px 0px;
    }

    img {
        width: 200px;
    }
    
    .about-text {
        margin: 20px;
        font-size: 18px;
        font-family: Shippori Mincho, sans-serif;
        margin-top: -130px;
        padding: 20px;
        letter-spacing: 1.1px;
    }

    @media (min-width: 768px)
{
    .about-container {
        width: 60vw;
    }
}
    @media (min-width: 1024px)
{
    .about-background {
    background-size: contain;
    background-attachment:scroll;
}
    .about-container {
        width: 1000px;
    }

    .profile-pic {
        width: 300px;
        height: 300px;
    }

    img {
        width: 300px;
    }
    
    .about-text {
        font-size: 24px;
        padding: 20px 50px 50px 50px;
    }
}

</style>