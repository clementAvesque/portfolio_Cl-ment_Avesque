<template>
    <div id="background">
        <section id="discover" >
            <div id="presentation">
                <h1>Clément AVESQUE</h1>
                <div>
                    <h3>dev web</h3>
                </div>

            </div>
        </section>
        <img src="../assets/separationNight1.svg" alt="" id="separation" v-if="theme === false" />
        <img src="../assets/separationLight1.svg" alt="" id="separation" v-else />

    </div>
</template>
<style scoped>
:root {
    --blue: #4D56FF;
    --yellow: #FFCD03;
    --black: #6666663d;
    --white: #FFFFFF;
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
    margin-bottom: 50%;

}

section {
    width: 100%;
    height: 110vh;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#discover {
    background-image: url('../assets/background_presentation.svg');
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