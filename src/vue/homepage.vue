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
        <img src="../assets/separationNight1.svg" alt="" id="separation" v-if="theme === false" />
        <img src="../assets/separationLight1.svg" alt="" id="separation" v-else />
        <section id="me">
            <pdp :mode="theme"/>
            <p>Je m'appelle Clément AVESQUE, j'ai 19 ans et je suis dans la formation développement web du DN MADE à la CCI d'Annecy qui est en partenariat avec les Gobelins. Je souhaiterais pouvoir évoluer dans mon cursus jusqu'en master pour pouvoir avoir l'expérience et le savoir nécessaire pour répondre à un maximum de besoins.</p>
        </section>
    </div>
</template>
<style scoped>
:root {
    --blue: #4D56FF;
    --yellow: #FFCD03;
    --black: #6666663d;
    --white: #FFFFFF;
}

#me p{
    width: 50%;
    color: var(--black);
    font-size: 32px;

}

#me{
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

#separation {
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
import pdp  from "../components/image.vue"
import { watch, computed, onMounted } from 'vue';
import { useMainStore } from '../store/index.js';
const Store = useMainStore();
let theme = computed(() => Store.theme);
function changeTheme(bool) {
    if (bool === true) {
        document.documentElement.style.setProperty('--white', Store.color.white)
        document.documentElement.style.setProperty('--black', Store.color.black)
    } else {
        document.documentElement.style.setProperty('--white', Store.color.black)
        document.documentElement.style.setProperty('--black', Store.color.white)
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