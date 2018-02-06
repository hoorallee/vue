// 导入初始化样式
import 'normalize.css';

// 1.1 导入vue相关的第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 1.2 启动vue插件
Vue.use(VueRouter);
Vue.use(ElementUI);

// 2.1 导入自己写的根组件
import App from './component/App.vue';
// 2.2 导入路由配置
import routerConfig from './router/index.js';

// 3.1 导入非vue的第三方包axios,并加入到原型中
import axios from 'axios';
// 3.2 配置下面这句,以后所有的请求都会使用这个域名
axios.defaults.baseURL = 'http://157.122.54.189:9095';
Vue.prototype.$http = axios;

// 4.1 导入api配置对象,并加入到原型中
import api from './js/api-config.js';
Vue.prototype.$api = api;

// 把根组件渲染到指定视图
new Vue({
    el:"#app",
    render:function(createElement){
        return createElement(App);
    },
    router: new VueRouter(routerConfig)
});