<template>
    <div>
        <div class="google-desktop">
    <!-- Top navigation -->
    <nav id="topNav">
       <div class="left-nav">
            <a href="#" class="about-link" @mouseenter="displayAbout" @mouseleave="hideAbout">About This Project</a>
            <p id="google-about">Google Clone is an interactive replica of the Google homepage for Desktop. It is a project created mostly for fun, but also demonstrates accurate element positioning and functionality with an attention to the little details that make the Google homepage. Google Clone was created using HTML, CSS, and JavaScript and recently remodeled to work in Vue. Have fun! <br>
            <b>CHALLENGE: Can you find your way back to the homepage?</b>
            </p>
            <a href="https://store.google.com/US?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-US&pli=1">Store</a>
       </div>
       <div class="right-nav">
            <a href="https://accounts.google.com" target="_blank">Gmail</a>
            <a href="https://www.google.com/imghp?hl=en&ogbl" target="_blank">Images</a>
            <img class="apps-icon" @click="appsClick" src="https://i.postimg.cc/5th1xjn5/apps-icon.png">
            <a href="https://accounts.google.com" target="_blank"><button class="signin">Sign In</button></a>
       </div>
    </nav>

    <!-- Apps List -->
    <div id="apps">
        <router-link to="/"><i class="fa-solid fa-house"></i></router-link>
        <a href="https://codepen.io/Vilodye/pen/zYaxdNa" target="_blank"><i class="fa-brands fa-codepen"></i></a>
        <a href="https://github.com/vilodye1" target="_blank"> <i class="fa-brands fa-github"></i></a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1"><i class="fa-solid fa-envelope"></i></a>
        <a href="https://www.linkedin.com/in/p-blasco/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://www.youtube.com"><i class="fa-brands fa-youtube"></i></a>
    </div>

    <!-- Searchbar -->
    <div class="searchbox">
        <!-- Logo -->
        <div class="logo-flex">
            <img id="logo" src="https://i.postimg.cc/xjyY2fHH/logo.png" placeholder="logo">
            <p>Clone</p>      
        </div>
        <div class="search">
            <div class="searchbar">
                <div class="search-left"><i class="material-icons">search</i></div>
                <!-- search form -->
                <form action="https://google.com/search">
                    <input class="input" name="q" type="text" @change="onChange">
                </form>
                <div class="search-right">
                    <p><img class="icon mic-icon" alt="search by voice" src="https://i.postimg.cc/76S4bDWF/Google-mic-svg.png"></p>
                    <img class="icon" src="https://i.postimg.cc/4y5TbPZw/camera.png">
                </div>
            </div>
            <div class="search-btn">
                <button id="search" @click="onClick">Google Search</button>
                <button id="lucky-btn" @mouseenter="shuffle" @mouseleave="shuffleLeave">I'm Feeling Lucky</button>
            </div>
        </div>
    </div>
    <p class="disclaimer">*This project is best viewed in desktop.</p>


    <!-- footer -->

        <div class="footer-links">
        <div class="left-footer">
            <a href="https://ads.google.com/intl/en_us/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1#!/" target="_blank">Advertising</a>
            <a href="https://smallbusiness.withgoogle.com/?subid=us-en-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google&utm_medium=ep&utm_campaign=google_hpbfooter&utm_content=google_hpbfooter&gmbsrc=us-en_US-et-gs-z-gmb-s-z-u~sb-g4sb_srvcs-u#!/" target="_blank">Business</a>
            <a href="https://www.google.com/search/howsearchworks/?fg=1" target="_blank">How Search works</a>
        </div>
        <div class="center-footer">
            <img class="leaf-icon" src="https://i.postimg.cc/sxyrhqFv/carbon-leaf.png" alt="carbon-leaf">
            <a href="https://sustainability.google/carbon-free/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer&utm_content=#home" target="_blank">Carbon neutral since 2007</a>
        </div>
        <div class="right-footer">
            <a href="https://policies.google.com/privacy?hl=en&fg=1" target="_blank">Privacy</a>
            <a href="https://policies.google.com/terms?hl=en&fg=1" target="_blank">Terms</a>
            <a href="https://www.google.com/preferences?hl=en&fg=1" target="_blank">Settings</a>
        </div>
        </div>
    </div>
    </div>
</template>

<script setup>
let input = document.querySelector('.input');
const searchBtn = document.getElementById('search');

const search = () => {
    let input = document.querySelector('.input');
    let result = window.open('https://google.com/search?q=' + input.value); 
}

const onChange = () => {
    let input = document.querySelector('.input');
    input.textContent = input.value;
}

const onClick = () => {
    search();
}

// I'm Feeling Lucky
const luckyBtn = document.querySelector('#lucky-btn');
const luckySpan = document.querySelector('#lucky');

// I'm Feeling Lucky Links
const imFeeling = [
`<a href="https://www.google.com/search?q=animal+sounds&csf=b&ct=ifl&cad=2:curious&ei=WVhZY9i6HZOKwbkPuJu38Ao&ved=0ahUKEwiYy-3ioP76AhUTRTABHbjNDa4QnRsIEg&rct=j" target="_blank">I'm Feeling Curious</a>`,
`<a href="https://www.google.com/search?q=bat+signal&csf=b&ct=ifl&cad=2:adventurous&ei=clhZY-zmEIekwbkP_patqAE&ved=0ahUKEwjs59buoP76AhUHUjABHX5LCxUQnRsIEg&rct=j" target="_blank">I'm Feeling Adventurous</a>`, 
`<a href="https://www.google.com/search?q=comedy+movies&csf=b&ct=ifl&cad=2:funny&ei=hVhZY7bRCqSPwbkPm6GMgAk&ved=0ahUKEwj2p9j3oP76AhWkRzABHZsQA5AQnRsIEg&rct=j" target="_blank">I'm Feeling Funny</a>`, 
`<a href="https://www.google.com/search?q=pizza+near+me&ct=ifl&cad=2:hungry&ei=mlhZY7D-NJaLwbkPxvi7oAw&ved=0ahUKEwiws4SCof76AhWWRTABHUb8DsQQnRsIEg&rct=j" target="_blank">I'm Feeling Hungry</a>`,
`<a href="https://artsandculture.google.com/partner/the-frick-collection" target="_blank">I'm Feeling Artistic</a>`
];

// shuffle function
const imFeelingShuffle = () => {
    const luckyBtn = document.querySelector('#lucky-btn');
    luckyBtn.innerHTML="";
    luckyBtn.classList.add('luckyAnimate');

    // array randomizer
    let randomElement = imFeeling[Math.floor(Math.random() * imFeeling.length)];

    setTimeout(() => {
        const luckyBtn = document.querySelector('#lucky-btn');
        luckyBtn.classList.remove('luckyAnimate');
        luckyBtn.innerHTML = `${randomElement}`;
    }, 500);
};

// Event Listeners

const shuffle = () => {
    imFeelingShuffle();
}

const shuffleLeave = () => {
    const luckyBtn = document.querySelector('#lucky-btn');
    luckyBtn.classList.remove('luckyAnimate');
    luckyBtn.innerText = "I'm Feeling Lucky";
}

// Apps icon window
const appsIcon = document.querySelector('.apps-icon');
const apps = document.querySelector('#apps');

const appsClick = () => {
    const apps = document.querySelector('#apps');
    if(apps.style.display === 'none') {
        apps.style.display = 'block';
    } else {
        apps.style.display = 'none';
    }
}

// about hover
const aboutLink = document.querySelector('.about-link');
const aboutInfo = document.querySelector('#google-about');

const displayAbout = () => {
    const aboutInfo = document.querySelector('#google-about'); 
    aboutInfo.style.display = 'block';
}

const hideAbout = () => {
    const aboutInfo = document.querySelector('#google-about'); 
    aboutInfo.style.display = 'none'; 
}

</script>

<style scoped>
.logo-flex {
    font-family: Poppins, sans-serif;
    display: flex;
    align-items: center;
    font-size: 24px;
    color: rgb(87, 87, 250);
    font-weight: bold;
}
.google-desktop {
    margin: 0;
    padding: 100px 0 0 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    width: 100vw;
    height: 100vh;
}

p {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
    color: #000;
    font-size: 14px;
}

a:hover {
    text-decoration: underline;
}

/* icons */
.icon {
    width: 24px;
    height: 24px;
    margin: 5px;
}

.icon:hover {
    cursor: pointer;
}

/* buttons */
button {
    background: #F8F9FA;
    border: 1px solid rgba(134, 134, 134, 0);
    padding: 10px 16px;
    margin: 11px 4px;
    border-radius: 6px;
    font-size: 14px;
}

button:hover {
    border: 1px solid rgba(134, 134, 134, 0.3);
    box-shadow: 0px 1px 2px rgba(134, 134, 134, 0.3)
}

button:active {
    border: 1px solid rgb(87, 87, 250);
}

.disclaimer {
    display: none;
    justify-content: center;
    align-items: center;
    color: red;
}

/* ABOUT HOVER */
#google-about {
    display: none;
    position: absolute;
    width: 500px;
    background: #eee;
    line-height: 2;
    padding: 20px;
    border-radius: 4px;
    margin-left: 5px;
}

.about-link {
    color: rgb(87, 87, 250);
    font-weight: bold;
}


.search-icon {
    color: #9d9a9a;
}

/* Top Navigation */
#topNav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
}

.right-nav {
    display: flex;
    align-items: center;
}

.left-nav a,
.right-nav a {
    margin: 5px 10px;
}

.apps-icon {
    width: 23px;
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
}

/* Apps Menu */
#apps {
    position: absolute;
    right: 20px;
    width: 350px;
    padding: 20px;
    border: 1px solid rgba(134, 134, 134, 0.3);
    border-radius: 6px;
    box-shadow: 2px 2px 3px rgba(134, 134, 134, 0.4);
    display: none;
}

#apps i {
    padding: 20px;
}

#apps i:hover {
    background:rgb(218, 234, 255);
    padding: 20px;
    border-radius: 6px;
}

.fa-brands, .fa-solid {
    font-size: 40px;
    margin: 10px;
}

.fa-youtube {
    color: red;
}

.fa-linkedin {
    color: rgb(65, 65, 251);
}

.fa-github {
    color: rgb(125, 2, 159);
}

.fa-house {
    color: goldenrod;
}

.fa-envelope {
    color: green;
}

/* Sign in Button */
.signin {
    background: #1A73E8;
    color: #fff;
    padding: 9px 24px;
}

.signin a {
    color: #fff;
    text-decoration: none;
}

.signin:hover {
    filter: brightness(90%);
    box-shadow: 2px 2px 3px rgba(134, 134, 134, 0.4);
    cursor: pointer;
}

/* Google Logo */
#logo {
margin-bottom: 25px;
}

/* Search bar */

.searchbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}

.searchbar {
    border: 1px solid rgb(225, 225, 225);
    background-color: #fff;
    width: 555px;
    border-radius: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 10px;
}

.searchbar:hover {
    box-shadow: 2px 2px 5px rgba(134, 134, 134, 0.3);
    cursor: text;
}

.search-btn {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    gap: 7px;
    font-size: 16px;
}

.search-icon {
    width: 15px;
    height: 15px;
}


.mic-icon {
    width: 15px;
    height: 20px;
}

.mic-icon:hover .mic-tooltip-text {
    visibility: visible;
    opacity: 1;
}

.search-right {
    display: flex;
    align-items: center;
    gap: 10px;
}

/* form */
form {
    margin: 0;
    padding: 0;
}

input {
    width: 400px;
    display: flex;
    padding: 0;
    margin-left: -40px;
    border: none;
    font-size: 16px;
}

input:focus {
    outline: none;
}

/* I'm Feeling Lucky */

#lucky-btn a {
    border: 1px solid rgba(0, 0, 0, 0);
    text-decoration: none;
}

.luckyAnimate:after {
    text-decoration: none;
    display: inline-block;
    animation: shuffle 0.5s infinite;
    content: "";
    cursor: pointer;
  }
  
  @keyframes shuffle {
    0% {
        content: "I'm Feeling Lucky";
    }
    20% {
        content: "I'm Feeling Adventurous";
    }

    40% {
        content: "I'm Feeling Curious";
    }
    60% {
        content: "I'm Feeling Artistic";
    }
    80% {
        content: "I'm Feeling Generous";
    }
    100% {
        content: "I'm Feeling Hungry";
    }
  }
  

/* footer */

.footer-links {
    position: absolute;
    width: 100%;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 900px;
    align-items: center;
    background: #eee;
    padding: 15px 0px;
}

.footer-links a {
    margin-right: 25px;
    color: #70757A;
}

.leaf-icon {
    width: 12px;
    height: 12px;
}

.center-footer {
    position: absolute;
}

@media only screen and (max-width: 600px){
    .desktop-google {
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
    }

    #google-about {
        width: 300px;
    }
    .left-nav a:nth-child(3) {
        display: none;
    }
    .right-nav a:nth-child(1) {
        display: none;
    }
    .signin {
        padding: 9px 15px;
    }
    .right-nav a {
        margin: 0;
    }
    #apps {
        background-color: #FFF;
        padding: 5px;
        width: 200px;
    }
    #apps i {
        padding: 10px;
    }

    .searchbar {
        width: 90vw;
    }

    input {
        width: 70vw;
        margin-left: 5px;
    }

    .mic-icon {
        display: none;
    }

    .footer-links {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0px;
    }
    .footer-links a {
        margin-right: 10px;
    }
    .left-footer {
        margin-bottom: 15px;
    }
    .center-footer {
        display: none;
    }
}
</style>