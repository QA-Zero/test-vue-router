<template>
  <el-menu
    :default-active="defIndex"
    background-color="transparent"
    class="left-menu"
    router
    @select="selectItem"
  >
    <el-menu-item index="/first-path">
      <kit-icon
        name="first"
        class="left_menu-icon"
      />
      <span class="title">First rout</span>
    </el-menu-item>

    <el-menu-item index="/second-path">
      <kit-icon
        name="second"
        class="left_menu-icon"
      />
      <span class="title">Second rout</span>
    </el-menu-item>

    <el-menu-item>
      <kit-icon
        name="second"
        class="left_menu-icon"
      />
      <span class="title">Exit</span>
    </el-menu-item>
  </el-menu>
</template>

<script>

export default {
  name: 'LeftPanel',
  computed: {
    defIndex() {
      return '/' + this.$route.path.split('/')[1];
    }
  },
  methods: {
    selectItem(menuItemId) {
      if (!menuItemId) console.log( 'Exit' );
    },
  }
};
</script>

<style lang="scss">
.left_menu-icon {
  float: left;
  margin-right: 10px;
}

.left-menu {
  .el-menu-item {
    display: flex;
    align-items: center;

    &.is-active {
      .left_menu-icon {
        path {
          fill: $main;
        }
        g {
          path {
            fill: $main;
          }
        }
      }
    }

    .title {
      user-select: none;
    }
  }
}
</style>

<style lang="scss" scoped>

.left-panel {
  width: 200px;
  height: 100%;
  background-color: #bbb;
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
}
</style>
