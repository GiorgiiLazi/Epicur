<template>
  <div class='box'>
    <nav class='box-nav'>
        <div class="logo">
            <img id="logo" src="@/assets/logo.png" alt="logo">
            <label for="logo">Epicurean <span>Travel</span></label>
        </div>
        <my-lang-toggle class="lang-toggle" @change="toggleLang"></my-lang-toggle>
        <div class="toggle-btn">
            <div>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
        
    </nav>
    <div class="dynamic-message-box">
        <div>
            <h1>
                Epicurean Travel
            </h1>
            <h3>
                <div v-if="selected === 'EN'">Your Guide To Pleasure</div>
                <div v-else>Ваш гид по удовольствию</div>
            </h3>
        </div>
        <!-- Navigation -->
        <div class="toggle-page left">
                <i class="fa-solid fa-chevron-left fa-beat" style="color: #ff0033;"></i>
        </div>
        <div class="toggle-page right">
                <i class="fa-solid fa-chevron-right fa-beat" style="color: #ff0033;"></i>
        </div>
    </div>
    <nav class="nav-router-links">
        <ul v-if="selected === 'EN'">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/">Our Tours</router-link>
            </li>
            <li>
                <router-link to="/">About us</router-link>
            </li>
            <li>
                <router-link to="/">Why us</router-link>
            </li>
            <li>
                <router-link to="/">Destinations</router-link>
            </li>
    
        </ul>
        <ul v-else>
            <li>
                <router-link to="/">Главная</router-link>
            </li>
            <li>
                <router-link to="/">Туры</router-link>
            </li>
            <li>
                <router-link to="/">О нас</router-link>
            </li>
            <li>
                <router-link to="/">Почему выбирают нас</router-link>
            </li>
            <li>
                <router-link to="/">Дестинации</router-link>
            </li>
    
        </ul>
    </nav>
    
  
</div>
  
</template>

<script>

export default {
    name:'my-navbar',
    data(){
        return{
            lang:'',
            selected:'EN'
        }
    },
    methods:{
        toggleLang(){
            if(this.selected === 'EN'){
                this.selected = 'RU'
            }
            else{
                this.selected = 'EN'
            }
        }
    }

}
</script>

<style scoped>

.box{
    box-sizing: border-box;
    max-height: 100vh;
    height:100vh;
}
.box nav{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0;
    
}
.logo{
    text-align: center;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.logo img{
    height: 100%;
    width: 100%;

    
}
.logo label{
    display: flex;
    flex-direction: column;
    align-content: center;
    font-family:Georgia;
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
    text-shadow: 1.5px 1.5px 1.5px black;
    text-transform: uppercase;
    color:orangered;
}
.lang-toggle{
    display: flex;
    align-items: center;
    justify-items: center;
    z-index:7;
    
}
.toggle-btn{
    display: flex;
    align-items: center;
    justify-items: flex-start;
    cursor: pointer;
}
.toggle-btn div{
    height: 50px;
    width: 50px;
}
.bar{
    display: block;
    height: 8px;
    width: 100%;
    border-radius: 10px;
    background: orangered;
    margin: 5px 5px;
}
.dynamic-message-box{
    margin-top: 50px;
    text-align: center;
}
.dynamic-message-box h1{
    text-shadow: 1.5px 1.5px 1.5px black;
    text-transform: uppercase;
    color:orangered;
    text-decoration: underline;
    text-decoration-color: chartreuse;
}
.dynamic-message-box h3, .dynamic-message-box h2{
    text-shadow: 1.5px 1.5px 1.5px black;
    text-transform: uppercase;
    color:orangered;
}
.nav-router-links{
    display: flex;
    justify-self: flex-start;
    background-image: linear-gradient(to top, #c4d16b, #84cb80, #42bf9c, #00afb2, #009cbb, #0091bd, #0084be, #0077bb, #0071bd, #006abe, #0063be, #005cbe);
    box-sizing: border-box;
    height: 120px;
    position: absolute;
    bottom: 0px;
    width: 100vw;
    min-width: 100%;
    margin: 0px;
    float: left;
    
}
.nav-router-links ul{
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    
}
.nav-router-links ul li{
    display: flex;
    align-items: center;
    padding: 0px 20px;
    height: 100%;
    
}
.nav-router-links ul li a{
    color: white;
    font-size: 25px;
    text-decoration: none;
}
.nav-router-links ul li:hover{
    background: rgba(0, 0, 0, 0.4)
}
.link.active {
  background-color: red;
  color: white;
}
.toggle-page{
  display: flex;
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}
.right{
    right: 30px;
    align-self: center;
}
.left{
    left: 30px;
    align-self: center
}
i{
    cursor:pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: orange;
    border-radius: 8px;
    z-index: 6;
}


</style>