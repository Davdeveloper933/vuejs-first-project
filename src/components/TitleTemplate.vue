<template>
  <div>
    <h2 class="section-title">
      <slot></slot>
    </h2>
    <UnderLine
        :underline-color="underlineColor"
    ></UnderLine>
  </div>
</template>

<script>
import UnderLine from "@/components/UnderLine";
export default {
name: "TitleTemplate",
  components: {UnderLine},
  props:{
    underlineColor: {
      type: String,
      default: 'grey'
    }
  }
}
</script>