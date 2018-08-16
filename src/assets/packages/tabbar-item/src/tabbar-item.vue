<template>
  <div class="ura-tabbar-item"
    @click="onClick"
    :class="{'is-selected': $parent.value === id}">
      <div class="ura-tabbar-item__icon" :class="{'ura-tabbar-item__icon--dot': dot}">
        <slot name="icon">
          <ura-icon v-if="icon" :name="icon"></ura-icon>
        </slot>
        <div class="ura-tabbar-item__info">{{info}}</div>
      </div>
      <div class="ura-tabbar-item__label"><slot></slot></div>
  </div>
</template>

<script>
  import RouterLink from '../../mixins/router-link'
  import UraIcon from '../../icon'
  export default {
    name: 'ura-tab-item',
    mixins: [RouterLink],
    props: {
      id: [String, Number],
      icon: String,
      dot: Boolean,
      info: [String, Number]
    },
    components: {UraIcon},
    methods: {
      onClick (evt) {
        this.$parent.$emit('input', this.id)
        this.routerLink()
      }
    }
  }
</script>

<style lang="postcss">
  @import '../../../style/var.css';

  @component-namespace ura {
    @component tabbar-item {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      padding: 7px 0;
      flex: 1;
      text-decoration: none;

      @descendent icon {
        /* size: 18px; */
        margin: 0 auto 5px;
        position: relative;


        @modifier dot {
          &::after {
            position: absolute;
            top: 0;
            right: -8px;
            width: 8px;
            height: 8px;
            content: ' ';
            border-radius: 100%;
            background-color: $red;
          }
        }
        img {
          height: 18px;
        }
        &:empty {
          display: none;
        }

        & > * {
          display: block;
          size: 100%;
        }
      }

      @descendent label {
        color: inherit;
        font-size: $tab-item-font-size;
        line-height: 1;
      }
    }
  }
</style>
