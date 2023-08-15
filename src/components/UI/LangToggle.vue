<template>
  <div>
    <select class="lang-toggle" v-model="selected" @change="toggleLang">
        <option v-for="lang in langs" :key="lang.id">{{lang.language}}</option>
    </select>
  </div> 
</template>

<script>
export default {
    name: 'my-lang-toggle',
    data(){
      return{
        selected: 'EN',
        langs:[
          {language: 'EN', id: 1},
          {language: 'RU', id: 2}
        ]
      }
    },
    toggleLang(){
      this.$emit('update:change', this.selected)
    }

}
</script>

<style scoped>
.lang-toggle{
  display: flex;
  align-self: center;
  outline: none;
  color:white;
  border: none;
  border-radius: 8px;
  font-size: 25px;
  background:orangered;
  padding: 2px;
}
.lang-toggle *{
  padding: 2px;
  border-radius: 8px;
}


</style>