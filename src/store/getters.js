// getters are like computed properties but for vuex store
const getters = {
  activeUsers: state => state.users.filter(user => user.active),

  activeUsersCount: (state, getters) => getters.activeUsers.length
}

export default getters
