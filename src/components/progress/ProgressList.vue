<template>
  <div class="comp-progress-list">
    <Progress v-for="(item, index) in data" :key="`progress${index}`" :name="item.name" :value="item.value"
      :name-width="nameMaxWidth" height="15px" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Progress from './Progress.vue';

const props = defineProps({
  data: {
    type: Array,
    default() {
      return [];
    },
  },
});

const nameMaxWidth = computed(() => {
  const nameLengths = props.data.map(i => i.name.length);
  const maxLength = Math.max(...nameLengths) || 0;
  return `${maxLength * 14}px`;
});
</script>

<style scoped lang="scss">
.comp-progress-list {
  // padding: 15px 0;
}
</style>
