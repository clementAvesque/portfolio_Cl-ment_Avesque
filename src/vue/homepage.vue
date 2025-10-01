<template>
    <div id="background">
        <section id="discover">
            <div id="presentation">
                <h1>Clément AVESQUE</h1>
                <div>
                    <h3>dev web</h3>
                </div>
            </div>
        </section>
        <img src="../assets/separationNight1.svg" alt="" class="separation" v-if="theme === false" />
        <img src="../assets/separationLight1.svg" alt="" class="separation" v-else />
        <section id="me">
            <pdp :mode="theme" />
            <p>Je m'appelle Clément AVESQUE, j'ai 19 ans et je suis dans la formation développement web du DN MADE à la
                CCI d'Annecy qui est en partenariat avec les Gobelins. Je souhaiterais pouvoir évoluer dans mon cursus
                jusqu'en master pour pouvoir avoir l'expérience et le savoir nécessaire pour répondre à un maximum de
                besoins.</p>
        </section>
        <img src="../assets/separationNight2.svg" alt="" class="separation" v-if="theme === false">
        <img src="../assets/separationLight2.svg" alt="" class="separation" v-else>
        <h2 id="skill">skills</h2>
        <section id="stack">
            <Button v-for="stack in stacks" :key="stack" :text="stack" use="passif" />
        </section>
        <img src="../assets/separationNight3.svg" alt="" class="separation" id="last" v-if="theme === false">
        <img src="../assets/separationLight3.svg" alt="" class="separation" id="last" v-else>
        <RouterLink to="/projet">
            <carousselle/>
        </RouterLink>
    </div>
</template>
<style scoped>
:root {
    --blue: #4D56FF;
    --yellow: #FFCD03;
    --black: #6666663d;
    --white: #FFFFFF;
}

a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    padding: 0;
    text-decoration: none;
}

#projet h2{
    color: #FFCD03;
}

#last {
    margin: 0;
    margin-bottom: -2%;
}

#stack {
    width: 100%;
    min-height: 60vh;
    padding: 0 20%;
    display: flex;
    flex-wrap: wrap;
    gap: 0 5%;
    justify-content: space-between;
}

#skill {
    
    color: var(--yellow);
    text-align: end;
    padding-right: 10%;
    margin-top: -5%;
    text-shadow: 0 0 20px var(--yellow);
}

#projet {
    width: 100vw;
    height: 120vh;
    background-image: url("../assets/background_project/genesii.svg");
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
}


h2 {
    font-size: 64pt;
}


#me p {
    width: 50%;
    color: var(--black);
    font-size: 32px;

}

#me {
    width: 80%;
    flex-direction: row;
    justify-self: center;
    justify-content: space-around;
    align-items: center;
    margin-top: 5%;
    margin-bottom: 10%;
}

#background {
    background-color: var(--white);
    background-image:
        linear-gradient(var(--black) 1px, transparent 1px),
        linear-gradient(90deg, var(--black) 1px, transparent 1px);
    background-size: 150px 150px;
}

.separation {
    width: 100%;
    margin-top: -4%;
    flex-direction: column;

    justify-content: center;
}

section {

    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
}

#discover {
    background-image: url('../assets/background_presentation.svg');
    width: 100%;
    height: 110vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

#presentation {
    margin-top: 40px;
    width: 60%;
}

h1 {
    font-size: 60px;
    font-weight: 700;
    color: white;
    text-shadow: 0 0 20px #000000;
    margin-bottom: 20px;
}
</style>
<script setup>
import carousselle from "../components/carousselle.vue";
import Button from "../components/button.vue";
import pdp from "../components/image.vue"
import { watch, computed, onMounted } from 'vue';
import { useMainStore } from '../store/index.js';
import { RouterLink } from "vue-router";
const Store = useMainStore();
let theme = computed(() => Store.theme);
const stacks = computed(() => Store.stacks)
function changeTheme(bool) {
    if (bool === true) {
        document.documentElement.style.setProperty('--white', Store.color.white)
        document.documentElement.style.setProperty('--black', Store.color.black)
        document.documentElement.style.setProperty('--blue', Store.color.yellow)
        document.documentElement.style.setProperty('--yellow', Store.color.blue)
        document.documentElement.style.setProperty('--buttonblack', Store.color.black)
        document.documentElement.style.setProperty('--buttonwhite', Store.color.white)
        document.documentElement.style.setProperty('--buttonblue', Store.color.yellow)
        document.documentElement.style.setProperty('--buttonyellow', Store.color.blue)
    } else {
        document.documentElement.style.setProperty('--buttonblue', Store.color.blue)
        document.documentElement.style.setProperty('--buttonyellow', Store.color.yellow)
        document.documentElement.style.setProperty('--white', Store.color.black)
        document.documentElement.style.setProperty('--black', Store.color.white)
        document.documentElement.style.setProperty('--blue', Store.color.blue)
        document.documentElement.style.setProperty('--yellow', Store.color.yellow)
        document.documentElement.style.setProperty('--buttonblack', Store.color.white)
        document.documentElement.style.setProperty('--buttonwhite', Store.color.black)

    }
}

onMounted(() => {

    document.documentElement.style.setProperty('--blue', Store.color.blue),
        document.documentElement.style.setProperty('--yellow', Store.color.yellow)
    document.documentElement.style.setProperty('--black', Store.color.black),
        document.documentElement.style.setProperty('--white', Store.color.white)
})

watch(theme, (newVal) => {
    changeTheme(newVal);
});


</script>