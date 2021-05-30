<template>
  <div class="first-rout-wrapper">
    <div class="title">
      <div>First rout - main</div>
      <div
        class="rout"
        @click="isFirstSubRout = true"
      >Go to "First rout - First subrout"</div>
      <div
        class="rout"
        @click="isFirstSubRout = false"
      >Go to "First rout - Second subrout"</div>
    </div>
    <div class="content">
      <first-sub-rout v-if="isFirstSubRout"/>
      <second-sub-rout v-else />
    </div>
  </div>
</template>

<script>
import FirstSubRout from './FirstSubRout.vue';
import SecondSubRout from './SecondSubRout.vue';

export default {
  name: 'FirstRoutMain',
  components: {
    FirstSubRout,
    SecondSubRout,
  },
  data() {
    return {
      isFirstSubRout: true,
    };
  },
};
</script>

<style lang="scss" scoped>

.first-rout-wrapper {
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
    flex-grow: 1;
    display: flex;
    background-color: #c9c;
  }
}
</style>
