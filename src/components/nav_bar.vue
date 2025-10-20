<template>
    <nav>
        <div id="navigation">
            <ul>
                <li v-for="(item, index) in items" :key="index" @click="moveSelector($event)">
                    <RouterLink v-if="item.to && !item.style" :to="item.to">
                        <CustomButton :text="item.text" use="actif" />
                    </RouterLink>

                    <RouterLink v-else-if="item.to && item.style" :to="item.to">
                        <span>{{ item.text }}</span>
                    </RouterLink>

                    <span v-else>{{ item.text }}</span>
                </li>
            </ul>
            <div id="select">
                <img src="../assets/selector.svg" alt="selector" id="selector"
                    :style="{ transform: `translateX(${selectorX}px)` }" />
            </div>
        </div>
        <div id="mode">
            <img src="../assets/light_them.svg" alt="" id="light_mod" @click="Store.toggleTheme()"
                v-if="Store.theme === true" />
            <img src="../assets/dark_them.svg" alt="" id="dark_mod" @click="Store.toggleTheme()" v-else />
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import CustomButton from './button.vue'
import { useMainStore } from '../store/index.js'

// données
const items = [
    { text: 'Accueil', to: '/', style: true },
    { text: 'Réalisations', style: true, to: '/draft' },
    { text: 'Contact', to: '/contact', style: false }
]

const selectorX = ref(0)
const Store = useMainStore()
let theme = ref(Store.theme)

// fonction pour déplacer le selector
function moveSelector(e) {
    const map = document.getElementById('select')
    const mapLeft = map.getBoundingClientRect().left
    const liLeft = e.currentTarget.getBoundingClientRect().left
    selectorX.value = liLeft - mapLeft + e.currentTarget.offsetWidth / 2
}

// appliquer les couleurs du store
function changeHoverColor() {
    document.documentElement.style.setProperty('--footerblue', Store.color.blue)
    document.documentElement.style.setProperty('--footeryellow', Store.color.yellow)
    document.documentElement.style.setProperty('--footerblack', Store.color.black)
    document.documentElement.style.setProperty('--footerwhite', Store.color.white)
}

onMounted(() => {
    changeHoverColor()
})
</script>

<style scoped>
:root {
    --footerblue: #4d56ff;
    --footeryellow: #ffcd03;
    --footerwhite: #ffffff;
    --footerblack: #000000;
}

#mode {
    height: 80%;
    width: 10%;
    display: flex;
    justify-content: end;
    align-items: end;

}

a{
    text-decoration: none;
}

nav {
    z-index: 100;
    padding-left: 10%;
    height: 100px;
    width: 100%;
    background-color: var(--footerwhite);
    font-family: 'Geist', sans-serif;
    clip-path: polygon(3% 69%,
            0% 34%,
            0% 100%,
            100% 100%,
            100% 34%,
            97% 69%,
            78% 69%,
            75% 34%,
            72% 34%,
            70% 0%,
            31% 0%,
            29% 34%,
            36% 34%,
            33% 34%,
            25% 34%,
            23% 69%,
            3% 69%);
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(2 -5px 10px var(--footerblack));
}

#navigation {
    height: 80%;
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

ul {
    height: 60%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 20px;
    font-weight: bold;
}

#select {
    height: 20%;
    width: 100%;
    position: relative;
    /* nécessaire pour que l'absolute marche */
}

#selector {
    position: absolute;
    transition: all 0.3s ease-in-out;
}
</style>
