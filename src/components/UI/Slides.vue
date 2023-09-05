<template>
  <div class='slide'>
    <transition name="slide">
        <slot/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'my-slides'

}
</script>

<style scoped>
.slide-enter-from{
  opacity: 0;
  transform: translateX(100px)
}
.slide-enter-active{
  transition: all 0.3s ease
}
.slide-leave-to{
  opacity: 1;
  transform: translateX(-100px)
}
.slide-leave-active{
  transition: all 0.3s ease
}
</style>