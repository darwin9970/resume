<template>
  <BlockWrapper id="project" title="项目经验" theme="dark">
    <template v-for="(project, pIndex) in projects" :key="`project-wrap-${pIndex}`">
      <BlockWrapper v-if="project.secondPage" id="second-page-title" title="项目经验" theme="dark">
        <p class="project-company seconde-page-company">
          {{ project.company }}
        </p>
      </BlockWrapper>
      <p v-if="project.company && !project.secondPage" class="project-company">
        {{ project.company }}
      </p>
      <TextSection :title="project.title">
        <template #title>
          <Flex justify="space-between" align="center" wrap="wrap">
            <div class="project-header">
              <h1 class="project-title">
                {{ project.title }}
              </h1>
              <span v-if="project.time" class="project-time">
                {{ project.time.start }} - {{ project.time.end }}
              </span>
            </div>
            <div v-if="project.tags && project.tags.length > 0" class="project-tag-wrapper">
              <div v-for="(tag, tagIndex) in project.tags" :key="`${pIndex}-tag${tagIndex}`" class="project-tag">
                {{ tag }}
              </div>
            </div>
          </Flex>
        </template>
        <p>
          <span class="title">
            主要技术栈:
          </span>
          <template v-for="(tech, techIndex) in project.techs" :key="`${pIndex}-tech-${techIndex}`">
            <em>
              {{ tech }}
            </em>
            {{ !isLastOf(project.techs, techIndex) ? "、" : "" }}
          </template>
        </p>
        <p>
          <span class="title">
            项目描述:
          </span>
          <template v-for="(feature, fIndex) in project.features" :key="`${fIndex}-feature${fIndex}`">
            <span>
              <span v-html="feature" />
              {{ !isLastOf(project.features, fIndex) ? "；" : "" }}
            </span>
          </template>
        </p>

        <p class="title" v-if="project.impacts && project.impacts.length">
          解决的痛点/成效:
        </p>
        <ul v-if="project.impacts && project.impacts.length">
          <li v-for="(impact, iIndex) in project.impacts" :key="`${pIndex}-impact-${iIndex}`" v-html="impact" />
        </ul>

        <p class="title">
          项目职责: <strong :style="{ color: '#666' }">
            {{ project.role }}
          </strong>
        </p>
        <ul>
          <li v-for="(duty, dIndex) in project.dutys" :key="`${pIndex}-row-${dIndex}`" v-html="duty" />
        </ul>
      </TextSection>
      <Flex v-if="pIndex === 2" class="more" justify="center" direction="column" align="center">
        <span class="more-text">
          More
        </span>
        <i class="iconfont icon-arrow-down more-icon" />
      </Flex>
    </template>
  </BlockWrapper>
</template>

<script setup>
import { ref } from 'vue';
import { BlockWrapper, TextSection, Flex } from '@/components';

const projects = ref([
  {
    company: '成都中科知用信息技术有限公司 - 项目',
    title: '基于 Dify 的企业级智能体平台',
    role: '前端主程',
    time: { start: '2023.06', end: '至今' },
    techs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'TanStack Query', 'React Flow', 'Monaco', 'i18next', 'Storybook', 'Jest', 'Sentry', 'Docker'],
    features: [
      '基于 Dify 二开与本地化平台化改造，保持能力/协议兼容',
      '新增工作流 SQL 查询工具与全局数据库交互；沉淀公共组件库',
      '知识库文档切片干预与 RAGFlow 集成，多智能体工作流与嵌入式 Chatbot',
    ],
    impacts: [
      '已为 3 家企业落地多智能体与工作流方案，缩短方案交付周期与实施成本约60%',
      '企业跨库数据查询与联动困难：通过“SQL 查询工具 + 全局数据库交互”降低接入门槛与维护成本',
      '知识库检索质量参差：切片干预与 RAGFlow 重排提升召回与回答准确度约 20%',
      '建立组件库与主题体系，显著提升 UI/交互一致性与复用效率约 30%',
      '引入 Sentry/单测/i18n 治理，降低线上风险、提高迭代质量约 20%',
    ],
    dutys: [
      '主导架构演进（App Router 分域、服务层/状态、SSR/按需）与规范落地',
      '建设 @zy-ui/core 组件库与主题体系（38+），Storybook 与单测接入',
      '实现“业务数据库 SQL 查询工具”节点与库表元数据浏览/权限控制',
      'i18n 治理、Sentry 埋点与核心流程单测，保障可维护性与可观测',
    ],
    tags: ['智能体平台', '工作流', 'RAG']
  },
  {
    title: '智慧校园低代码平台',
    role: '核心开发人员',
    time: { start: '2023.06', end: '至今（阶段性维护）' },
    techs: ['React', 'TypeScript', 'UmiJS 3.x', 'Ant Design Pro', 'Dva', 'React DnD', 'GrapeCity SpreadJS', 'GG-Editor', 'Monaco', 'ECharts', 'React Grid Layout'],
    features: [
      '自研低代码引擎：可视化表单/流程、组件拖拽、公式/SQL 构建、数据可视化',
      '大数据中心、数据源/元数据管理、多租户定制化与部署',
    ],
    impacts: [
      '以可视化与配置化能力提升交付效率（配置化开发效率提升约 85%）',
      '统一数据源与元数据治理，降低多数据库接入与维护复杂度',
      '平台化沉淀覆盖多校场景，支持 10+ 校上线，覆盖校内管理人员日常使用',
    ],
    dutys: [
      '基于 React DnD 实现可视化表单设计器与多布局切换',
      '封装 30+ 业务组件并制定配置化标准，TS Interface 约束属性',
      'Monaco 实现公式/SQL 编辑器与语法提示校验，SpreadJS 类 Excel 表单',
      'GG-Editor 流程编排器与运行监控，React Grid Layout 个性化首页',
      '优化构建与首屏（≈40%），多数据库接入与类型管理',
    ],
    tags: ['低代码', '教育SaaS']
  },
  {
    company: '长城汽车集团北京 IDC - 项目',
    title: '长城汽车集团业务共享部门项目管理平台',
    role: '前端开发',
    time: { start: '2022.10', end: '2023.04' },
    techs: ['Vue2', 'Ant Design Vue 1.x', 'dhtmlx-gantt', 'Vuex', 'Axios'],
    features: [
      '集团级项目管理平台：大视图、项目详情、计划任务、里程碑与关键路径',
      '跨部门字段/流程差异通过 PBC 组件与配置化规则统一',
    ],
    impacts: [
      '跨部门数据口径统一，降低协作与沟通成本',
      '甘特图交互卡顿与保存不稳定问题显著改善（虚拟滚动/节流/差量持久化）',
      '补齐关键路径与里程碑可视化链路，提升计划透明度与管理效率',
    ],
    dutys: [
      '基于 dhtmlx-gantt 实现拖拽编辑、关键路径展示与差量持久化保存',
      '设计 PBC 组件适配不同部门规则，统一表单与流程',
      '完善里程碑图渲染与大视图集成，优化 Vuex 状态与接口封装',
    ],
    tags: ['项目管理', '甘特图']
  },
  {
    company: '成都云扬科技有限公司 - 项目',
    title: '密云教育云平台',
    role: '前端工程师',
    time: { start: '2020', end: '2022（阶段性维护）' },
    techs: ['uni-app', 'Vue', 'uView', 'Tailwind CSS'],
    features: [
      '教育云平台多端（小程序/APP/Web）活动、任务、投票、问卷、讲座等模块',
      '统一体验与数据联动，公共组件提炼与跨端适配',
    ],
    impacts: [
      '提升跨端一致性与导航流畅度，减少多端维护差异',
      '优化代码结构与组件复用，缩短交付周期并提升页面响应速度',
      '信息架构与交互优化，使师生家长获取信息更直接高效',
      '前后端协同优化数据链路，确保信息实时更新',
    ],
    dutys: [
      '多端模块页面与接口对接，保障一致性与性能',
      '组件复用策略与 rpx/upx 适配，提升扩展性与交付效率',
      '路由流转优化（uni.navigateTo/redirectTo）与样式兼容（Tailwind）',
    ],
    tags: ['教育平台', '多端']
  },
  {
    title: '云智工厂-数字化平台（采购模块）',
    role: '前端工程师',
    time: { start: '2020', end: '2021' },
    techs: ['React', 'Axios', 'YTH-UI', '@ice/stark-module', 'Valtio', 'Ant Design', 'Ant Design Mobile'],
    features: [
      '企业采购业务数字化：工单/采购/流程线上化与移动端适配',
      '内部 UI 与流程组件复用，模块化集成与状态治理',
    ],
    impacts: [
      '端到端流程打通，缩短从下单到交付时效，异常节点可追踪',
      '减少人工登记与跨系统切换，降低错误率与沟通成本',
    ],
    dutys: [
      '采购模块开发与接口对接，确保数据准确与响应性能',
      '基于 @ice/stark-module 与 Valtio 进行模块集成与状态管理',
      'PC/移动端界面适配与交互优化（AntD/AntD Mobile）',
    ],
    tags: ['企业数字化', '采购']
  },
]);

const isLastOf = (list, index) => {
  const { length } = list;
  return index === length - 1;
};
</script>

<style lang="scss" scoped>
@use "@/styles/common.scss" as *;

ul {
  margin: 0;
  padding-left: 5px;
  text-align: left;
}

ul li {
  list-style: none;
  line-height: 1.8;

  &:before {
    content: "●"; // '\\25CF'
    margin-right: 5px;
    color: $deep-blue;
    display: inline-block;
  }
}

#second-page-title {
  display: none;
}

.more {
  color: $deep-blue;

  &-text,
  &-icon {
    display: none;
    font-weight: bold;
    font-size: 18px;
  }
}

.title {
  color: $deep-blue;
  font-weight: bold;
}

.project-company {
  text-align: center;
  color: #333;
  font-weight: bold;
}

.project-header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;

  .project-title {
    margin-right: 10px;
  }

  .project-time {
    font-size: 16px;
    color: #666;
    font-weight: bold;
  }
}

.project-tag-wrapper {
  display: flex;
  flex-shrink: 0;

  .project-tag {
    margin: 10px 5px;
    background: #cfffd9;
    color: $deep-blue;
    padding: 0 15px;
    line-height: 2;
    border-radius: 15px;
    font-weight: bold;

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
