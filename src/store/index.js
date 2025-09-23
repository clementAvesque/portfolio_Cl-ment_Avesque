import { defineStore } from 'pinia';


export const useMainStore = defineStore('main', {
    state: () => ({
        project: [
            {
                name: 'Mon Projet',
                link:"/img_project.png",
                stack: ['vue', 'css','html','js'],
                description: "Ceci est une description de mon projet. Il s'agit d'une application web développée avec Vue.js et d'autres technologies modernes.",
                liens_du_produit: "www.google.com",
                presentation: "Présentation du projet",
                realisation: "Réalisation du projet",
                learn: "Ce que j'ai appris de ce projet",
                i_like: "Ce que j'ai aimé dans ce projet",
            }
        ],
        color: {blue:'#4D56FF',yellow :'#FFCD03',white:"#FFFFFF",black:"#000000"},
        Font: {title:"geist",text:"staatliches"},
        stacks: ["Vue.js","Javascript","Node.js/express","PostgreSQL","discord.js","HTML","CSS","python"],
        theme: true,
    }),
    actions: {
        toggleTheme() {
            this.theme = !this.theme;
        }
    }
});