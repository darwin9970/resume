<template>
  <div class="resume-content">
    <Work />
    <Project />
  </div>
</template>

<script setup>
import Project from './project';
import Work from './work';
</script>

<style lang="scss" scoped>
.resume-content {
  flex-shrink: 0;
  flex: 6;
  padding: 35px 30px 20px 30px;
  box-sizing: border-box;
  background: #fff;

  @media screen and (max-width: 1049px) {
    padding-bottom: 150px;
  }
}
</style>
