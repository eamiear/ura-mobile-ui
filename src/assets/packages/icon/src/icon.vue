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

.ura-icon-delete:before { content: "\e6b4"; }
.ura-icon-coupon:before { content: "\e640"; }
.ura-icon-camera:before { content: "\e615"; }
.ura-icon-cart:before { content: "\e619"; }
.ura-icon-search:before { content: "\e65a"; }
.ura-icon-warning-o:before { content: "\e835"; }
.ura-icon-edit:before { content: "\e60b"; }
.ura-icon-gift:before { content: "\e61a"; }
.ura-icon-arrow-right:before { content: "\e622"; }
.ura-icon-arrow-left:before { content: "\e693"; }
.ura-icon-share:before { content: "\e63d"; }
.ura-icon-back:before { content: "\e625"; }
.ura-icon-photo:before { content: "\e612"; }
.ura-icon-shop:before { content: "\e635"; }
.ura-icon-home:before { content: "\e6a2"; }
.ura-icon-deliver:before { content: "\e884"; }
.ura-icon-qujian:before { content: "\e885"; }
.ura-icon-goods:before { content: "\e889"; }
.ura-icon-coupon-light:before { content: "\e898"; }
.ura-icon-line:before { content: "\e8a9"; }
.ura-icon-choose:before { content: "\e8b7"; }
.ura-icon-phone-o:before { content: "\e8bc"; }
.ura-icon-phone:before { content: "\e8bd"; }
.ura-icon-microphone:before { content: "\e8c2"; }
.ura-icon-more:before { content: "\e8c4"; }
.ura-icon-more-vert:before { content: "\e8c5"; }
.ura-icon-sound-wave:before { content: "\e8c6"; }
.ura-icon-head-portrait:before { content: "\e8c9"; }
.ura-icon-lock:before { content: "\e8d4"; }
.ura-icon-unlock:before { content: "\e8d5"; }
.ura-icon-haoping-o:before { content: "\e8d8"; }
.ura-icon-chaping-o:before { content: "\e8d9"; }
.ura-icon-chaping:before { content: "\e8da"; }
.ura-icon-haoping:before { content: "\e8db"; }
.ura-icon-plus-o:before { content: "\e8df"; }
.ura-icon-plus:before { content: "\e8e1"; }
.ura-icon-success-o:before { content: "\e8e3"; }
.ura-icon-success:before { content: "\e8e5"; }
.ura-icon-error-o:before { content: "\e8e7"; }
.ura-icon-error:before { content: "\e8e8"; }
.ura-icon-news-o:before { content: "\e8e9"; }
.ura-icon-location:before { content: "\e900"; }
.ura-icon-webcam:before { content: "\e901"; }
.ura-icon-user-data:before { content: "\e91c"; }
.ura-icon-skin-theme:before { content: "\e91e"; }
.ura-icon-bank-card:before { content: "\e936"; }
.ura-icon-hongbao:before { content: "\e937"; }
.ura-icon-location:before { content: "\e726"; }
.ura-icon-user:before { content: "\e7ae"; }
.ura-icon-heart:before { content: "\e7df"; }
.ura-icon-scan:before { content: "\e63e"; }
.ura-icon-chat:before { content: "\e70f"; }
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
