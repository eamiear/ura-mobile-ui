<template>
  <button
    class="ura-button"
    :type="nativeType"
    :class="[`ura-button--${type}`, `ura-button--${size}`, {
      'is-disabled': disabled,
      'is-plain': plain
    }]"
    @click="handleClick"
    :disabled="disabled">
      <span class="ura-button-icon" v-if="icon || $slots.icon">
        <slot name="icon">
          <i v-if="icon" class="uraui" :class="`uraui-${icon}`"></i>
        </slot>
      </span>
      <label class="ura-button-text"><slot></slot></label>
    </button>
</template>

<script>
  export default {
    name: 'ura-button',

    props: {
      icon: String,
      disabled: Boolean,
      nativeType: String,
      plain: Boolean,
      type: {
        type: String,
        default: 'default',
        validator (value) {
          return ['default', 'danger', 'primary'].includes(value)
        }
      },
      size: {
        type: String,
        default: 'normal',
        validator (value) {
          return ['small', 'normal', 'large'].includes(value)
        }
      }
    },
    methods: {
      handleClick (evt) {
        this.$emit('click', evt)
      }
    }
  }
</script>

<style lang="postcss">
  @import "../../../style/var.css"

  @component-namespace ura {
    @component button {
      appearance: none;
      display: block;
      font-size: 18px;
      height: 41px;
      border: 0;
      border-radius: 4px;
      box-sizing: border-box;
      outline: none;
      overflow: hidden;
      color: inherit;
      position: relative;
      text-align: center;

      &::after {
        background-color: $black;
        content: " ";
        opacity: 0;
        position: absolute 0 0 0 0;
      }

      &:not(.is-disabled):active::after{
        opacity: .4;
      }

      @descendant icon {
        display: inline-block;
        vertical-align: middle;
      }

      @modifier default {
        color: $button-default-color;
        background-color: $button-default-background-color;
        box-shadow: $button-default-box-shadow;

        @when plain {
          border: 1px solid $button-default-plain-color;
          background-color: transparent;
          box-shadow: none;
          color: $button-default-plain-color;
        }
      }

      @modifier primary {
        color: $button-primary-color;
        background-color: $button-primary-background-color;

        @when plain {
          border: 1px solid $button-primary-background-color;
          background-color: transparent;
          color: $button-primary-background-color;
        }
      }

      @modifier danger {
        color: $button-danger-color;
        background-color: $button-danger-background-color;

        @when plain {
          border: 1px solid $button-danger-background-color;
          background-color: transparent;
          color: $button-danger-background-color;
        }
      }

      @modifier large {
        display: block;
        width: 100%;
      }

      @modifier normal {
        display: inline-block;
        padding: 0 12px;
      }

      @modifier small {
        display: inline-block;
        font-size: 14px;
        padding: 0 12px;
        height: 33px;
      }

      @when disabled {
        opacity: .5;
      }
    }
  }
</style>
