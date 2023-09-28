<template>
    <div class="min-h-full relative w-full bg-gray-100">
        <Navbar />
        <main>
            <router-view></router-view>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
</script>

<style scoped>
</style>