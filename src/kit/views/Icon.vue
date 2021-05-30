<template>
  <component
    :is="icon"
    :class="[
      'icon',
      {
        [`icon-${type}`]: type,
        [`icon-hover_${hover}`]: hover,
        ['icon-disabled']: disabled
      }
    ]"
    v-on="$attrs"
  />
</template>

<script>

import IconFirst from '@/assets/icons/svg/first.svg';
import IconSecond from '@/assets/icons/svg/second.svg';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'KitIcon',
  components: {
    IconFirst,
    IconSecond,
  },
  props: {
    name: { type: String, required: true },
    disabled: { type: Boolean, default: false },
    type: {
      type: String,
      default: '',
      validator: type => ['', 'regular'].includes(type),
    },
    hover: {
      type: String,
      default: '',
      validator: type => ['', 'regular'].includes(type),
    }
  },
  computed: {
    icon() {
      return `icon-${this.name}`;
    }
  }
};
</script>

<style lang="scss" scoped>

.icon {
  display: block;

  &-hover_regular {
    &:hover ::v-deep {
      path, rect {
        fill: $main;
      }
    }
  }

  &-regular ::v-deep {
    path, rect {
      fill: $main;
    }
  }

  &-disabled ::v-deep {
    opacity: .7;
    cursor: default;
    pointer-events: none;
  }
}
</style>
