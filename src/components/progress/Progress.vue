<template>
  <div class="comp-progress">
    <span class="comp-progress-name" :style="nameStyle">
      {{ name }}
    </span>
    <div class="comp-progress-bar" :style="wrapperStyle">
      <div class="comp-progress-bar__inner" :style="innerStyle" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    default: '',
    required: true,
  },
  nameWidth: {
    type: String,
    default: 'auto',
  },
  value: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  height: {
    type: String,
    default: '20px',
  },
});

const progressLength = computed(() => {
  return `${((props.value / props.max) * 100).toFixed(2)}%`;
});

const nameStyle = computed(() => ({
  width: props.nameWidth,
}));

const wrapperStyle = computed(() => ({
  height: props.height,
}));

const innerStyle = computed(() => ({
  width: progressLength.value,
  height: props.height,
}));
</script>

<style lang="scss" scoped>
@use "@/styles/common.scss" as *;

.comp-progress {
  // display: flex;
  // align-items: center;
  margin-top: 2px;
  text-align: left;
  margin-bottom: 10px;
  font-size: 16px;

  &-name {
    padding-left: 5px;
    margin-right: 10px;
    text-align: right;
  }

  &-bar {
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    background: rgba($color: $deep-blue, $alpha: 0.2);

    &__inner {
      background: $deep-blue;
    }
  }

  @media screen and (max-width: 1049px) {
    display: block;

  }
}
</style>
