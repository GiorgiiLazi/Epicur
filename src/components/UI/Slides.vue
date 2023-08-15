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

</style>