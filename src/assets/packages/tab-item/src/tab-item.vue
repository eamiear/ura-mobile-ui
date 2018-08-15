<template>
  <div class="ura-tab-item"
    @click="$parent.$emit('input', id)"
    :class="{'is-selected': $parent.value === id}">
      <div class="ura-tab-item-icon">
        <slot name="icon"></slot>
      </div>
      <div class="ura-tab-item-label"><slot></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'ura-tab-item',
    props: ['id']
  }
</script>

<style lang="postcss">
  @import '../../../style/var.css'

  @component-namespace ura {
    @component tab-item {
      display: block;
      padding: 7px 0;
      flex: 1;
      text-decoration: none;

      @descendent icon {
        size: 24px;
        margin: 0 auto 5px;

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
