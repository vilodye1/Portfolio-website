<template>
        <div class="flip-card cursor-pointer" @click="flipCard">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div class="card" v-tilt="{glare: true, 'max-glare':0.3, speed:200, perspective: 3000, scale: 1.2, transition: true}">
                        <div class="card-overlay"></div>
                        <div class="left-side-card">
                            <div class="left-side-text-container">
                                <p>Authentic Websites For Creative People</p>
                                <p>When Cookie Cutter Templates <br><span class="text-red-300">Just Don't Cut It</span></p>
                            </div>
                        </div>
                        <div class="hero-text">
                            <h1 class="border-b border-white border-dotted">Patricia Blasco</h1>
                            <h2>Web Developer | UI/UX Designer</h2>
                            <div class="card-icons flex flex-col items-center lg:items-start lg:ml-[150px] my-5 lg:my-10">
                                <div class="icon-container">
                                    <i class="material-icons">email</i>
                                    <p>Patriciabee.dev@gmail.com</p>
                                </div>
                                <!-- Add QR code for freelance commissions page -->
                                <div class="icon-container">
                                    <p class="linkedin-icon font-extrabold">in</p>
                                    <p>linkedin.com/in/p-blasco</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flip-card-back">
                    <div class="card" v-tilt="{glare: true, 'max-glare':0.3, speed:200, perspective: 3000, scale: 1.2}">
                        <div class="card-overlay"></div>
                        <div class="card-back-icons-container">
                            <div class="card-back-icon">
                                <i class="material-icons">design_services</i>
                                <p>UI/UX<br> Design</p>
                            </div>
                            <div class="card-back-icon">
                                <i class="material-icons">code</i>
                                <p>Full-Stack<br>Web Dev</p>
                            </div>
                            <div class="card-back-icon">
                                <i class="material-icons">rocket_launch</i>
                                <p>Web<br>Launch</p>
                            </div>
                        </div>
                        <p class="website-name">www.patriciabee.com</p>
                    </div>
                            <!-- Design / Code / Launch , icons reflecting all with arrows pointing to each other -->
                </div>
            </div>
    </div>
            <!-- MOBILE CARD -->
            <div class="flip-card-mobile" @click="flipCard">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div class="mobile-card">
                        <div class="card-overlay"></div>
                        <div class="left-side-card">
                            <div class="left-side-text-container">
                                <p>Authentic Websites For Creative People</p>
                                <p>When Cookie Cutter Templates <br><span class="text-red-300">Just Don't Cut It</span></p>
                            </div>
                        </div>
                        <div class="hero-text">
                            <h1 class="border-b border-white border-dotted">Patricia Blasco</h1>
                            <h2>Web Developer | UI Designer</h2>
                            <div class="card-icons-mobile flex flex-col items-start lg:items-start lg:ml-[150px] my-5 lg:my-10">
                                <div class="icon-container">
                                    <i class="material-icons">email</i>
                                    <p>Patriciabee.dev@gmail.com</p>
                                </div>
                                <div class="icon-container">
                                    <p class="linkedin-icon font-extrabold">in</p>
                                    <p>linkedin.com/in/p-blasco</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="absolute text-xs bottom-16 right-0 text-gray-500 mx-2">*View in desktop for special effects.</p>
                </div>
                <p>**View in desktop for special effects</p>
                <div class="flip-card-back hidden">
                    <div class="mobile-card">
                        <div class="card-overlay"></div>
                        <div>
                            <div>
                                <i class="material-icons">design_services</i>
                                <p>UI/UX Design</p>
                            </div>
                            <div>
                                <i class="material-icons">code</i>
                                <p>Full-Stack Development</p>
                            </div>
                            <div>
                                <i class="material-icons">rocket_launch</i>
                                <p>Web Launch Assistance</p>
                            </div>
                        </div>
                    </div>
                            <!-- Design / Code / Launch , icons reflecting all with arrows pointing to each other -->
                </div>
            </div>
        </div>
</template>

<script setup>
    const flipCard = () => {
        const innerCard = document.querySelector('.flip-card-inner');
        innerCard.classList.toggle('flip-card-effect');
    }


</script>

<style scoped>

.card-icons-mobile p {
    font-size: 14px;
}
.flip-card {
    display: none;
}
.flip-card-mobile {
    display: block;
}

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
.mobile-card {
    width: 80vw;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url('/public/card.png');
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
    height: 250px;
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
    top: 10%;
    left: 5%;
    width: 70vw;
    color: #FFF;
    line-height: 1;
}

.hero-text h1 {
    font-family: 'Mate SC', sans-serif;
    font-size: 30px;
    letter-spacing: 2px;
    
}

.hero-text h2 {
    margin-top: 3px;
    font-size: 16px;
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
    font-size: 16px;
}

.icon-container i{
    font-size: 16px;
}

.linkedin-icon {
    font-family: arial;
    font-size: 12px;
    border: 1px solid white;
    border-radius: 4px;
    padding: 1px;
}

.flip-card-effect {
    /* apply to flip-card-inner */
  transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  width: 80%;
  height: 80%;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
}

@media (min-width: 768px)
{
    .flip-card-mobile {
    display: none;
    }
    .flip-card {
    display: block;
    }

.flip-card {
    position: absolute;
    top: 30%;
    left: 4%;
    transform: translate(-50%);
}
.card {
    width: 700px;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* background: rgb(78, 58, 95); */
    background-image: url('/public/card.png');
    background-size: 1000px;
    background-repeat: no-repeat;
    box-shadow: rgba(93, 50, 86, 0.462) 0px 50px 100px -20px, rgba(0, 0, 0, 0.451) 0px 30px 60px -30px, rgba(59, 10, 64, 0.445) 0px -2px 6px 0px inset;
    border-radius: 5px;
    transform-style: preserve-3d;
}

.left-side-card {
    width: 300px;
    height: 100%;
}

.left-side-text-container {
    text-align: left;
}

.left-side-text-container p:nth-child(1) {
    font-size: 36px;
}

.left-side-text-container p:nth-child(2) {
    font-size: 30px;
}

.hero-text {
    text-align: right;
    top: 13%;
    left: 46%;
    width: 350px;
    transform: translateZ(70px);
}

.hero-text h1 {
    font-size: 40px;    
}

.hero-text h2 {
    margin-top: 10px;
    font-size: 18px;
}

.icon-container {
    font-size: 18px;
}

.icon-container i{
    font-size: 24px;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
}
.card-back-icons-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 5;
    transform: translateZ(70px);
    -moz-transform: translateZ(70px);
}

.card-back-icon {
    color: #FFF;
    font-size: 32px;
    font-family: Poppins, sans-serif;
    transition:all;
}

.card-back-icon i {
    font-size: 60px;
    border: 3px solid #FFF;
    border-radius: 50%;
    padding: 15px;
    margin-bottom: 10px;
    transform: translateZ(50px);
}

.website-name {
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: 20px auto;
    font-size: 24px;
    color: #d9a0eb;
}
}
@media (min-width: 1024px)
{

.flip-card-mobile {
    display: none;
}
.flip-card {
    display: block;
}
.flip-card {
    position: absolute;
    top: 25%;
    left: 25%;
    transform: translate(-50%, -50%);
}
.card {
    width: 900px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* background: rgb(78, 58, 95); */
    background-image: url('/public/card.png');
    background-size: 1000px;
    background-repeat: no-repeat;
    box-shadow: rgba(93, 50, 86, 0.462) 0px 50px 100px -20px, rgba(0, 0, 0, 0.451) 0px 30px 60px -30px, rgba(59, 10, 64, 0.445) 0px -2px 6px 0px inset;
    border-radius: 5px;
    transform-style: preserve-3d;
}
.left-side-card {
    width: 350px;
    height: 100%;
}

.left-side-text-container {
    text-align: left;
}

.left-side-text-container p:nth-child(1) {
    font-size: 45px;
}

.left-side-text-container p:nth-child(2) {
    font-size: 32px;
}

.hero-text {
    text-align: right;
    top: 20%;
    left: 45%;
    width: 450px;
    transform: translateZ(70px);
}

.hero-text h1 {
    font-size: 60px;
}

.hero-text h2 {
    margin-top: 10px;
    font-size: 24px;
}

.icon-container {
    font-size: 18px;
}

.icon-container i{
    font-size: 24px;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
}

.card-back-icons-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 5;
    transform: translateZ(70px);
    -moz-transform: translateZ(70px);
}

.card-back-icon {
    color: #FFF;
    font-size: 32px;
    font-family: Poppins, sans-serif;
    transition:all;
}

.card-back-icon i {
    font-size: 60px;
    border: 3px solid #FFF;
    border-radius: 50%;
    padding: 15px;
    margin-bottom: 10px;
    transform: translateZ(50px);
}

.website-name {
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: 20px auto;
    font-size: 24px;
    color: #d9a0eb;
}
}
</style>