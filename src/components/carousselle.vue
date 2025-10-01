<template>
  <div ref="projectEl" class="project-banner"></div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useMainStore } from '../store'

export default {
  setup() {
    const store = useMainStore()
    const projects = store.project
    const all_img = []
    let index = 0
    let intervalId = null

    // ref pour la div
    const projectEl = ref(null)

    // Charger les images
    projects.forEach(element => {
      const img = new Image()
      img.src = element.link
      all_img.push(img)
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
