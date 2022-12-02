import { createApp } from 'vue';
import App from './App.vue';
import text from './test-fuction';
import { message, data } from './test-consts';

createApp(App).mount('#app');
alert(message);
alert(data.text);
text();
