<template>
  <div class="resume-aside">
    <div class="resume-aside-top">
      <img
        class="avatar"
        src="@/assets/avatar.jpg"
      >
      <div class="personal-desc">
        <p class="name">
          向习文
        </p>
        <p class="position">
          前端开发工程师
        </p>
        <p>男 / 1996.08</p>
        <span
          class="work-year"
        >
          6年工作经验
        </span>
      </div>
      <icon-list
        :list="contacts"
        class="icon-list"
      />
      
      <block-wrapper
        id="edu"
        title="教育背景"
        class="font-bold"
        theme="dark"
      >
        <div class="text-center">
          <p>怀化学院</p>
          <!-- <p>2021.9 - 2024.6</p> -->
          <p>计算机应用技术 - 大专</p>
        </div>
      </block-wrapper>
      <block-wrapper
        id="skill"
        theme="dark"
        title="技能水平"
        class="skill-level"
      >
        <ul>
          <li
            v-for="(skill, skillIndex) in skills"
            :key="`skill${skillIndex}`"
            v-html="skill"
          />
        </ul>
      </block-wrapper>
      <block-wrapper
        id="evalution"
        title="个人评价"
        theme="dark"
      >
        <ul>
          <li
            v-for="(comment, commentIndex) in comments"
            :key="`comment${commentIndex}`"
            v-html="comment"
          />
        </ul>
      </block-wrapper>
    </div>


    <div class="resume-aside-bottom" />
  </div>
</template>

<script>
import {
  IconLineList, BlockWrapper,
} from '@/components';

export default {
  name: 'Aside',
  components: {
    'icon-list': IconLineList,
    'block-wrapper': BlockWrapper,
  },
  data() {
    return {
      skills: [
        '框架与工程化：Vue2/Vue3/React/Next.js、Vite/Webpack、SSR 与按需加载',
        '组件化与规范：沉淀30+组件，Storybook 文档化，TypeScript 全覆盖',
        '复杂交互：dhtmlx-gantt、React DnD、SpreadJS、React Flow、Monaco',
        '状态与数据：Vuex/Pinia/Zustand + Axios/TanStack Query，服务层与缓存',
        '可观测与质量：Jest 单测、Sentry 监控、i18n 治理、类型约束',
        '性能优化：代码分割、虚拟滚动、节流/去抖，核心页面性能提升30%+',
        '低代码与平台化：表单引擎、流程编排、SQL 构建器、数据源管理',
        '可视化：ECharts、驾驶舱/大屏、地图与关系图谱',
      ],
      comments: [
        '注重工程规范与可维护性，在复杂业务中快速落地方案',
        '沟通顺畅，需求澄清与跨端协作经验丰富，结果导向',
        '自驱学习，乐于沉淀可复用能力与团队最佳实践',
      ],
      contacts: [
        {
          icon: 'emailalt',
          text: 'darwin0821@gmail.com',
          linkType: 'mailto',
        },
        {
          icon: 'phone',
          text: '18161580241',
          linkType: 'tel',
        },
      ],

    };
  },
};
</script>

<style lang="scss" scoped>
$bg: #f7f8fa;
@use "@/styles/common.scss" as *;

ul {
  padding-left: 20px;
  li {
    margin-bottom: 5px;
  }
}
.resume-aside {
  position: relative;
  flex: 3;
  display: flex;
  flex-direction: column;
  color: $deep-blue;
  padding: 40px;
  box-sizing: border-box;
  text-align: center;
  background-color: $bg;
  .online-link {
    margin-bottom: 10px;
    h3 {
      margin: 5px 0;
    }

  }
  .icon-list {
    margin-left: 30px;
  }
  .work-year {
    padding: 0 10px;
    display: inline-block;
    background: #E3E6EE;
    color: #333;
    font-size: 15px;
    font-weight: bold;
    border-radius: 10px;
  }
  &-top {
    .avatar {
      width: 120px;
      height: 120px;
      background-color: rgba($color: #6accfa, $alpha: 0.5);
      border-radius: 50%;
      overflow: hidden;
    }
    .personal-desc {
      margin-bottom: 10px;
      .name {
        font-size: 33px;
      }
      .position {
        font-size: 18px;
      }
    }
  }
  #blog {
    text-align: center;
    .blog-link {
      font-size: 16px;
      font-weight: bold;
    }
  }

  @media screen and (max-width: 1049px) {
    padding-top: 80px;
    .online-link {
      display: none;
    }
    .icon-list {
      margin-left: calc((100% - 240px) / 2);
    }
  }
}
</style>


