import { Make, Home } from '../../containers/Pizza';

export default [
  { exact: true, path: '/', component: Home },
  { exact: true, path: '/pizza/make', component: Make },
];
