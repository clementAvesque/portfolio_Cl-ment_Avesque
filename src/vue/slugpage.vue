<template v-if="project">
    <div id="background">
        <img src="../assets/top_slug_light.svg" alt="" id="top" v-if="theme">
        <img src="../assets/top_slug_night.svg" alt="" id="top" v-else>
        <div id="content">
            <div id="pres">
                <p>{{ project.id }}</p>
                <h1>{{ project.name }}</h1>
                <img :src="project.link" alt="">
                <div id="stacks">
                    <div v-for="stack in project.stack">
                        <Custombutton size="petit" :text="stack" style="width: 100%;" />
                    </div>
                    <a :href="project.liens_du_produit" target="_blank">
                        <Custombutton text="testez le!" use="actif" />
                    </a>
                    
                </div>
            </div>
            <div id="desc">
                <h3>description</h3>
                <p>{{ project.description }}</p>
                <h3>ce que j'ai appris</h3>
                <p>{{ project.learn }}</p>
                <h3>ce qui m'a plus</h3>
                <p>{{ project.i_like }}</p>
            </div>
            <div id="more">
                <side_project />
            </div>
        </div>
    </div>
</template>
<style scoped>
#stacks {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 5%;
    margin-top: 5%;
}

#more {
    height: 50vh;
    width: 100%;
    margin-bottom: 45vh;
}

#content {
    color: var(--blue);
    display: flex;
    flex-wrap: wrap;
}

#desc {
    padding: 0 5%;
}

h3 {
    font-size: 48px;
    font-family: "staatliches", sans-serif;
    margin-bottom: 2%;
}

#desc p {
    color: var(--black);
    font-size: 20px;
    font-family: "geist", sans-serif;
    line-height: 2;
    margin-bottom: 5%;

}

#pres img {
    height: auto;
    width: 100%;
}

#desc {
    width: 50%;
}

#pres {
    width: 50%;
}

#pres p {
    font-size: 20px;
    font-family: "geist", sans-serif;
}

#pres h1 {
    font-size: 80px;
    font-family: "staatliches", sans-serif;
    margin: 0;
    padding: 0;
    text-shadow: 0 0 20px var(--yellow);
}

#content {
    width: 80%;
    display: flex;
    justify-self: center;
    margin-top: 5%;
}

#background {
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
import { computed, watch, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import side_project from '../components/side_project.vue';
import Custombutton from '../components/button.vue'

export default {
    components: {
        side_project,
        Custombutton
    },
    setup() {
        const route = useRoute()

        let name = computed(() => route.params.name)
        onBeforeMount(() => {
            if (name.value) {
                project.value = store.project.find(p => p.name === name.value)
            }
        })

        let store = useMainStore()
        let theme = computed(() => store.theme)
        const project = computed(() => {
            if (!name.value) return null
            return store.project.find(p => p.name === name.value)
        })
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
        console.log(project.value);
        changeHoverColor(theme.value)

        watch(theme, (value) => {
            changeHoverColor(value);
        }, { immediate: true });




        return { theme, changeHoverColor, project, name }
    }


}
</script>
