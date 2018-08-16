<template lang="html">
  <header class="ura-header" :class="{'is-fixed': fixed}">
    <div class="ura-header__button is-left">
      <slot name="left"></slot>
    </div>
    <h1 class="ura-header__title" v-text="title"></h1>
    <div class="ura-header__button is-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'ura-header',
  props: {
    fixed: Boolean,
    title: String
  }
}
</script>

<style lang="postcss">
@import '../../../style/var.css';

@component-namespace ura {
  @component header {
    display: flex;
    align-items: center;
    position: relative;

    font-size: 14px;
    color: $color-white;
    background-color: $color-blue;
    text-align: center;
    padding: 0 10px;
    height: $header-height;
    line-height: 1;
    white-space: nowrap;

    .ura-button {
      background: transparent;
      border: 0;
      box-shadow: none;
      color: inherit;
      display: inline-block;
      padding: 0;
      font-size: inherit;

      &::after{
        content:none;
      }
    }

    @descendent button {
      flex: .5;

      > a {
        color: inherit;
      }

      @when left {
        text-align: left;
      }

      @when right {
        text-align: right;
      }
    }

    @descendent title {
      flex: 1;
      font-size: inherit;
      font-weight: normal;
      @utils-ellipsis;
    }

    @when fixed{
      position: fixed 0 0 * 0;
      z-index: $z-index-normal;
    }
  }
}
</style>
