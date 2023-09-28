<template>
    <div class="contact-container">
        <p class="popup">Message Sent!</p>
        <h2>Reach out!</h2>
        <form ref="form" @submit.prevent="sendEmail">
            <label>Name</label>
            <input type="text" :value="inputFieldReset" name="user_name" required>
            <label>Email</label>
            <input type="email" :value="inputFieldReset" name="user_email" required>
            <label>Message</label>
            <textarea :value="inputFieldReset" name="message" required></textarea>
            <button v-if="spinner==false" type="submit" value="Send">Submit</button>
            <button v-if="spinner==true" type="submit" value="Send"><Spinner /></button>
        </form>
    </div>
</template>

<script setup>
import Spinner from '../components/core/Spinner.vue';
import Title from '../components/core/Title.vue';
import emailjs from '@emailjs/browser';
import { ref } from 'vue';

const form = ref(null);
const inputFieldReset = ref(null);

const spinner = ref(false);

const sendEmail = () => {
    const buttonText = document.querySelector('button');
    const popup = document.querySelector('.popup')
    spinner.value = true;
    emailjs.sendForm('service_3si0rfo', 'template_tqtnqfa', form.value, 'h2Ox1s8FJBBQWXVoi')
    .then (() => {
        spinner.value = false;
        popup.style.display = 'block';
        const hidePopup = setTimeout(() => {
            popup.style.display = 'none';
        }, 3000);
          inputFieldReset.value = "";
        }, (error) => {
            spinner.value = false;
          alert('Message not sent', error);
        });
}
</script>

<style scoped>

.contact-container {
    width: 100vw;
    height: 100vh;
    background-image: url('/public/bokeh.png');
    background-size: cover;
    background-position: left center;
}

.popup {
    position: absolute;
    display: none;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(3, 173, 3);
    padding: 10px 20px;
    color: #FFF;
    font-family: Poppins, sans-serif;
    font-size: 1.2em;
    z-index: 2;
    border-radius: 5px;
}

form {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        width: 80vw;
        gap: 10px;
        background-color: rgba(179, 95, 163, 1);
        padding: 20px;
        border-radius: 6px;
        color: #FFF;
        font-family: Poppins, sans-serif;
        box-shadow: rgba(112, 74, 112, 0.71) 0px 13px 27px -5px, rgb(0, 0, 0) 0px 8px 16px -8px;
}

label {
    margin: 0;
    padding: 0;
}

input {
    padding: 5px;
    border-radius: 5px;
    color: #000;
}

textarea {
    height: 200px;
    padding: 5px;
    border-radius: 5px;
    color: #000;
}

button {
    background-color: gray;  
    width: 200px;
    margin: 0 auto;
    padding: 10px;
    border-radius: 4px;
    margin-top: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 0px;
}

h2 {
    font-family: Rock Salt, sans-serif;
    font-size: 36px;
    width: 80vw;
    text-align: center;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    position: absolute;
    top: 17%;
    left: 50%;
    transform: rotate(4deg) translate(-50%, -50%);
    z-index: 2;
    color: white;
    text-shadow: 5px 3px 2px rgb(0, 0, 0);
}

@media (min-width: 768px)
    {
        h2 {
            font-size: 60px;
            top: 26%;
    }

    form {
        width: 500px;
    }
    }
@media (min-width: 1024px)
    {

form {
        width: 700px;
}

button {
font-size: 20px;
}

h2 {
    font-family: Rock Salt, sans-serif;
    font-size: 72px;
    top: 23%;
    transform: rotate(3deg) translate(-50%, -50%);
}

.popup {
    bottom: 15%;
}
    }
</style>