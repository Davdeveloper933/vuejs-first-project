<template>
  <div class="intro intro-bg">
    <div class="container">
      <div class="intro-text text-center">
        <span class="intro-top title position-relative">
<!--          Facts & info-->
          <slot name="intro_top"></slot>
        </span>
        <h2 class="title intro-title">
          <slot name="intro_title"></slot>
<!--          Movie details-->
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Intro"
}
</script>