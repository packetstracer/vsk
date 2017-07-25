import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import StoreTest from './modules/RepAppStoreTest'
import AnotherTestStore from './modules/RepAppAnotherTestStore/store'

Vue.use(Vuex)

const store = new Vuex.Store({
  // modules with their own state/getters/mutations/actions
  modules: {
    StoreTest,
    AnotherTestStore
  },

  // main/global state/getters/mutations/actions
  state: {
    users: [
      {
        name: 'Mike',
        lastName: 'Perez',
        active: true
      },
      {
        name: 'Anthony',
        lastName: 'Gonzalez',
        active: true
      },
      {
        name: 'Josua',
        lastName: 'Mendez',
        active: false
      }
    ],
    products: [
      {
        name: 'Camara',
        price: 200,
        offer: 12
      },
      {
        name: 'Monitor',
        price: 100,
        offer: 10
      },
      {
        name: 'Keybourd',
        price: 100
      }
    ]
  },
  getters,
  mutations,
  actions
})

export default store
