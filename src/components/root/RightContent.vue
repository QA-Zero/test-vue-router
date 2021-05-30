<template>
  <div class="right-content">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'RightContent',
};
</script>

<style lang="scss" scoped>

.right-content {
  width: 100%;
  flex-grow: 1;
  background-color: #eee;
}
</style>
