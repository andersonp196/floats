import vue from 'vue';
import vueRouter from 'vue-router';
import vuex from 'vuex/dist/vuex.esm.js';
import babelPolyfill from 'babel-polyfill'
import { mapState } from 'vuex'

import appVue from './app.vue';
import homeVue from './home/home.vue';
import combinationsVue from './combinations/combinations.vue';
import helpVue from './help/help.vue';
import ieeeVue from './ieee/ieee.vue';
import tradeupVue from './tradeup/tradeup.vue';
import nopageVue from './nopage/nopage.vue';

import store from './store';
import socket from './util/socket/socket';

vue.use(vuex);
vue.use(vueRouter);

/*
can't delete tradeup floats
can click hidden and disabled buttons
make sure server getting priceData every 50000 works
don't have to login after refreshing for a limited time
don't have to login when redirected to /nopage
*/

new vue({
  router: new vueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        component: homeVue
      },
      {
        path: '/combinations',
        component: combinationsVue
      },
      {
        path: '/help',
        component: helpVue
      },
      {
        path: '/ieee',
        component: ieeeVue
      },
      {
        path: '/tradeup',
        component: tradeupVue
      },
      {
        path: '/nopage',
        component: nopageVue
      },
      {
        path: '*',
        redirect: '/nopage'
      },
    ]
  }),
  store: store,
  render: h => h(appVue)
}).$mount('#app');
