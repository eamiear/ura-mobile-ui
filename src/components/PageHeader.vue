<template lang="html">
  <ura-header fixed title="标题">
    <router-link to="/" slot="left">
       <ura-button icon="back"></ura-button>
    </router-link>
    <ura-button slot="right" icon="more"></ura-button>
  </ura-header>
</template>

<script>
import UraHeader from '@/assets/packages/header'
import UraButton from '@/assets/packages/button'
export default {
  components: {UraHeader, UraButton}
}
</script>

<style lang="postcss">

</style>
