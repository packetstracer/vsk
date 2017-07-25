// mutations changes the store state, and are invoked by commits, usually
// not invoked directly but by actions
const mutations = {
  addUser (state, payload) {
    state.users.push({
      name: payload.name,
      lastName: payload.lastName,
      active: true
    })
  },

  removeUser (state, payload) {
    state.users = state.users.filter(user => user.name !== payload.name)
  }
}

export default mutations
