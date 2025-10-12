import { defineStore } from 'pinia';


export const useMainStore = defineStore('main', {
    state: () => ({
        project: [
            {
                id: "001",
                name: 'Genesii',
                link: "/project/pres/genesii.svg",
                link_carrousel: "/background_project/genesii.svg",
                stack: ['vue', 'css', 'html', 'js'],
                description: "Lors de ma recherche d’alternance, j’ai été dans les finalistes d’une entreprise où j’ai dû réaliser une collecte d’information différente de ce qu’on connait... ",
                liens_du_produit: "https://prise-d-information-genesii.vercel.app/",
                presentation: "Présentation du projet",
                realisation: "Réalisation du projet",
                learn: "Ce que j'ai appris de ce projet",
                i_like: "Ce que j'ai aimé dans ce projet",
                card: "/public/project/cards/genesii.svg"
            },
            {
                id: "000",
                name: 'FOUND THE MOUSE',
                link_carrousel: "/background_project/found_the_rat.svg",
                link: "/project/pres/found_the_rat.svg",
                stack: ['css', 'html', 'js'],
                description: "Dans ce jeu, vous incarnez un assistant d’un chef et une souris s’est  infiltrée dans sa cuisine ! Attrapez la souris avant qu’elle ne  s’enfuie! ",
                presentation: "Présentation du projet",
                realisation: "Dans ce projet, j'ai dû créer un « cache-cache » en 1 contre bot. J'ai  donc développé un jeu où le joueur doit réussir à éliminer une souris  qui s’est infiltrée dans la cuisine d’un restaurant. La souris se  déplace aléatoirement sur les cases non cliquées, et la limite de coups  est également aléatoire.",
                learn: "Ce projet fut le premier jeu que j’ai réalisé seul en JavaScript. Il m’a permis d’approfondir mes connaissances, de mieux comprendre la logique  du langage et de respecter les délais imposés. Cela m’a également permis de développer mon sens de l’organisation et ma gestion de projet.",
                i_like: "Dans ce projet, j’ai pu découvrir certains aspects de la programmation,  comme la gestion des valeurs interdites ou encore la gestion des  différentes possibilités du code. Étant un jeu, il y a deux fins  possibles : soit le joueur réussit à attraper la souris, soit il échoue. Cela m’a permis de développer deux scénarios dans un seul projet. J’ai  également pu m’entraîner à utiliser le prompt IA grâce à Craiyon, ce qui m’a permis de dessiner mes chefs de cuisine de plus en plus en colère.",
                card: "/public/project/cards/rat.svg"
            },
            {
                id: "002",
                name: "Canefora",
                link: "/project/pres/canefora.svg",
                stack: ["Looker Studio", "GA4", "GTM"],
                description: "Lors de mon stage chez Canefora, j’ai conçu un tableau de bord Looker Studio permettant à l’entreprise de suivre les performances SEO de son site et de ses clients, tout en exploitant les outils Google pour optimiser sa visibilité en ligne.",
                presentation: "Pendant mon stage chez Canefora, j’ai créé un tableau de bord Looker Studio pour suivre les performances SEO des sites de l’entreprise et de ses clients.",
                realisation: "J’ai disposé de deux semaines pour prendre en main les outils GA4, GTM et Looker Studio, puis concevoir une interface claire et efficace pour le suivi des performances. J’ai mis en place un système de récupération de données via un tableur, intégré ensuite dans le tableau de bord.",
                learn: "Ce projet m’a permis de mieux comprendre les outils de tracking SEO et l’importance d’une stratégie de référencement efficace pour la visibilité et la croissance d’un site.",
                i_like: "J’ai apprécié travailler dans l’univers du SEO, complémentaire au développement, et comprendre l’importance de l’optimisation et de la rédaction de contenu web.",
                card: "/public/project/cards/canefora.svg"
            },
            {
                id: "003",
                name: "Portfolio Danielle L",
                link: "/project/pres/dani.svg",
                stack: ["HTML", "CSS", "JS"],
                description: "Création du portfolio personnel de Danielle Levinzon en échange de services : elle a conçu le design de mon propre portfolio.",
                liens_du_produit: "https://clementavesque.github.io/Danielle_L_portfolio/",
                presentation: "Lors d'un job dating, j'ai rencontré Danielle Levinzon qui souhaitait créer son portfolio. En parallèle, je cherchais un design pour le mien. Nous avons donc convenu d'un échange : elle conçoit le design de mon portfolio, et je code le sien.",
                realisation: "J'ai intégré son portfolio en HTML, CSS et JavaScript pur, sans utiliser de bibliothèques externes. J'ai créé des effets de parallaxe et lui ai expliqué comment utiliser GitHub pour héberger son site et ajouter de nouveaux projets. De plus, j'ai développé un fichier JSON pour faciliter l'ajout de projets à son portfolio.",
                learn: "Ce projet m'a permis de renforcer mes compétences en intégration web, notamment en JavaScript pur. J'ai également appris à utiliser GitHub Pages pour l'hébergement et à structurer des données en JSON pour une gestion dynamique du contenu.",
                i_like: "J'ai apprécié l'aspect collaboratif de ce projet, qui m'a permis de travailler en étroite collaboration avec une autre créative. Cela m'a également offert l'opportunité de sortir de ma zone de confort en utilisant des technologies sans frameworks.",
                card: "/public/project/cards/danielle.svg"
            },
            {
                id: "004",
                name: "QLTUR G",
                link: "/project/pres/qltur_G.svg",
                stack: ["HTML", "CSS", "JS"],
                description: "Lors de mon premier workshop à l'école By CCI Annecy, j’ai réalisé un quiz interactif pour un événement, en collaboration avec une autre développeuse et deux graphistes, découvrant JavaScript sur le projet.",
                presentation: "Au début de la semaine, l’équipe des Ignobles, une entreprise du top 10 des apps françaises, nous a présenté notre workshop : créer un événement et l’exposer à la fin de la semaine. J’ai choisi de réaliser le quiz, où j’ai appris à travailler en équipe pour mener à bien un projet en seulement quatre jours, sans expérience préalable en JavaScript.",
                realisation: "J’ai codé l’intégralité du quiz en JavaScript, en collaboration avec une autre développeuse et deux graphistes. Nous avons intégré les questions et réponses, créé une interface interactive et veillé à ce que le jeu soit fluide et attractif. Ce projet m’a appris à travailler en équipe, gérer les délais serrés et transformer un concept en un produit fonctionnel.",
                learn: "Ce projet m’a permis de découvrir et pratiquer JavaScript dans un contexte réel, apprendre à travailler en équipe sous pression et à organiser efficacement les tâches pour mener un projet à terme en seulement quatre jours. J’ai aussi compris l’importance de la collaboration entre développeurs et designers.",
                i_like: "J’ai particulièrement apprécié le style créatif des graphistes et la méthode d’apprentissage proposée. Bien que le projet ait été complexe, il m’a permis d’acquérir des bases solides, qui me sont aujourd’hui extrêmement utiles. Ce workshop a constitué la première pierre de ma compréhension du web. J’ai également beaucoup apprécié l’encadrement des Ignobles, une source précieuse de connaissances.",
                card: "/public/project/cards/QlturG.svg"
            },
            {
                id: "005",
                name: "Flying to the Sky",
                link: "/project/pres/fly.svg",
                stack: ["HTML", "CSS", "JS"],
                description: "Création d’un jeu de course de montgolfières pour apprendre à manipuler le DOM avec JavaScript et appliquer des notions de design graphique sur Figma.",
                presentation: "Lors de mon parcours, j’ai créé ce jeu pour apprendre à manipuler le DOM. Grâce à JavaScript, j’ai mis en place un jeu de 'spamming' intégrant la programmation et le graphisme (réalisé sur Figma). J’ai pris en charge l’ensemble du projet et j’ai apprécié la totale autonomie et la liberté de choisir le thème et le fonctionnement du jeu.",
                realisation: "J’ai développé le jeu en HTML, CSS et JavaScript, manipulant le DOM pour gérer les déplacements et les interactions. J’ai créé les animations et tous les éléments graphiques sur Figma, puis je les ai intégrés dans le jeu pour qu’il soit interactif et fluide.",
                learn: "Ce projet m’a permis de maîtriser la manipulation du DOM en JavaScript et de connecter la logique de programmation aux éléments visuels. J’ai appris à gérer un projet de A à Z, en consolidant mes compétences en HTML, CSS et JS, tout en travaillant de manière autonome.",
                i_like: "J’ai beaucoup aimé le fait d’être en totale autonomie et de pouvoir choisir librement le thème et le fonctionnement du jeu. Ce projet m’a permis de mettre en pratique mes compétences en programmation et design, et d’apprécier le processus créatif de bout en bout.",
                card: "/public/project/cards/flying_to_the_sky.svg"
            }





        ],
        color: { blue: '#4D56FF', yellow: '#FFCD03', white: "#FFFFFF", black: "#000000" },
        stacks: ["Vue.js", "Javascript", "Node.js/express", "PostgreSQL", "discord.js", "HTML", "CSS", "python", "PHP"],
        theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? false : true,
    }),
    actions: {
        toggleTheme() {
            this.theme = !this.theme;
        }
    }
});