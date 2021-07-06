<template>
  <view class="box" :style="{ padding }">
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: 'tob-block',
  props: {
    class: String,
    padding: {
      type: String,
      default: '20rpx',
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.box {
  display: block;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(172, 170, 170, 0.5);
  border-radius: 10px;
}
</style>
