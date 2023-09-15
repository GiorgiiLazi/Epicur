<template>
    
  <div class='box'>
    <transition name="upper" class='box-nav' appear>
        <div class="upper-panel">
            <div class="logo">
                <img id="logo" src="@/assets/logo.png" alt="logo">
                <label for="logo">Epicurean <span>Travel</span></label>
            </div>
            <my-lang-toggle class="lang-toggle" @change="toggleLang">
            </my-lang-toggle>
        </div>
    </transition>
    <transition class="nav-router-links" 
        name="navi" 
        appear>
        <div>
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
        </div>
        
        
    </transition>
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
            selected: "EN"
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
    width: 100%;
    
}
.upper-panel{
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
    height: auto;
    width: auto;
    max-width: 250px;

    
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
    max-width: 70px;
    
}
.dynamic-message-box{
    text-align: center;
    text-align: center;
    color: orangered;
    text-transform: uppercase;
    color:orangered;
    text-shadow: 1.5px 1px 1.5px black;
    
}
.nav-router-links{
    z-index: 10;
    display: flex;
    justify-content: center;
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
    padding:5px 20px 5px 20px;
    color: red;
    background-color:orange;
    border-radius: 12px;
    width: 100%;
    height: 70%;
    text-decoration: underline dotted orange;

}
/* animations */
@keyframes wobble{
    0%{ opacity: 0; transform: translateX(600px) }
    50%{ opacity: 1; transform: translateX(-10px) }
    60%{ transform: translateX(10px) }
    70%{ transform: translateX(-4px) }
    80%{ transform: translateX(4px) }
    90%{ transform: translateX(-2px) }
    100%{ transform: translateX(0) }
}
/* .title-enter-from{
    opacity: 0;
    transform: translateX(500px);

}
.title-enter-to{
    opacity: 1;
    transform: translateX(0);
} */
.title-enter-active{
    animation: wobble 1.5s ease;
}
.navi-enter-from{
    opacity: 0;
    transform: translateY(200px)
}
.navi-enter-to{
    opacity: 1;
    transform: translateY(0)
}
.navi-enter-active{
    transition: all 2s ease
}
.upper-enter-from{
    opacity: 0;
    transform: translateY(-200px)
}
.upper-enter-to{
    opacity: 1;
    transform: translateY(0)
}
.upper-enter-active{
    transition: all 2s ease
}
/* dynamic page settings */

@media only screen and (max-width: 500px) {
    .box{
        display: flex;
        flex-direction: column;
    }
    .upper-panel{
        flex-direction: row;
        min-height: 600px;
        justify-content: space-around
    }
    .logo{
        position: absolute;
        top: 0px
    }
    .logo img{
        min-width: 50px;
        min-height: 50px;
    }
    .logo label{
        display: none
    }
    .dynamic-message-box{
        position: absolute;
        top: 50vh;
        text-align: center;
        display: flex;
        left: 50px;
        font-size: 25px;
    }
    .nav-router-links div{
        position: absolute;
        top: 25vh;
    }
    .lang-toggle{
        font-size: 15px;
    }
    .router-link-active{
        padding:15px 20px 15px 20px;
    }
}



</style>