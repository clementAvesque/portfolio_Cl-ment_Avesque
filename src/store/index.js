import { defineStore } from 'pinia';


export const useMainStore = defineStore('main', {
    state: () => ({
        project: [
            {
                name: 'Genesii',
                link: "/background_project/genesii.svg",
                stack: ['vue', 'css', 'html', 'js'],
                description: "Lors de ma recherche d’alternance, j’ai été dans les finalistes d’une entreprise où j’ai dû réaliser une collecte d’information différente de ce qu’on connait... ",
                liens_du_produit: "https://prise-d-information-genesii.vercel.app/",
                presentation: "Présentation du projet",
                realisation: "Réalisation du projet",
                learn: "Ce que j'ai appris de ce projet",
                i_like: "Ce que j'ai aimé dans ce projet",
            },
            {
                name: 'FOUND THE MOUSE',
                link: "/background_project/found_the_rat.svg",
                stack: ['css', 'html', 'js'],
                description: "Dans ce jeu, vous incarnez un assistant d’un chef et une souris s’est  infiltrée dans sa cuisine ! Attrapez la souris avant qu’elle ne  s’enfuie! ",
                liens_du_produit: "https://prise-d-information-genesii.vercel.app/",
                presentation: "Présentation du projet",
                realisation: "Dans ce projet, j'ai dû créer un « cache-cache » en 1 contre bot. J'ai  donc développé un jeu où le joueur doit réussir à éliminer une souris  qui s’est infiltrée dans la cuisine d’un restaurant. La souris se  déplace aléatoirement sur les cases non cliquées, et la limite de coups  est également aléatoire.",
                learn: "Ce projet fut le premier jeu que j’ai réalisé seul en JavaScript. Il m’a permis d’approfondir mes connaissances, de mieux comprendre la logique  du langage et de respecter les délais imposés. Cela m’a également permis de développer mon sens de l’organisation et ma gestion de projet.",
                i_like: "Dans ce projet, j’ai pu découvrir certains aspects de la programmation,  comme la gestion des valeurs interdites ou encore la gestion des  différentes possibilités du code. Étant un jeu, il y a deux fins  possibles : soit le joueur réussit à attraper la souris, soit il échoue. Cela m’a permis de développer deux scénarios dans un seul projet. J’ai  également pu m’entraîner à utiliser le prompt IA grâce à Craiyon, ce qui m’a permis de dessiner mes chefs de cuisine de plus en plus en colère.",
            }

        ],
        color: { blue: '#4D56FF', yellow: '#FFCD03', white: "#FFFFFF", black: "#000000" },
        Font: [ {route: "/font/Aeconic.otf", title: "aeconic"}, {route: "/font/Staatliches-Regular.ttf", title: "staatliches"} ],
        stacks: ["Vue.js", "Javascript", "Node.js/express", "PostgreSQL", "discord.js", "HTML", "CSS", "python", "PHP"],
        theme: true,
    }),
    actions: {
        toggleTheme() {
            this.theme = !this.theme;
        }
    }
});