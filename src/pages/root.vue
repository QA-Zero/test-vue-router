<template>
  <div class="app-wrapper">
    <top-panel />
    <div class="bottom-content">
      <left-panel />
      <right-content />
    </div>
  </div>
</template>

<script>
import TopPanel from '@/components/root/TopPanel.vue';
import LeftPanel from '@/components/root/LeftPanel.vue';
import RightContent from '@/components/root/RightContent.vue';

export default {
  name: 'Root',
  components: {
    TopPanel,
    LeftPanel,
    RightContent,
  },
};
</script>

<style lang="scss" scoped>

.app-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .bottom-content {
    flex-grow: 1;
    display: flex;
  }
}
</style>