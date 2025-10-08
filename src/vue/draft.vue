<template>
    <div id="content">
        <section id="slider">
            <div id="identity">
                <h1>{{ project.name }}</h1>
                <div id="stack">
                    <div v-for="stack in project.stack">
                        <CustomButton use="passif" size="petit" :text="stack" style="width: 100%; margin: 10px;" />
                    </div>
                </div>
            </div>
            <img :src="project.link" alt="">
            <div id="desc">{{ project.description }}</div>
        </section>
        <section id="selector">
            <CustomButton size="petit" text="-" use="actif" @click="less()" />
            <RouterLink :to="`/draft/${project.name}`">
                <CustomButton text="voir plus" use="actif" />
            </RouterLink>
            <CustomButton size="petit" text="+" use="actif" @click="more()" />
        </section>

    </div>
</template>
<script>
import { useMainStore } from '../store';
import CustomButton from '../components/button.vue'
import { ref, computed, watch } from 'vue'

export default {
    components: {
        CustomButton,
    },
    setup() {
        let slideselected = ref(0)
        let store = useMainStore()
        let projects = store.project
        let project = computed(() => projects[slideselected.value])
        console.log(project.value)
        const more = () => {
            slideselected.value++
            if (slideselected.value > projects.length - 1) {
                slideselected.value = 0
            }
            project = projects[slideselected.value]
        }

        const less = () => {

            if (slideselected.value <= 0) {
                slideselected.value = 3
            }
            slideselected.value--
            project = projects[slideselected.value]
        }

        function position_content() {
            switch (slideselected.value) {
                case 0:

                    break
                case 1:

                    break
                case 2:

                    break
            }
        }

        watch(()=>slideselected.value,(value)=>{
            position_content(slideselected.value)
        })


        return { more, less, project }


    }
}
</script>
<style scoped>
#stack {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

#identity {
    margin-top: 50px;
    height: 10vh;
}

#slider {
    height: 80vh;
    width: 100%;
}

h1 {
    color: var(--yellow);
    font-size: 80px;
    font-family: "staatliches", sans-serif;
    margin: 0;
    padding: 0;
    text-shadow: 0 0 20px var(--yellow);
}

#selector {
    height: 10vh;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}


#content {
    height: 120vh;
    width: 100%;
    background-color: var(--white);
    background-image:
        linear-gradient(var(--black) 1px, transparent 1px),
        linear-gradient(90deg, var(--black) 1px, transparent 1px);
    background-size: 150px 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>