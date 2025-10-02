<template>
    <footer>
        <div id="organisation">
            <img src="../assets/star_footer.svg" alt="">
            <div id="content">
                <section id="list"></section>
                <section id="other"></section>
            </div>
            <img src="../assets/star_footer.svg" alt="">
        </div>
    </footer>
</template>
<style scoped>
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
    padding: 10%;
    background-repeat: no-repeat;
    background-size: 50% 80%;
    margin-top: -16vh;
    width: 100%;
    min-height: 80vh;
    background-color: var(--blue);
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