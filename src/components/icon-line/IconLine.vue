<template>
  <div class="comp-icon-line" :style="style">
    <i :class="iconClass" />
    <span class="text">
      <a :href="linkHref">
        {{ text }}
      </a>
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { DEFAULT_COLOR } from '@/common/constants';

const props = defineProps({
  icon: {
    type: String,
    default: '',
    required: true,
  },
  text: {
    type: String,
    default: '',
    required: true,
  },
  color: {
    type: String,
    default: DEFAULT_COLOR,
  },
  linkType: String,
});

const iconClass = computed(() => `iconfont icon-${props.icon}`);

const style = computed(() => ({
  color: props.color,
}));

const linkHref = computed(() => {
  return props.linkType ? `${props.linkType}:${props.text}` : props.text;
});
</script>

<style scoped lang="scss">
.comp-icon-line {
  display: flex;
  align-items: center;
  font-size: 16px;

  .iconfont {
    font-size: 20px;
  }

  .text {
    margin-left: 10px;

    &:hover {
      a {
        opacity: .7;
      }
    }
  }

}
</style>
