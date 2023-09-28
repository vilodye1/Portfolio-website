<template>
    <div class="nav">
        <div class="nav-link-group bg-pink-50 bg-opacity-50">
            <router-link class="hover:border-b border-black px-1 cursor-pointer transition-all" to="/">Home</router-link>
            <router-link class="hover:border-b border-black px-1 cursor-pointer transition-all" to="/about">About</router-link>
            <router-link class="hover:border-b border-black px-1 cursor-pointer transition-all" to="/skills">Skills</router-link>
            <router-link class="hover:border-b border-black px-1 cursor-pointer transition-all" to="/projects">Projects</router-link>
            <router-link class="hover:border-b border-black px-1 cursor-pointer transition-all" to="/contact">Contact</router-link>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

    .nav-link-group {
        position: fixed;
        font-family: 'Libre Baskerville';
        font-size: 14px;
        width: 100vw;
        display: flex;
        justify-content: center;
        gap: 15px;
        padding-top: 20px;
        padding-bottom: 20px;
        z-index: 100;
        backdrop-filter: blur(10px);
    }

    @media (min-width: 768px)
{
    .nav-link-group {
        font-size: 24px;
        gap: 30px;
    }
}

    @media (min-width: 1024px)
{
    .nav-link-group {
        font-size: 24px;
        right: 0;
        justify-content: flex-end;
        gap: 40px;
        padding-right: 100px;
    }  
}
</style>