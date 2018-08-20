<template>
  <section class="ura-body">
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="postcss">

  @component-namespace ura {
    @component body {
      padding: 45px 5px 0;
    }
  }
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave {
    opacity: 0;
  }
</style>
