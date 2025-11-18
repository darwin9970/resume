<template>
  <div class="c--flex" :style="style" :class="{ pointer: pointer }">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  justify: {
    type: String,
    default: 'start',
  },
  wrap: {
    type: String,
    default: 'nowrap',
  },
  align: {
    type: String,
    default: 'start',
  },
  paddingY: {
    type: String,
    default: '',
  },
  paddingX: {
    type: String,
    default: '',
  },
  direction: {
    type: String,
    default: 'flex-start',
  },
  pointer: {
    type: Boolean,
    default: false,
  },
  inline: {
    type: Boolean,
    default: false,
  },
});

const style = computed(() => ({
  display: props.inline ? 'inline-flex' : 'flex',
  'justify-content': props.justify,
  'flex-wrap': props.wrap,
  'flex-direction': props.direction,
  'align-items': props.align,
  paddingTop: props.paddingY ? props.paddingY : 0,
  paddingBottom: props.paddingY ? props.paddingY : 0,
  paddingLeft: props.paddingX ? props.paddingX : 0,
  paddingRight: props.paddingX ? props.paddingX : 0,
}));
</script>

<style scoped lang="scss">
.c--flex {
  width: 100%;
  box-sizing: border-box;

  &.pointer {
    cursor: pointer;
  }
}
</style>
