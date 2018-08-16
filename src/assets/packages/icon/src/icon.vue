<template>
  <i
    :class="`ura-icon ura-icon-${name}`"
    :style="{color, size}"
    v-on="$listeners">
    <slot></slot>
    <div v-if="info" :class="ura-icon__info">{{info}}</div>
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
@import "../../../style/var.css";

@font-face {
  font-family: "ura-icon";
  src: url('../../../font/iconfont.ttf?t=1534407650197') format('truetype');
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
/* .ura-icon-search:before { content: "\e604"; }
.ura-icon-more:before { content: "\e601"; }
.ura-icon-back:before { content: "\e600"; }
.ura-icon-field-error:before { content: "\e605"; }
.ura-icon-field-warning:before { content: "\e608"; }
.ura-icon-success:before { content: "\e602"; }
.ura-icon-field-success:before { content: "\e609"; } */


.ura-icon-delete:before { content: "\e6b4"; }
.ura-icon-coupon:before { content: "\e640"; }
.ura-icon-more:before { content: "\f0170"; }
.ura-icon-camera:before { content: "\e615"; }
.ura-icon-cart:before { content: "\e619"; }
.ura-icon-search:before { content: "\e65a"; }
.ura-icon-success:before { content: "\e6d0"; }
.ura-icon-morevert:before { content: "\e60b"; }
.ura-icon-phone:before { content: "\e63d"; }
.ura-icon-close:before { content: "\e64a"; }
.ura-icon-error:before { content: "\e67a"; }
.ura-icon-gift:before { content: "\e61a"; }
.ura-icon-iconfontzhizuobiaozhun023113:before { content: "\e673"; }
.ura-icon-warning:before { content: "\e63b"; }
.ura-icon-share:before { content: "\e63e"; }
.ura-icon-success-o:before { content: "\e616"; }
.ura-icon-back:before { content: "\e625"; }
.ura-icon-photo:before { content: "\e612"; }
.ura-icon-shop:before { content: "\e635"; }
.ura-icon-home:before { content: "\e6a2"; }
.ura-icon-add-o:before { content: "\e762"; }
.ura-icon-location:before { content: "\e726"; }
.ura-icon-check-circle:before { content: "\e77d"; }
.ura-icon-plus-circle:before { content: "\e781"; }
.ura-icon-eye:before { content: "\e78f"; }
.ura-icon-user:before { content: "\e7ae"; }
.ura-icon-heart:before { content: "\e7df"; }
.ura-icon-chat:before { content: "\e70f"; }
.ura-icon-close1:before { content: "\e711"; }
.ura-icon-contact:before { content: "\e712"; }
.ura-icon-discount:before { content: "\e714"; }
.ura-icon-gold-coin:before { content: "\e719"; }
.ura-icon-logistics:before { content: "\e71e"; }
.ura-icon-hot-sale:before { content: "\e71b"; }
.ura-icon-new-arrival:before { content: "\e71f"; }
.ura-icon-password-not-view:before { content: "\e723"; }
.ura-icon-pending-orders:before { content: "\e724"; }
.ura-icon-password-view:before { content: "\e725"; }
.ura-icon-pending-evaluate:before { content: "\e727"; }
.ura-icon-points:before { content: "\e728"; }
.ura-icon-question:before { content: "\e72a"; }
</style>
