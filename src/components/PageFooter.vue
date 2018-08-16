<template>
  <tabbar :fixed="true" v-model="selected">
    <tabbar-item id="home" icon="home" info="首页"></tabbar-item>
    <tabbar-item id="shop" icon="shop" info="商场"></tabbar-item>
    <tabbar-item id="cart" icon="cart" info="购物车"></tabbar-item>
    <tabbar-item id="center" icon="user" info="我的"></tabbar-item>
  </tabbar>
</template>

<script>
import Tabbar from '@/assets/packages/tabbar'
import TabbarItem from '@/assets/packages/tabbar-item'
export default {
  data () {
    return {
      selected: 'home'
    }
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style scoped>

</style>
