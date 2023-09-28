<template>
    <div class="footer bg-pink-50 bg-opacity-50">
        <div class="flex items-center justify-center  gap-[10px] lg:gap-[30px]">
            <p class="flex justify-center">Patricia Blasco | Portfolio 2023</p>
            <p>-</p>
            <div class="footer-links">
                <a href="https://linkedin.com/in/p-blasco" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/vilodye1" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href="https://codepen.io/Vilodye/pen/zYaxdNa" target="_blank"><i class="fa-brands fa-codepen"></i></a>
            </div>
        </div>

    </div>
</template>

<script setup>

</script>

<style scoped>
    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        margin: 0 auto;
        font-family: 'Rock Salt', sans-serif;
        font-size: 10px;
        backdrop-filter: blur(10px);
        padding: 0 10px;
    }

    .footer-links {
        margin: 10px;
        display: flex;
        justify-content: center;
        gap: 10px;
    }
    .footer-links i {
        font-size: 20px;
    }

    .footer-links i:hover {
        color: #b111e1;
        transition: 0.2s all;
    }

    @media (min-width: 1024px)
{
    .footer {
        bottom: 0;
        width: 100%;
        margin: 0 auto;
        font-family: 'Rock Salt', sans-serif;
        font-size: 16px;
        z-index: 100;
        backdrop-filter: blur(10px);
    }

    .footer-links {
        margin: 10px;
        display: flex;
        justify-content: center;
        gap: 20px;
    }
    .footer-links i {
        font-size: 30px;
    }

    .footer-links i:hover {
        color: #831fa1;
        transition: 0.2s all;
    }  
}

</style>