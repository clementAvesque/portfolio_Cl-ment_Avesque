<template>
    <section id="contact">
        <div id="explain">
            <h2>UN PROJET?</h2>
            <p>Vous cherchez un développeur motivé, humain et structuré ? Vous êtes au bon endroit. Contactez-moi et je
                vous répondrai sous 48h, avec enthousiasme et professionnalisme. Faites-moi confiance pour organiser une
                partie de votre parcours sur le web : structuration, documentation, impact — c’est mon terrain de jeu.
                Ils m’ont fait confiance. Pourquoi pas vous ?</p>
        </div>

        <div>
            <form @submit.prevent="SubmitEvent">
                <input type="text" v-model="form.name" placeholder="Nom" class="simple" required>
                <input type="text" v-model="form.company" placeholder="prénom/entreprise" class="simple" required>
                <input type="text" v-model="form.email" placeholder="Email" class="long" required>
                <input type="text" v-model="form.title" placeholder="titre" class="long" required>
                <textarea v-model="form.message" cols="30" rows="10" placeholder="votre message" required></textarea>
                <Button type="submit" text="envoyer" use="actif" size="moyen" />
            </form>
        </div>

    </section>

</template>
<script>
import Button from '../components/button.vue';
import { computed, watch, reactive } from 'vue';
import { useMainStore } from '../store/index.js';
import emailjs from "@emailjs/browser"

export default {
    name: "contact",
    components: {
        Button
    },



    setup() {


        const store = useMainStore();
        const theme = computed(() => store.theme);


        const form = reactive({
            name: '',
            company: '',
            email: '',
            title: '',
            message: ''
        }),

        SubmitEvent = () => {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            console.log(serviceId, templateId, publicKey)
            emailjs.send(serviceId, templateId, form, publicKey)
                .then(() => {
                    alert('Message envoyé ! Je vous répondrai dans les plus brefs délais.');
                    form.name = '';
                    form.company = '';
                    form.email = '';
                    form.title = '';
                    form.message = '';
                }, (error) => {
                    alert('Une erreur est survenue, veuillez réessayer plus tard.', error);
                });
        };
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

        watch(() => {
            changeHoverColor(theme.value);
        });

        return {
            changeHoverColor
            , SubmitEvent
            , form
        };
    }
}

</script>
<style>
:root {
    --blue: #4D56FF;
    --yellow: #FFCD03;
    --black: #6666663d;
    --white: #FFFFFF;
}

#explain {
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#explain h2 {
    font-family: "staatliches", sans-serif;
    color: var(--yellow);
}

#explain p {
    width: 75%;
    font-size: 24px;
    line-height: 160%;
    text-align: justify;
    font-family: "Geist", sans-serif;
    color: var(--yellow);
    font-weight: 600;
}

input {
    font-family: "Geist", sans-serif;
    font-weight: 800;
    font-size: 16px;
    clip-path: polygon(10% 0%,
            50% 0%,
            100% 0%,
            100% 70%,
            90% 100%,
            0% 100%,
            0% 80%,
            0% 30%);
    min-width: 40%;
    height: 50px;
    padding: 0 10px;
    border: solid 2px var(--blue) !important;
}

textarea {
    font-family: "Geist", sans-serif;
    font-weight: 800;
    font-size: 16px;
    clip-path: polygon(5% 0%,
            50% 0%,
            100% 0%,
            100% 80%,
            95% 100%,
            0% 100%,
            0% 80%,
            0% 20%);
    width: 85%;
    padding: 5% 5%;
    border: solid 2px var(--blue) !important;
}

form {

    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 80%;
    width: 50vw;
}

#contact {

    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    padding-top: 5vh;
    background-color: var(--white);
    background-image:
        linear-gradient(var(--black) 1px, transparent 1px),
        linear-gradient(90deg, var(--black) 0.7px, transparent 0.7px);
    background-size: 150px 150px;

}
</style>