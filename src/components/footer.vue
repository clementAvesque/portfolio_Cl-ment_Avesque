<template>
    <footer>
        <div id="organisation">
            <img src="../assets/star_footer.svg" alt="">
            <div id="content">
                <section id="list">
                    <div id="brand">
                        <img src="../assets/logo-clement_white.svg" alt="" id="logo">
                        <div id="footer_me">
                            <h3>Clément AVESQUE</h3>
                            <p>Développeur</p>
                        </div>
                    </div>
                    <div id="nav">
                        <h3>NAVIGATION</h3>
                        <ul>
                            <li>
                                <RouterLink to="/">Acceuil</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/draft"> Réalisation</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/contact"> Contact</RouterLink>
                            </li>
                        </ul>
                    </div>
                    <div id="RS">
                        <h3>résaux</h3>
                        <a href="https://www.linkedin.com/in/clementavesque" target="_blank" rel="noopener noreferrer">
                        <img src="../assets/linkedin.svg" alt="" id="lien">
                        </a>
                    </div>
                </section>
                <section id="other">
                    <p>Design par Danielle Levinzon | Codé par Clément Avesque</p>
                    <img src="" alt="">
                </section>
            </div>
            <img src="../assets/star_footer.svg" alt="">
        </div>
    </footer>
</template>
<style scoped>



#other{
    margin-top: 5%;
    font-size: 16px;
}

#lien{
    height: 3vh !important;
    width: auto !important;
    cursor: pointer;
}

a{
    color: white;
    text-decoration: none;
    text-shadow: none;
}

#nav ul {
    margin-top: 30%;
    display:flex ;
    flex-direction: column;
    gap: 20%;
    list-style: none;
    gap: 40px;
}
#list {
    display: flex;
    flex-direction: row;
    width: 80vw;
    justify-content: space-around;
    
}

#footer_me {
    text-shadow: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 50%;
    width: fit-content;
}

#footer_me p {
    font-size: 24px;
}

#RS h3{

    margin-bottom: 40%;
}
h3 {
    font-family: "Staatliches";
    width: 140%;
    font-size: 40px;
    text-shadow: none;
}



#logo {
    height: auto !important;
    width: 70% !important;
    margin-right: 20px;
}

#brand {
    display: flex;
    align-items: center;
    width: fit-content;
}

#organisation img {
    height: auto;
    width: 2%;
}

#organisation {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    font-family: "Geist", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-transform: uppercase;
    font-size: 1.5em;
    text-shadow: 0 0 20px white;
}

footer {
    display: flex;
    flex-direction: column;
    padding: 0 10%;
    padding-top: 8%;
    background-repeat: no-repeat;
    background-size: 50% 80%;
    margin-top: -16vh;
    margin-bottom: 5vh;
    width: 100%;
    min-height: 80vh;
    background-color: #4D56FF;
    clip-path: polygon(0% 5%,
            2% 15%,
            22% 15%,
            24% 8%,
            36% 8%,
            38% 0%,
            62% 0%,
            64% 8%,
            76% 8%,
            78% 15%,
            98% 15%,
            100% 5%,
            100% 100%,
            0% 100%);
}
</style>
<script>

export default {
    name: "Footer",
}
</script>