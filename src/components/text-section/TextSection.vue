<template>
  <div class="comp-text-section">
    <div class="comp-text-section__title" :style="titleStyle">
      <slot name="title">
        <h1>
          {{ title }}
        </h1>
      </slot>
    </div>
    <div class="comp-text-section__content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { DEFAULT_COLOR } from '@/common/constants';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  titleColor: {
    type: String,
    default: DEFAULT_COLOR,
  },
});

const titleStyle = computed(() => ({
  color: props.titleColor,
}));
</script>

<style lang="scss">
@use '@/styles/common.scss' as *;

.comp-text-section {
  margin: 5px 0;
  text-align: left;

  &__title {
    h1 {
      margin: 10px 0;
      font-size: 25px;
    }
  }

  &__content {
    color: $text-color;
  }

}
</style>
