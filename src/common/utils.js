// 获取一个目标元素的宽高
const getElRect = (component, elClass) => {
  return new Promise(resolve => {
    const query = uni.createSelectorQuery().in(component);
    query
      .select('.' + elClass)
      .fields({ size: true }, res => {
        resolve(res);
      })
      .exec();
  });
};

const install = Vue => {
  Vue.prototype.$tob = Vue.prototype.$tob ? Vue.prototype.$tob : {};
  Vue.prototype.$tob.utils = {
    getElRect,
  };
};

export default {
  install,
};
