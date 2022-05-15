// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    meta: {
      title: '',
      icon: '',
    },
    component: () => import('@/views/home/login.vue'),
  },
  {
    path: '/process',
    name: 'process',
    meta: {
      title: 'Template configuration process',
      icon: '',
    },
    component: () => import('@/views/example/MarkdownPage.vue'),
  },
  {
    path: '/hello',
    name: 'hello',
    meta: {
      title: '',
      icon: '',
    },
    component: () => import('@/views/home/hello.vue'),
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: '',
      icon: '',
    },
    component: () => import('@/views/home/register.vue'),
  },
];

export default asyncRoutes;
