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
    <nav class="nav-router-links">
        <ul v-if="selected === 'EN'">
            <li>
                <router-link to="home">Home</router-link>
            </li>
            <li>
                <router-link to="tours">Our Tours</router-link>
            </li>
            <li>
                <router-link to="about">About us</router-link>
            </li>
            <li>
                <router-link to="why">Why us</router-link>
            </li>
            <li>
                <router-link to="destinations">Destinations</router-link>
            </li>
    
        </ul>
        <ul v-else>
            <li>
                <router-link to="home">Главная</router-link>
            </li>
            <li>
                <router-link to="tours">Туры</router-link>
            </li>
            <li>
                <router-link to="about">О нас</router-link>
            </li>
            <li>
                <router-link to="why">Преимущества</router-link>
            </li>
            <li>
                <router-link to="destinations">Дестинации</router-link>
            </li>
    
        </ul>
        
    </nav>
    <div class="dynamic-message-box">
        <div>
            <h1>
                Epicurean Travel
            </h1>
            
        </div>
        
    </div>
    
  
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
    mounted(){
        localStorage.getItem(this.selected)
        console.log(this.selected)
    },
    methods:{
        toggleLang(){
            if(localStorage.getItem(this.selected) === 'EN'){
                this.selected = 'RU'
                localStorage.setItem(this.selected, 'RU')
                console.log(this.selected)
            }
            else{
                this.selected = 'EN'
                localStorage.setItem(this.selected, 'EN')
                console.log(this.selected)
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
    justify-items: flex-start;
    
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
    text-align: center;
    position: relative;
    top: 150px;
    
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
    z-index: 10;
    display: flex;
    justify-self: center;
    background-image: rgba(0,0,0,0.4);
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
    color: orangered;
    text-shadow: 2px 2px 2px black;
    font-size: 25px;
    text-decoration: none;
}
.nav-router-links ul li:hover{
    background: rgba(0, 0, 0, 0.4)
}
.router-link-active {
    padding:8px;
    color: red;
    background-color:orange;
    border-radius: 12px;
}



</style>