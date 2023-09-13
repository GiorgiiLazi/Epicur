<template>
  
  <div class="box-message">
    <transition appear name="photo">
    <div class="img-box">
      <img src="@/assets/ceo.png" alt="CEO">
    </div>
    </transition>
    <transition name="info" appear>
    <div class="message">
      <h1>Talk to our Expert team</h1>
      <h2>Lazishvili Giorgi</h2>
      <h3>CEO</h3>
      <h4>+555 555 555</h4>
      <h5>malazi140@gmail.com</h5>
    </div>
    </transition>
     
  </div>
  
</template>

<script>


export default {
  name: 'home',
  
  
}
</script>

<style scoped>
  .box-message{
    font-family: Anton, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 100vh;
    height: 100vh;
    width: 100vw;
    background-color: white;
  }
  .message{
    margin-top: 50px;
    margin-bottom: 50px;
    align-self:center;
    background:#ae9e9e;
    height: 250px;
    width: 350px;
    min-width: 300px;
    text-align: left;
    padding: 20px;
    color:white;
    text-shadow: 1.5px 1.5px 1px black;
  }
  .message h1{
    color: black;
    text-shadow: none;
    text-transform: uppercase;
  }
  .img-box{
    margin-top: 50px;
    margin-bottom: 50px;
    align-self:center;
    width: 300px;
    height: 400px;
    min-width: 300px;
    min-height: 300px;
    
  }
  .img-box img{
    width: 100%;
    height: 100%;
    border-radius: 4px;

  }
  /* animation */
  .info-enter-from{
    opacity: 0;
    transform: translateX(100px)
  }
  .info-enter-to{
    opacity: 1;
    transform: translateX(0)
  }
  .info-enter-active{
    transition: all 3s ease
  }
  .photo-enter-from{
    opacity: 0;
    transform: translateY(100px)
  }
  .photo-enter-to{
    opacity: 1;
    transform: translateY(0)
  }
  .photo-enter-active{
    transition: all 3s ease
  }
  

</style>
