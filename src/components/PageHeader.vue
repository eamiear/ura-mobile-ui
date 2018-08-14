<template lang="html">
  <header class="ura-header" :class="{'is-fixed': fixed}">
    <div class="ura-header-button is-left">
      <slot name="left"></slot>
    </div>
    <h1 class="ura-header-title" v-text="title"></h1>
    <div class="ura-header-button is-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    fixed: Boolean,
    title: String
  }
}
</script>

<style lang="css">
@import '../assets/style/var.css'

@component-namespace ura {
  @component header {
    display: flex;
    align-items: center;
    position: relative;

    font-size: 14px;
    color: $color-white;
    background-color: $color-blue;

  }
}
</style>
