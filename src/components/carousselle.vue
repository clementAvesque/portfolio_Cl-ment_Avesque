<template>
  <div ref="projectEl" class="project-banner">
    <h2>DÉCOUVREZ MES PROJETS</h2>
    <CustomButton text="Voir les projets" size="grand" use="actif" />
  </div>
</template>

<style>
:root {
  --titleyellow: yellow;
  --nameFont: 'Staatliches';
}



h2 {
  color: var(--titleyellow);
  font-size: 124px;
  margin-bottom: 50px;
  font-family: var(--nameFont);
}

.project-banner {
  width: 100%;
  height: 125vh;
  background-image: url("../assets/Qltur_G.svg");
  background-size: cover;
  background-position: center;
  transition: all 1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useMainStore } from '../store'
import CustomButton from '../components/button.vue'



export default {
  components: {
    CustomButton
  },
  setup() {



    const store = useMainStore()
    const projects = store.project
    const all_img = []
    let index = 0
    let intervalId = null

    document.documentElement.style.setProperty('--titleyellow', store.color.yellow);
    // ref pour la div
    const projectEl = ref(null)

    // Charger les images
    projects.forEach(element => {
      if (element.link_carrousel) {
        
      const img = new Image()
        img.src = element.link_carrousel
        
      all_img.push(img)
      }
    })

    // Lancer le carrousel au montage
    onMounted(() => {
      intervalId = setInterval(() => {
        if (projectEl.value && all_img.length > 0) {
          projectEl.value.style.backgroundImage = `url(${all_img[index].src})`
          index = (index + 1) % all_img.length
        }
      }, 5000)
    })

    // Nettoyage
    onBeforeUnmount(() => {
      clearInterval(intervalId)
    })

    return {
      projects,
      all_img,
      projectEl
    }
  }
}
</script>
