<template>
  <div class="comp-icon-line-list">
    <IconLine v-for="(item, index) in list" :key="`icon-line${index}`" :text="item.text" :icon="item.icon"
      :color="color" :link-type="item.linkType" />
  </div>
</template>

<script setup>
import IconLine from './IconLine.vue';
import { DEFAULT_COLOR } from '@/common/constants';

defineProps({
  color: {
    type: String,
    default: DEFAULT_COLOR,
  },
  list: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>

<style></style>
