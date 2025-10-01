<template>

    <img src="../assets/pdp.jpg" alt="" :style="{ '--primary': mode ? '#4D56FF' : '#FFCD03' }">

</template>

<style scoped>
img {
    width: 30%;
    padding: 10px;
    object-fit: cover;
    border: solid 2px;
    border-color: var(--primary);
    filter: drop-shadow(0 0 20px var(--primary));
    clip-path: polygon(20% 0%,
            50% 0%,
            100% 0%,
            100% 80%,
            80% 100%,
            0% 110%,
            0% 90%,
            0% 20%
        );
}
</style>

<script>
export default {
    name: "pdp",

    props: {
        mode: {
            type: Boolean,
            default: true
        }
    },
    setup(props) {
        const useMode = {
            true: {
                BorderColor: "#4D56FF"
            },

            false: {
                BorderColor: "#FFCD03"
            }

        }
    },
}</script>