import component from './animated-number.vue';

export const AnimatedNumber = component;

export const Plugin = {
  install: (Vue) => {
    Vue.component('animated-number', component);
  },
};

export default {
  AnimatedNumber, Plugin,
};
