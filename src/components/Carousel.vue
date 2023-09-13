<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />
  </div>

</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  name: 'my-carousel',
  setup(){
    let currentSlide = ref(1)
    let getSlideCount = ref(null)
    
    // next slide

    const nextSlide = () =>{
      if(currentSlide.value === getSlideCount.value){
        currentSlide.value = 1
        return
      }
      currentSlide.value +=1
    }
    
    // previous slide

    const previousSlide = () =>{
      if(currentSlide.value === 1){
        currentSlide.value = getSlideCount.value
        return
      }
      currentSlide.value -=1
    }
    

    onMounted(()=>{
      getSlideCount.value = document.querySelectorAll('.slide').length

      const timer = setInterval(() => {
        if(currentSlide.value === getSlideCount.value){
        currentSlide.value = 1
        return
      }
      currentSlide.value +=1
      }, 10000)
      
    })
    return {currentSlide, nextSlide, previousSlide}
  }

}
</script>

<style>
.carousel{
  position: relative;
  display: flex;
  align-items: center;
  z-index:9;
  margin: auto;
}
.navigation{
  display: flex;
  position: absolute;
  justify-content: space-between;
  height: 10vh;
  width: 100vw;
  margin: 0;
  align-items: center;
  z-index: 9;
}
.right{
  right: 30px;
  margin-right: 50px;;
}
.left{
  left: 30px;
  margin-left: 50px;
}
i{
  padding: 10px;
  cursor:pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  justify-items: center;
  width: 40px;
  height: 40px;
  background-color: orange;
  border-radius: 8px;
}



</style>