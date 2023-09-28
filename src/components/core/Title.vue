<template>
    <div>
        <h2>{{ title }}</h2>

    </div>
</template>

<script setup>
import {defineProps} from 'vue';

const {title} = defineProps({
    title: String
});
</script>

<style scoped>
h2 {
    font-family: Mate SC, sans-serif;
    font-size: 45px;
    text-align: center;
    border-bottom: 1px dotted #000;
    width: 250px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
}


@media (min-width: 1024px)
    {
        h2 {
            font-size: 54px;
            width: 500px;
        }   
    }

</style>