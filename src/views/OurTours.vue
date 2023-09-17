<template>
  
  <div class="tour-types">
    <transition-group
    name="list" 
    appear
    @before-enter="beforeEnter"
    @enter="enter"
    mode="out-in" 
    tag="ul" 
    class="list">
      <li v-for="(tour, index) in tours" :key="tour.id" :data-index="index">
        
          <h2 class="name">{{tour.name}}</h2>
          <h4 class="type">Type: {{tour.type}}</h4>
          <h4 class="cost">Cost in $: {{tour.cost}}</h4>
          <h4 class="duration">Duration (in days): {{tour.duration}}</h4>
          <p class="desc">Description: {{tour.desc}}</p>
        
      </li>
    </transition-group>
  </div>
  
</template>

<script>
import gsap from "gsap"
import { ref } from 'vue'
export default {
  setup(){
    const tours = ref([])
    const selected = ref('duration')

    const beforeEnter = (el) =>{
      el.style.opacity = 0;
      el.style.transform = "translateY(100px)"
    }
    const enter = (el, done) =>{
      gsap.to(el,{
        y:0,
        opacity: 1,
        duration: 1,
        onComplete: done,
        delay: el.dataset.index * 0.4
      })
    }

    const sort = () =>{
      if(selected.value === "cost"){
        // const sortedTours = [...this.tours].cost.sort(a,b => a+b)
        // this.tours = sortedTours
      }
      if(selected.value === "type"){
        
      }
      if(selected.value === "duration"){
        
      }
    }
    return { tours, selected, beforeEnter, enter, sort}
  },
  mounted(){
    fetch("epicur.netlify.app/tours")
      .then(res => res.json())
      .then(data => this.tours = data)
      .catch(err => console.log(err.message))
  }
  
}
</script>

<style scoped>
.tour-types{
  display: flex;
  justify-content: center;
}
 .list{
  
  list-style: none;
  position: absolute;
  margin-top: 110vh;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  
 }
 .list li{
  font-family: Oswald;
  cursor: pointer;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  background-color:orange;
  max-width: 400px;
  min-width: 200px;
  min-height: 200px;
  max-height: 400px;
 }
 .name{
  color:orangered;
  text-shadow: 1.5px 1px 1.5px black ;
  text-transform:uppercase
 }
 @media only screen and (max-width: 500px){
  .list{
  grid-template-columns: 1fr;
 }
 }


</style>