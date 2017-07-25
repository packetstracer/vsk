// Vuex module with self contained state/getters/mutations/actions
const storeTest = {
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

  getters: {
    activeUsers2: state => state.users.filter(user => user.active),

    activeUsersCount2: (state, getters) => getters.activeUsers.length
  },

  mutations: {
    addUser2 (state, payload) {
      state.users.push({
        name: payload.name,
        lastName: payload.lastName,
        active: true
      })
    },

    removeUser2 (state, payload) {
      state.users = state.users.filter(user => user.name !== payload.name)
    }
  },

  actions: {

  }
}

export default storeTest
