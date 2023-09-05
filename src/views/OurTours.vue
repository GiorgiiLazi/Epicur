<template>
  <div class="tour-types">
    <transition-group 
    @before-enter="beforeEnter"
    @enter="enter" name="list" 
    appear 
    mode="out-in" 
    tag="ul" 
    class="list">
      <li v-for="(tour, index) in tourTypes" :key="tour.id" :data-index="index">
        <span class="material-icons">{{tour.name}}</span>
        <div>{{tour.type}}</div>
      </li>
    </transition-group>
  </div>
  
</template>

<script>
import gsap from 'gsap'
import { ref } from 'vue'
export default {
  setup(){
    const tourTypes = ref([
      {name: 'directions_boat_filled', type: 'by sea', id: 1},
      {name: 'train', type: 'by train', id: 1},
      {name: 'drive_eta', type: 'by road', id: 1},
      {name: 'flight_takeoff', type: 'by plain', id: 1},
    ])

    const beforeEnter = (el) =>{
      el.style.opacity = 0;
      el.style.transform = "translateY(100px)"
    } 
    const enter = (el, done) =>{
      gsap.to(el,{
      opacity: 1,
      y:0,
      duration: 1,
      onComplete: done,
      delay: el.dataset.index * 0.2
    })
    } 

    

    return {tourTypes, beforeEnter, enter}
  }
}
</script>

<style scoped>
 .tour-types{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 100vh;
  width: 100vw;
  height: 100vh;
}
.list{
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: 600px;
} 
.list li{
  color:darkred;
  text-shadow: 1px 2px 3px #999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style-type: none;
  background:rgb(208, 208, 208);
  padding: 90px;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
  cursor: pointer;
  line-height: 1.5em;
  text-transform: lowercase;
  font-size: 24px;
}

</style>