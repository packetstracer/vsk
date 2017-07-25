import Vue from 'vue'
import Router from 'vue-router'

import LayoutSimple from '@/components/RepLayoutSimple'
import LayoutHeader from '@/components/RepLayoutHeader'
import LayoutFooter from '@/components/RepLayoutFooter'
import AppServerError from '@/apps/rep-app-server-error/RepAppServerError'

import AppTest from '@/apps/rep-app-test/RepAppTest'
import AppTest2 from '@/apps/rep-app-test2/RepAppTest2'
import AppTest3 from '@/apps/rep-app-test3/RepAppTest3'

import AppStoreTest from '@/apps/rep-app-store-test/RepAppStoreTest'
import AppStoreModuleTest from '@/apps/rep-app-store-module-test/RepAppStoreModuleTest'
import AppStoreModuleFilesTest from '@/apps/rep-app-store-module-files-test/RepAppStoreModuleFilesTest'

import ViewTest from '@/components/RepViewTest'
import ViewTest2 from '@/components/RepViewTest2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: LayoutSimple,
      children: [
        {
          path: 'test',
          alias: '',
          name: 'test',
          components: {
            header: LayoutHeader,
            footer: LayoutFooter,
            default: AppTest
          },
          meta: { description: 'App Test 1' }
        },

        {
          path: '/test2/:id',
          name: 'test2',
          components: {
            header: LayoutHeader,
            footer: LayoutFooter,
            default: AppTest2
          },
          props: {
            default: true,
            header: false,
            footer: false
          },
          meta: { description: 'App Test 2' }
        },

        {
          path: 'test3',
          component: AppTest3,
          children: [
            {
              path: 'compA',
              component: ViewTest,
              meta: { description: 'Subcomponent A' }
            },
            {
              path: 'compB',
              component: ViewTest2,
              meta: { description: 'Subcomponent B' }
            }
          ],
          meta: { description: 'App Test 2' }
        },

        {
          path: 'storeTest',
          components: {
            header: LayoutHeader,
            footer: LayoutFooter,
            default: AppStoreTest
          },
          meta: { description: 'Vuex Global Store Test' }
        },

        {
          path: 'storeTestModule',
          components: {
            header: LayoutHeader,
            footer: LayoutFooter,
            default: AppStoreModuleTest
          },
          meta: { description: 'Vuex Module Store Test' }
        },

        {
          path: 'storeTestModuleFiles',
          components: {
            header: LayoutHeader,
            footer: LayoutFooter,
            default: AppStoreModuleFilesTest
          },
          meta: { description: 'Vuex Module Store Test' }
        }
      ]
    },

    {
      path: '*',
      component: AppServerError
    }
  ]
})
