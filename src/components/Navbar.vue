<template>
    
  <div class='box'>
    <nav class='box-nav'>
        <div class="logo">
            <img id="logo" src="@/assets/logo.png" alt="logo">
            <label for="logo">Epicurean <span>Travel</span></label>
        </div>
        <my-lang-toggle class="lang-toggle" @change="toggleLang"></my-lang-toggle>
        
        
    </nav>
    <nav class="nav-router-links">
        <ul v-if="selected === 'EN'">
            <li>
                <router-link to="home">Home</router-link>
            </li>
            <li>
                <router-link to="tours">Our Tours</router-link>
            </li>
            
            
    
        </ul>
        <ul v-else>
            <li>
                <router-link to="home">Главная</router-link>
            </li>
            <li>
                <router-link to="tours">Туры</router-link>
            </li>
            
            
    
        </ul>
        
    </nav>
    <transition name="title" class="dynamic-message-box" appear>
        <h1>
            Epicurean Travel 
        </h1>
        
    </transition>
    
  
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
    },
    methods:{
        toggleLang(){
            if(localStorage.getItem(this.selected) === 'EN'){
                this.selected = 'RU'
                localStorage.setItem(this.selected, 'RU')
                
            }
            else{
                this.selected = 'EN'
                localStorage.setItem(this.selected, 'EN')
               
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
    margin: auto;
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
.dynamic-message-box{
    text-align: center;
    position: relative;
    top: 150px;
    color: orangered;
    text-transform: uppercase;
    color:orangered;
    text-shadow: 1.5px 1px 1.5px black;
    
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
    display: flex;
    align-items: center;
    justify-items: center;
    box-sizing: border-box;
    padding:0 10px 0px 10px;
    color: red;
    background-color:orange;
    border-radius: 12px;
    width: 100%;
    height: 70%;
}
/* animations */
.title-enter-from{
    opacity: 0;
    transform: translateX(500px);

}
.title-enter-to{
    opacity: 1;
    transform: translateX(0);
}
.title-enter-active{
    transition: all 1s ease
}



</style>