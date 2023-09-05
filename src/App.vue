<template>
  <my-navbar class="navbar"></my-navbar>
  <div class="carousel-box">
    <my-carousel class="carousel" v-slot='{currentSlide}'>
      <my-slides v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <img class="img" :src="require(`./assets/${slide}.jpg`)" alt="">
        </div>
      </my-slides>
    </my-carousel>
  </div>

  <router-view>

  </router-view>
  
</template>

<script>
import HomeView from './views/HomeView.vue'
export default {
  components:{HomeView},
  setup(){
    const carouselSlides = ['bg-1','bg-2','bg-3', 'bg-4', 'bg-5']
    
    return {carouselSlides}
  },
  mounted(){

  }
 
  
  

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.navbar{
  z-index:5;
  position: absolute;
  width: 100%
}
.carousel-box{
  position:absolute;
  top:0;
  left:0;
  max-height: 100vh;
  height:100vh;
  z-index: 0;
}
.carousel{
  position: relative;
  max-height: 100vh;
  height:100vh;
}
.slide-info{
  position:absolute;
  top:0;
  left:0;
  width: 100%;
  max-height: 100%;
  height: 100%;
}
.slide-info img{
  min-width: 100%;
  height: 100%;
  object-fit: cover;
}
.img{
  max-width: 100vw;
  max-height:100vh;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}



</style>
