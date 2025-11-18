<template>
  <BlockWrapper id="work" title="工作经历" theme="dark">
    <div v-for="(work, wIndex) in works" :key="`work-exp${wIndex}`" class="work-exp">
      <p class="work-exp__company">
        {{ work.company }}
      </p>
      <p class="font-bold">
        {{ work.date }}
      </p>
      <p>工作内容：{{ work.duty }}</p>
    </div>
  </BlockWrapper>
</template>

<script setup>
import { ref } from 'vue';
import { BlockWrapper } from '@/components';

const works = ref([
  {
    company: '成都中科知用信息技术有限公司 前端主程',
    date: '2023.06 - 至今',
    duty: '负责企业级智能体平台、智慧校园低代码平台前端研发与架构治理；沉淀组件库与工程规范；工作流/SQL 工具、知识库与 RAGFlow 集成；i18n/Sentry/单测与性能优化。',
  },
  {
    company: '长城汽车集团北京 IDC 前端开发工程师',
    date: '2020.06 - 2023.04',
    duty: '长城汽车集团 IDC 项目管理平台前端开发；基于 dhtmlx-gantt 实现拖拽编辑、关键路径与里程碑；PBC 组件适配跨部门差异；Vuex 状态管理与交互性能优化。',
  },
  {
    company: '成都云扬科技有限公司 前端工程师',
    date: '2019 - 2022.08',
    duty: '密云教育云平台（多端）：uni-app/uView/Tailwind 跨端适配与组件复用；云智工厂-数字化平台（采购模块）：React/Ant Design，模块化集成与状态治理。',
  },
]);
</script>

<style lang="scss" scoped>
@use "@/styles/common.scss" as *;

.work-exp {
  &__company {
    font-size: 16px;
    font-weight: bold;
    color: $deep-blue;

  }
}
</style>
