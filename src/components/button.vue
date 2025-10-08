<template>
    <button :class="[use ,size]" :type="type">
        {{ text }}
    </button>
</template>
<style scoped>
:root {
    --buttonblue: #4D56FF;
    --buttonyellow: #FFCD03;
    --buttonblack: #000000;
    --buttonwhite: #FFFFFF;
}

.actif {
    background-color: #4D56FF;
    color: white;
    min-width: 133px;
    min-height: 51px;
}

.passif {
    width: 25%;
    background: transparent;
    color: var(--black);
    border: solid 2px var(--buttonyellow);
}

button {
    padding: 5%;
    color: var(--buttonwhite);
    border: none;
    font-family: "Geist", sans-serif;
    cursor: pointer;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    background: var(--buttonblue);
    transition: 0.3s ease;
    clip-path: polygon(3% 10%,
            6% 0%,
            100% 0%,
            100% 82%,
            97% 90%,
            94% 100%,
            0% 100%,
            0% 18%,
            3% 10%);
}

.grand{
    font-size: 32px;
    padding: 3% 5%;
}

.actif:hover {
    color: #4D56FF;
    ;
    background: white;
    text-align: center;
    text-shadow: 0 0 20px #4D56FF;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.passif:hover {
    color: var(--buttonblack);
    ;
    background: var(--buttonyellow);
    text-align: center;
    text-shadow: 0 0 20px var(--buttonyellow);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.petit{
    padding: 2vh!important;
}
</style>

<script>
import { useMainStore } from '../store/index.js';
import { onMounted } from 'vue';
export default {
    name: 'CustomButton',

    props: {
        type: {
            type: String,
            default: 'button',
            validator: (value) => ['button', 'submit', 'reset'].includes(value)
        },
        text: {
            type: String,
            default: 'bouton de fou'
        },
        use: {
            type: String,
            default: 'passif',
            validator: (value) => ['passif', 'actif'].includes(value)
        },
        size: {
            type: String,
            default: 'moyen',
            validator: (value) => ['petit', 'moyen', 'grand'].includes(value)
        }
    },
    setup() {
        const store = useMainStore();


        const changeHoverColor = () => {
            document.documentElement.style.setProperty('--buttonblue', store.color.blue);
            document.documentElement.style.setProperty('--buttonyellow', store.color.yellow);
            document.documentElement.style.setProperty('--buttonblack', store.color.black);
            document.documentElement.style.setProperty('--buttonwhite', store.color.white);
        };

        onMounted(() => {
            changeHoverColor(); // Appeler la fonction après le montage du composant
        });

        return {
            changeHoverColor
        };
    },
};
</script>