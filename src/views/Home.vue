<template>
    <div class="h-screen overflow-hidden hero-container">
            <div class="overlay"></div>
            <video src="/public/purple.mp4" autoplay muted loop id="video"></video>
        <Flipcard />
    </div>

</template>

<script setup>
    import Flipcard from '../components/Flipcard.vue';
</script>

<style scoped>
#video {
    width: 100vw;
    height: 100vh;
}

video {
    object-fit: cover;
}
.overlay {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.8)
}

.card {
    width: 80vw;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* background: rgb(78, 58, 95); */
    background-image: url('public/card.png');
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: rgba(93, 50, 86, 0.462) 0px 50px 100px -20px, rgba(0, 0, 0, 0.451) 0px 30px 60px -30px, rgba(59, 10, 64, 0.445) 0px -2px 6px 0px inset;
    border-radius: 5px;
}
.card-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(78,58,95,0.8);
    border-radius: 5px;
    border: 1px solid rgba(167, 88, 154, 0.475);
}

.left-side-card {
    position: absolute;
    bottom: 0;
    z-index: 4;
    width: 100%;
    height: 200px;
    background-color: rgba(46, 46, 46, 0.8);
    display: flex;
    align-items: center;
}

.left-side-text-container {
    color: #FFF;
    display: flex;
    flex-direction: column;
    margin: 30px;
    line-height: 1.2;
    text-align: center
}

.left-side-text-container p:nth-child(1) {
    font-size: 28px;
    border-bottom: 1px dotted #FFF;
    font-family: Mate SC, sans-serif;
    padding-bottom: 3px;
}

.left-side-text-container p:nth-child(2) {
    font-size: 20px;
    margin-top: 3px;
    font-family: 'Times New Roman', sans-serif;
    font-style: italic;
}
.hero-text {
    position: relative;
    text-align: center;
    top: 20%;
    left: 5%;
    width: 300px;
    color: #FFF;
    line-height: 1;
}

.hero-text h1 {
    font-family: 'Mate SC', sans-serif;
    font-size: 36px;
    letter-spacing: 2px;
    
}

.hero-text h2 {
    margin-top: 10px;
    font-size: 18px;
    margin-left: 10px;
    font-family: Poppins, sans-serif;
}

.icon-container {
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: flex-end;
    margin: 10px 0;
    font-family: poppins;
    letter-spacing: 1.2px;
    font-size: 14px;
}

.icon-container i{
    font-size: 16px;
}

.linkedin-icon {
    font-family: arial;
    border: 1px solid white;
    border-radius: 4px;
    padding: 1px;
}

@media (min-width: 1024px)
{
    
#video {
    width: 100vw;
}

.overlay {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.8)
}

.card {
    width: 900px;
    height: 500px;
    position: absolute;
    /* background: rgb(78, 58, 95); */
    background-image: url('public/card.png');
    background-size: 1000px;
    background-repeat: no-repeat;
    box-shadow: rgba(93, 50, 86, 0.462) 0px 50px 100px -20px, rgba(0, 0, 0, 0.451) 0px 30px 60px -30px, rgba(59, 10, 64, 0.445) 0px -2px 6px 0px inset;
    border-radius: 5px;
}

.card-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(78,58,95,0.8);
    border-radius: 5px;
    border: 1px solid rgba(167, 88, 154, 0.475);
}

.left-side-card {
    position: absolute;
    z-index: 4;
    width: 350px;
    height: 100%;
    background-color: rgba(46, 46, 46, 0.8);
    display: flex;
    align-items: center;
}

.left-side-text-container {
    color: #FFF;
    display: flex;
    flex-direction: column;
    margin: 30px;
    line-height: 1.2;
}

.left-side-text-container p:nth-child(1) {
    font-size: 45px;
    border-bottom: 1px dotted #FFF;
    font-family: Mate SC, sans-serif;
    padding-bottom: 3px;
}

.left-side-text-container p:nth-child(2) {
    font-size: 32px;
    margin-top: 3px;
    font-family: 'Times New Roman', sans-serif;
    font-style: italic;
}

.hero-text {
    position: relative;
    text-align: right;
    top: 20%;
    left: 45%;
    width: 450px;
    color: #FFF;
    line-height: 1;
}

.hero-text h1 {
    font-family: 'Mate SC', sans-serif;
    font-size: 60px;
    letter-spacing: 2px;
    
}

.hero-text h2 {
    margin-top: 10px;
    font-size: 24px;
    margin-left: 10px;
    font-family: Poppins, sans-serif;
}

.icon-container {
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: flex-end;
    margin: 10px 0;
    font-family: poppins;
    letter-spacing: 1.2px;
    font-size: 18px;
}

.icon-container i{
    font-size: 24px;
}

}
</style>