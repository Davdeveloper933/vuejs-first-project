<template>
  <div class="underline" :class="underlineColor"></div>
</template>

<script>
export default {
name: "UnderLine",
  props:{
    underlineColor:{
      type:String,
      default:'grey'
    }
  }
}
</script>
