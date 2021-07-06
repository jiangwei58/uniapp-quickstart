<template>
  <view class="container">
    <view class="container-header" :style="{ height: headerHeight + 'px' }">
      <view class="container-header-fixed">
        <tob-header v-if="showCustomHeader"></tob-header>
        <tob-search
          v-if="searchConfig.show"
          :show-location="searchConfig.showLocation"
          :show-action="searchConfig.showAction"
          :placeholder="searchConfig.placeholder"
          :disabled="searchConfig.disabled"
          @click="$emit('searchClick')"
          @custom="$emit('searchCustom')"
          @search="onSearch"
        ></tob-search>
        <slot name="header"></slot>
      </view>
      <view :style="{ height: headerHeight + 'px' }"></view>
    </view>

    <slot></slot>
    <view v-if="loadConfig.show" style="padding: 20rpx 0;">
      <u-loadmore :status="loadConfig.status" :load-text="{ loadmore: '轻轻上拉', loading: '努力加载中', nomore: '实在没有了' }" />
    </view>

    <view :style="{ height: bottomHeight + 'px' }"></view>
    <view class="container-bottom-fixed">
      <slot name="bottom"></slot>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    showCustomHeader: {
      type: Boolean,
      default: false,
    },
    searchConfig: {
      type: Object,
      default: () => ({
        show: false,
        placeholder: '',
        showLocation: false,
        disabled: false,
        showAction: false,
      }),
    },
    loadConfig: {
      type: Object,
      default: () => ({
        show: false,
        status: 'loadmore',
      }),
    },
  },
  data() {
    return {
      headerHeight: 44,
      bottomHeight: 68,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$uGetRect('.container-header-fixed').then(res => {
        this.headerHeight = res.height;
      });
      this.$uGetRect('.container-bottom-fixed').then(res => {
        this.bottomHeight = res.height;
      });
    });
  },
  methods: {
    onSearch(value) {
      this.$emit('search', value);
    },
  },
};
</script>

<style></style>
<style lang="scss" scoped>
.container {
}
.container-header {
  position: relative;
  width: 100%;
}
.container-header-fixed,
.container-bottom-fixed {
  position: fixed;
  z-index: 99;
  width: 100%;
  left: 0;
}
.container-header-fixed {
  top: 0;
}
.container-bottom-fixed {
  bottom: 0;
}
</style>
