<template lang="html">
  <ura-header fixed title="尤拉商场">
    <router-link to="/" slot="left">
       <ura-button icon="back"></ura-button>
       <ura-button icon="close"></ura-button>
    </router-link>
    <ura-button slot="right" icon="more" @click="showUserInfo"></ura-button>
  </ura-header>
</template>

<script>
import UraHeader from '@/assets/packages/header'
import UraButton from '@/assets/packages/button'
export default {
  components: {UraHeader, UraButton},
  methods: {
    showUserInfo () {
      this.$router.push({path: '/info'})
    }
  }
}
</script>

<style lang="postcss">

</style>
