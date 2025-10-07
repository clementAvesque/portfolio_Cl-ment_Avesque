<template>
    <div id="more">
        <h3>Autres projets</h3>
        <div id="content">
            <div v-for="(project, index) in all_projects" :key="index" class="proj">
                <RouterLink :to="`/draft/${project.name}`">
                    <pdp :mode="true" :src="project.card" />
                </RouterLink>
            </div>
        </div>

    </div>
</template>
<style scoped>
#more {
    border-top: solid 2px var(--yellow);
    height: 20vh;
}

#more h3 {
margin-top: 5%;
font-size: 48px;
font-family: "staatliches", sans-serif;
}
#content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 5%;
    height: 100%;
}

img{
    height: 100% !important;
}

.proj {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
<script>

import { useMainStore } from '../store'
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import pdp from '../components/image.vue'
export default {
    name: "side_project",
    components: { pdp },
    setup() {
        const store = useMainStore()
        const route = useRoute()
        let name = computed(() => route.params.name)
        const all_projects = computed(() => {
            let projects = store.project.filter(p => p.name !== name.value);

            if (projects.length < 2) return projects; // sécurité


            let indexOne = Math.floor(Math.random() * projects.length);
            let indexTwo = Math.floor(Math.random() * projects.length);
            // éviter doublons
            while (indexOne === indexTwo) {
                indexTwo = Math.floor(Math.random() * projects.length);
            }

            return [projects[indexOne], projects[indexTwo]];
        });
        return { all_projects }
    }
}
</script>