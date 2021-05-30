<template>
  <div class="second-subrout-wrapper">
    <div class="title">
      <div>Second rout - main</div>
      <router-link
        class="rout"
        to="/second-path/first-sub-path"
      >Go to "Second rout - First subrout"</router-link>
      <router-link
        class="rout"
        to="/second-path/second-sub-path"
      >Go to "Second rout - Second subrout"</router-link>
    </div>
    <div class="content">Second rout - Second subrout</div>
  </div>
</template>

<script>
export default {
  name: 'SecondSecond',
};
</script>

<style lang="scss" scoped>

.second-subrout-wrapper {
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;

  .title {
    width: 100%;
    height: 120px;
    background-color: #c0c;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    .rout {
      margin-top: 15px;
      color: #fff;
      cursor: pointer;
    }
  }

  .content {
    width: 100%;
    background-color: #c9c;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
}
</style>
