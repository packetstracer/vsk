<template>
  <div id="rep-app-store-test-container">
    <h3>Store Test App</h3>

    <span>Stock + Count: {{ countPlusLocalState }}</span>
    <br>
    <br>

    <ul>
      <li v-for="product in getProducts" :key="product.name">
        {{ product.name }}
        <span v-on:click.stop="removeProduct"> -> Remove</span>
      </li>
    </ul>
    <span>Total products: {{ productCount }}</span>
    <br>
    <br>

    <ul>
      <li v-for="user in getActiveUsers" :key="user.name">
        {{ getFullName(user) }}
        <span v-on:click.stop="removeUser(user.name)"> -> Remove</span>
      </li>
    </ul>

    <span>Total users: {{ userCount }}</span>
    <br>
    <span>Total active users: {{ activeUsersCount }}</span>
    <br>
    <br>

    <div>
      <input type="text" id="new-user-name" name="name" v-model="user.name" @keyup.enter="addUser" placeholder="Type name...">
      <input type="text" name="lastName" v-model="user.lastName" @keyup.enter="addUser" placeholder="Type last name...">
      <input type="submit" value="Add User" v-on:click="addUser">
    </div>

  </div>
</template>


<script>
  import { mapState } from 'vuex'

  const RepAppStoreTest = {
    name: 'rep-app-store-test',

    data () {
      return {
        user: {},
        productsInStock: 15
      }
    },

    methods: {
      addUser () {
        this.$store.commit('addUser', {
          name: this.user.name,
          lastName: this.user.lastName
        })

        this.cleanNewUserForm()
      },

      cleanNewUserForm () {
        this.user.name = ''
        this.user.lastName = ''
        document.querySelector('#new-user-name').focus()
      },

      removeUser (userName) {
        // object notation for commit actions, use type field for the action
        this.$store.commit({
          type: 'removeUser',
          name: userName
        })
      },

      removeProduct () {
        console.log('remove product')
      },

      getFullName (user) {
        return `${user.name} ${user.lastName}`
      }
    },

    computed: {
      setNewUserName (e) {
        this.user.name = e.target.value
      },

      ...mapState(
        {
          getProducts: 'products',
          getUsers: 'users',

          productCount: state => state.products.length,
          userCount: state => state.users.length,

          // if accessing to component local state we cannot use arrow functions
          // (because this binds to parent)
          countPlusLocalState (state) {
            return state.products.length + this.productsInStock
          },

          getActiveUsers () {
            return this.$store.getters.activeUsers
          },

          activeUsersCount () {
            return this.$store.getters.activeUsersCount
          }
        }
      )
    }
  }

  export default RepAppStoreTest

</script>


<style scoped>

</style>
