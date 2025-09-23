<template>
    <button>
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

button {
    width: 133px;
    height: 51px;
    color: var(--buttonwhite);
    border: none;
    cursor: pointer;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    background: var(--buttonblue);
    transition: 0.3s ease;
    clip-path: polygon(4px 5px,
            8px 0px,
            133px 0px,
            133px 42px,
            129px 46px,
            125px 50px,
            0px 50px,
            0px 9px,
            4px 5px);
}

button:hover {
    color: var(--buttonblue);
    ;
    background: var(--buttonwhite);
    text-align: center;
    text-shadow: 0 0 20px var(--buttonblue);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
</style>

<script>
import { useMainStore } from '../store/index.js';
import { onMounted } from 'vue';
export default {
    name: 'CustomButton',

    props: {
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
    setup(props) {
        const buttonStyles = {
            petit: {
                padding: '5px 10px',
                fontSize: '12px'
            },
            moyen: {
                padding: '10px 20px',
                fontSize: '16px'
            },
            grand: {
                padding: '15px 30px',
                fontSize: '20px'
            }
        };

        const useStyles = {
            passif: {
                backgroundColor: 'blue',
                color: 'white'
            },
            actif: {
                backgroundColor: 'green',
                color: 'white'
            }
        };

        return {
            buttonStyle: {
                ...buttonStyles[props.size],
                ...useStyles[props.use]
            }
        };

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