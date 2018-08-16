<template>
  <tabbar :fixed="true" v-model="selected">
    <tabbar-item id="home" icon="home" info="首页" :to="{path: '/home'}"></tabbar-item>
    <tabbar-item id="shop" icon="shop" info="商场" :to="{path: '/shop'}"></tabbar-item>
    <tabbar-item id="cart" icon="cart" info="购物车" :to="{path: '/cart'}"></tabbar-item>
    <tabbar-item id="center" icon="user" info="我的" :to="{path: '/user'}"></tabbar-item>
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
