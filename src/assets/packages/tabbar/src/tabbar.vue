<template>
  <div class="ura-tabbar" :class="{
    'is-fixed': fixed
  }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ura-tabbar',

    props: {
      fixed: Boolean,
      value: {}
    }
  }
</script>

<style lang="postcss">
@import "../../../style/var.css";

@component-namespace ura {
  @component tabbar {
    display: flex;
    position: absolute * 0 0 0;
    background-image: linear-gradient(100deg, $color-grey, $color-grey 50%, $color-grey 50%);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: top left;
    background-color: $tabbar-background-color;
    text-align: center;

    @when fixed {
      position: fixed * 0 0 0;
      z-index: $z-index-normal;
    }

    > .ura-tabbar-item.is-selected {
      background-color: $tabbar-tab-item-selected-background-color;
      color: $tabbar-tab-item-selected-color;
    }
  }
}
</style>
