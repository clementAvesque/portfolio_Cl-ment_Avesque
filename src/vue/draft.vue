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
            <img :src="project.link" alt="" id="image">
            <div id="desc">{{ project.description }}</div>
        </section>
        <section id="selector">
            <CustomButton size="petit" text="<-" use="actif" @click="less()" />
            <RouterLink :to="`/draft/${project.name}`">
                <CustomButton text="voir plus" use="actif" />
            </RouterLink>
            <CustomButton size="petit" text="->" use="actif" @click="more()" />
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
        let position = ref(0)
        let store = useMainStore()
        let theme = computed(()=>store.theme)
        let projects = store.project
        let project = computed(() => projects[slideselected.value])
        console.log(project.value)
        const more = () => {
            slideselected.value++
            position.value++
            if(position.value>2){
                position.value = 0
            }
            if (slideselected.value > projects.length-1) {
                slideselected.value = 0
            }
            project = projects[slideselected.value]
        }

        const less = () => {
            slideselected.value--
            position.value--
            if (slideselected.value < 0) {
                slideselected.value = projects.length - 1
            }
            if(position.value < 0){
                position.value = 2
            }
            
            project = projects[slideselected.value]
        }

        function position_content() {
            let identity = document.getElementById("identity")
            let image = document.getElementById("image")
            let desc = document.getElementById("desc")
            switch (position.value) {
                case 0:
                    identity.style.marginLeft = "50px"
                    image.style.marginLeft = "50%"
                    desc.style.marginLeft = "50px"
                    break
                case 1:
                    identity.style.marginLeft = "50%"
                    image.style.marginLeft = "10%"
                    desc.style.marginLeft = "60%"
                    break
                case 2:
                    identity.style.marginLeft = "70%"
                    desc.style.marginLeft = "70%"
                    image.style.marginLeft = "50px"
                    break
            }
        }

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

        watch(theme, (newValue) => {
            changeHoverColor(newValue);
        });

        watch(() => slideselected.value, (value) => {
            position_content(slideselected.value)
        })



        return { theme , more, less, project, changeHoverColor }


    }
}
</script>
<style scoped>
#desc {
    width: 30%;
    font-size: 24px !important;
    margin-top: -10%;
    margin-left: 50px;
    transition: all 0.4s ease-in-out;
    font-family: "Geist", sans-serif;
    color: var(--black);
    text-align: justify;
}

#image {
    height: 60%;
    margin-left: 50%;
    transition: all 0.3s ease-in-out;
}

#stack {
    display: flex;
    flex-direction: row;
    gap: 10px;
    transition: all 0.5s ease-in-out;
}

#identity {
    margin-top: 50px;
    margin-left: 50px;
    height: 10vh;
    transition: all 0.5s ease-in-out;
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