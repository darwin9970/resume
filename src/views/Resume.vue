<template>
  <div id="base" class="resume-page">
    <div id="pdf" class="resume-page__center">
      <Aside />
      <Content />
    </div>
    <FixButton />
    <PDFButton />
  </div>
</template>

<script setup>
import Aside from '@/views/aside';
import Content from '@/views/content';
import { FixButton, PDFButton } from '@/components';
</script>

<style lang="scss" scoped>
@use '@/styles/common.scss' as *;

.resume-page {
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  width: 1050px;
  height: 100%;
  background: #fff;
  box-shadow: 0 0 15px #c0c0c0;
  min-height: 1485.0755px;

  &__center {
    flex: 1;
    display: flex;
  }

  @media screen and (max-width: 1049px) {
    margin: 0;
    width: 100%;

    &__center {
      display: block;
    }
  }
}
</style>
