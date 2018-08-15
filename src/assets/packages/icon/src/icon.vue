<template>
  <i
    :class="`ura-icon ura-icon-${name}`"
    :style="{color, size}"
    v-on="$listeners">
    <slot></slot>
    <div v-if="info" :class="ura-icon-info">{{info}}</div>
  </i>
</template>

<script>
  export default {
    name: 'ura-icon',
    props: {
      name: String,
      color: String,
      size: String,
      info: [String, Number]
    }
  }
</script>

<style lang="postcss">
@import '../../../style/var.css'

@font-face {
  font-family: "ura-icon";
  src: url('../../../font/iconfont.ttf?t=1464927413')
}

@component-namespace ura {
  @component icon {
    font-family:"ura-icon" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;

    &::before {
      display: inline-block;
    }

    @descendent info {
      color: $white;
      position: absolute;
      left: 100%;
      top: -7px;
      font-size: 7px;
      padding: 0 5px;
      text-align: center;
      min-width: 24px;
      line-height: 1.2;
      border-radius: 8px;
      box-sizing: border-box;
      background-color: $red;
      transform: translateX(-50%);

    }
  }
}

.ura-icon-search:before { content: "\e604"; }
.ura-icon-more:before { content: "\e601"; }
.ura-icon-back:before { content: "\e600"; }
.ura-icon-field-error:before { content: "\e605"; }
.ura-icon-field-warning:before { content: "\e608"; }
.ura-icon-success:before { content: "\e602"; }
.ura-icon-field-success:before { content: "\e609"; }
</style>
