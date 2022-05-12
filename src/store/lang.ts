/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';

export const lang = defineStore({
  // 这里的id必须为唯一ID
  id: 'language',
  state: () => {
    return {
      locale: '',
    };
  },
  // pinia 放弃了 mutations 只使用 actions
  actions: {
    // actions可以用async做成异步形式
    setLocale(type: string) {
      this.Locale = type;
    },
  },
});
