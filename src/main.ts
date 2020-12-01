import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
const test = 123;
console.log(test);
if (test) {
  console.log(1);
} else {
  console.log(2);
}
const hah = (tex: number) => {
  console.log(tex);
};
hah(123);
const userInfo = {
  code: 200,
  id: '123456',
  msg: 'success',
  name: 'gs',
  tel: '12306',
};
const user={
...userInfo,
};

console.log(user);
