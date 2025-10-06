<template>
    <div id="background">
        <img src="../assets/top_slug_light.svg" alt="" id="top" v-if="theme">
        <img src="../assets/top_slug_night.svg" alt="" id="top" v-else>
        <div id="content"></div>
    </div>
</template>
<style scoped>
    #content{
        background-color: aliceblue;
        width: 80%;
        height: 20vh;
        justify-self: center;
        margin-top: 5%;
    }

#background {
    height: 150vh;
    width: 100%;
        background-color: var(--white);
    background-image:
        linear-gradient(var(--black) 1px, transparent 1px),
        linear-gradient(90deg, var(--black) 1px, transparent 1px);
    background-size: 150px 150px;
}

#top {
    width: 100%;
    margin: 0;
}
</style>
<script>

import { useMainStore } from '../store';
import { computed, watch } from 'vue';


export default {
    setup() {
        let store = useMainStore()
        let theme = computed(() => store.theme)

        const changeHoverColor = (bool) => {
            if (bool === true) {

                console.log("light");
                document.documentElement.style.setProperty('--blue', store.color.blue);
                document.documentElement.style.setProperty('--yellow', store.color.blue);
                document.documentElement.style.setProperty('--black', store.color.black);
                document.documentElement.style.setProperty('--white', store.color.white);
            } else {
                document.documentElement.style.setProperty('--blue', store.color.yellow);
                document.documentElement.style.setProperty('--yellow', store.color.yellow);
                document.documentElement.style.setProperty('--black', store.color.white);
                document.documentElement.style.setProperty('--white', store.color.black);
                console.log("dark");
            }

        };
        changeHoverColor(theme.value)

        watch(theme,(value) => {
            changeHoverColor(value);
        },{immediate: true});

        return { theme, changeHoverColor }
    }


}
</script>
