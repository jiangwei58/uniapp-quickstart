<template>
  <view class="header-search">
    <view class="header-search-container u-flex u-col-center u-row-between" :class="{ bg: showLocation }">
      <view class="u-flex u-flex-nowrap u-p-l-28" v-if="showLocation" @click="openLocation">
        <text class="u-font-24">深圳市</text>
        <image class="icon-down u-m-l-12" src="../../static/arrow-down.png" />
      </view>
      <u-search
        class="u-flex-1"
        shape="square"
        :placeholder="placeholder"
        v-model="keyword"
        :show-action="showAction"
        action-text="取消"
        bg-color="#f7f8fa"
        :placeholder-color="disabled ? '#C8C9CC' : '#858996'"
        :input-style="{ fontSize: '24rpx' }"
        :disabled="disabled"
        @click="$emit('click')"
        @custom="$emit('custom')"
        @search="onSearch"
      ></u-search>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    showLocation: {
      type: Boolean,
      default: false,
    },
    showAction: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '请输入',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      keyword: '',
    };
  },
  methods: {
    openLocation() {
      this.$u.route('/pages/location/index');
    },
    onSearch(value) {
      this.$emit('search', value);
    },
  },
};
</script>

<style lang="scss">
.header-search {
  position: relative;
  padding: 20rpx 24rpx;
  background-color: #fff;
  // box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.13);
  .header-search-container {
    &.bg {
      background: #f7f8fa;
    }
  }
  .icon-down {
    display: block;
    width: 24rpx;
    height: 24rpx;
  }
}
</style>
