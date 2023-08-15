<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />
  </div>

</template>

<script>
import { ref } from 'vue'
export default {
  name: 'my-carousel',
  setup(){
    const currentSlide = ref(2)
    // const getSlideCount = 
    
    return {currentSlide}
  }

}
</script>

<style>

</style>