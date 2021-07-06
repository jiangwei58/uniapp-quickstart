<template>
  <view class="tob-checkbox-group" :class="[spaceWidth ? 'custom' : 'auto']" :style="{ marginLeft: spaceWidth ? `-${spaceWidth}` : 0 }">
    <view
      class="tob-checkbox"
      v-for="(item, index) in newOptions"
      :key="index"
      :class="{ active: value.includes(item.value) }"
      :style="{ marginLeft: spaceWidth ? spaceWidth : 0 }"
      @tap="onSelected(item)"
    >
      {{ item.label }}
    </view>
  </view>
</template>

<script>
export default {
  name: 'tob-checkbox',
  props: {
    spaceWidth: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
    labelKey: {
      type: String,
      default: 'label',
    },
    valueKey: {
      type: String,
      default: 'value',
    },
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  computed: {
    newOptions() {
      return (this.options || []).map(item => {
        return {
          ...item,
          label: item[this.labelKey],
          value: item[this.valueKey],
        };
      });
    },
  },
  methods: {
    onSelected(item) {
      const values = this.value.includes(item.value) ? this.value.filter(val => val !== item.value) : this.value.concat(item.value);
      this.$emit('input', values);
      this.$emit('change', values, item);
    },
  },
};
</script>

<style lang="scss" scoped>
.tob-checkbox-group {
  display: flex;
  flex-wrap: wrap;
  margin-top: -32rpx;

  .tob-checkbox {
    font-size: 26rpx;
    color: #323233;
    text-align: center;
    padding: 15rpx 22rpx;
    margin-top: 32rpx;
    border-radius: 4rpx;
    background-color: #f8f8f8;

    &.active {
      color: #fff;
      background-color: $u-type-primary;
    }
  }

  &.auto {
    justify-content: space-between;
  }

  &.custom {
  }
}
</style>
