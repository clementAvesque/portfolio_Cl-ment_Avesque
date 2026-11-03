import { defineStore } from 'pinia';


export const useMainStore = defineStore('main', {
    state: () => ({
        project: [
    {
        "id": "001",
        "name": "Genesii",
        "link": "/project/pres/genesii.svg",
        "link_carrousel": "/background_project/genesii.svg",
        "stack": ["vue", "css", "html", "js"],
        "description": "During my search for a work-study position, I was a finalist at a company where I had to carry out information gathering unlike anything known before...",
        "liens_du_produit": "https://prise-d-information-genesii.vercel.app/",
        "learn": "With the Genesiii project, I discovered for the first time how an ORM works, using Prisma to model and link my data in a PostgreSQL database hosted on Neon.tech. I learned to create a complete backend with Node.js and Express, manage routes, connect the server to the database, and integrate tools like Nodemailer and Vonage for sending emails and SMS. This project allowed me to understand the logic of a complete application, from the data schema to communication with the user.",
        "i_like": "What I liked most about Genesiii was successfully transforming a simple data collection into a playful experience thanks to a mini escape game. I enjoyed combining creativity and technique, designing a fluid game logic, and seeing all the elements (backend, database, messages) work together. I also particularly appreciated the simplicity and rigor of Prisma, which made me want to continue exploring backend development.",
        "card": "/project/cards/genesii.svg"
    },
    {
        "id": "000",
        "name": "FOUND THE MOUSE",
        "link_carrousel": "/background_project/found_the_rat.svg",
        "link": "/project/pres/found_the_rat.svg",
        "stack": ["css", "html", "js"],
        "description": "In this game, you play as a chef's assistant and a mouse has snuck into the kitchen! Catch the mouse before it escapes!",
        "realisation": "In this project, I had to create a game of hide-and-seek 1-on-1 against a bot. I developed a game where the player must successfully eliminate a mouse that has infiltrated a restaurant kitchen. The mouse moves randomly across unclicked tiles, and the move limit is also random.",
        "learn": "This project was the first game I made entirely on my own in JavaScript. It allowed me to deepen my knowledge, better understand the logic of the language, and respect imposed deadlines. It also helped me develop my organizational sense and project management skills.",
        "i_like": "In this project, I discovered certain aspects of programming, such as managing forbidden values or handling various code possibilities. Being a game, there are two possible endings: either the player successfully catches the mouse, or they fail. This allowed me to develop two scenarios within a single project. I also practiced using AI prompts through Craiyon, which helped me draw my kitchen chefs looking increasingly angry.",
        "card": "/project/cards/rat.svg"
    },
    {
        "id": "002",
        "name": "Canefora",
        "link": "/project/pres/canefora.svg",
        "stack": ["Looker Studio", "GA4", "GTM"],
        "description": "During my internship at Canefora, I designed a Looker Studio dashboard allowing the company to track the SEO performance of its website and its clients, while leveraging Google tools to optimize its online visibility.",
        "presentation": "During my internship at Canefora, I created a Looker Studio dashboard to track the SEO performance of the company's websites and those of its clients.",
        "realisation": "I had two weeks to master GA4, GTM, and Looker Studio tools, and then design a clear and efficient interface for performance tracking. I implemented a data retrieval system via a spreadsheet, which was then integrated into the dashboard.",
        "learn": "This project allowed me to better understand SEO tracking tools and the importance of an effective referencing strategy for a website's visibility and growth.",
        "i_like": "I enjoyed working in the world of SEO, which complements development, and understanding the importance of web optimization and content copywriting.",
        "card": "/project/cards/canefora.svg"
    },
    {
        "id": "003",
        "name": "Portfolio Danielle L",
        "link": "/project/pres/dani.svg",
        "stack": ["HTML", "CSS", "JS"],
        "description": "Creation of Danielle Levinzon's personal portfolio in exchange for services: she designed my own portfolio.",
        "liens_du_produit": "https://clementavesque.github.io/Danielle_L_portfolio/",
        "presentation": "During a job dating event, I met Danielle Levinzon who wanted to create her portfolio. At the same time, I was looking for a design for mine. We agreed on an exchange: she designs my portfolio, and I code hers.",
        "realisation": "I integrated her portfolio in HTML, CSS, and pure JavaScript, without using external libraries. I created parallax effects and explained how to use GitHub to host her site and add new projects. Additionally, I developed a JSON file to facilitate adding projects to her portfolio.",
        "learn": "This project allowed me to strengthen my web integration skills, especially in pure JavaScript. I also learned to use GitHub Pages for hosting and to structure data in JSON for dynamic content management.",
        "i_like": "I appreciated the collaborative aspect of this project, which allowed me to work closely with another creative. It also gave me the opportunity to step out of my comfort zone by using technologies without frameworks.",
        "card": "/project/cards/danielle.svg"
    },
    {
        "id": "004",
        "name": "QLTUR G",
        "link": "/project/pres/qltur_G.svg",
        "stack": ["HTML", "CSS", "JS"],
        "description": "During my first workshop at By CCI Annecy school, I created an interactive quiz for an event, in collaboration with another developer and two graphic designers, discovering JavaScript on the project.",
        "presentation": "At the beginning of the week, the team from Les Ignobles, a company in the top 10 French apps, presented our workshop: create an event and showcase it at the end of the week. I chose to create the quiz, where I learned to work in a team to successfully complete a project in just four days, with no prior experience in JavaScript.",
        "realisation": "I coded the entire quiz in JavaScript, in collaboration with another developer and two graphic designers. We integrated the questions and answers, created an interactive interface, and ensured the game was fluid and attractive. This project taught me how to work in a team, manage tight deadlines, and turn a concept into a functional product.",
        "learn": "This project allowed me to discover and practice JavaScript in a real-world context, learn how to work in a team under pressure, and organize tasks efficiently to complete a project in just four days. I also understood the importance of collaboration between developers and designers.",
        "i_like": "I particularly appreciated the creative style of the graphic designers and the proposed learning method. Although the project was complex, it allowed me to acquire solid foundations that are extremely useful to me today. This workshop was the first stepping stone in my understanding of the web. I also greatly appreciated the supervision of Les Ignobles, a precious source of knowledge.",
        "card": "/project/cards/QlturG.svg"
    },
    {
        "id": "005",
        "name": "Flying to the Sky",
        "link": "/project/pres/fly.svg",
        "stack": ["HTML", "CSS", "JS"],
        "description": "Creation of a hot-air balloon racing game to learn DOM manipulation with JavaScript and apply graphic design concepts on Figma.",
        "presentation": "During my journey, I created this game to learn how to manipulate the DOM. Using JavaScript, I set up a 'spamming' game incorporating programming and graphic design (created on Figma). I took charge of the entire project and enjoyed total autonomy and the freedom to choose the theme and mechanics of the game.",
        "realisation": "I developed the game using HTML, CSS, and JavaScript, manipulating the DOM to manage movements and interactions. I created the animations and all graphic elements on Figma, then integrated them into the game to make it interactive and fluid.",
        "learn": "This project allowed me to master DOM manipulation in JavaScript and connect programming logic to visual elements. I learned to manage a project from end to end, consolidating my skills in HTML, CSS, and JS, while working autonomously.",
        "i_like": "I really liked having total autonomy and being able to freely choose the theme and mechanics of the game. This project allowed me to put my programming and design skills into practice, and appreciate the creative process from start to finish.",
        "card": "/project/cards/flying_to_the_sky.svg"
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
