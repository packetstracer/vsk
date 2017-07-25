<template>
  <div id="rep-app-test2-container">
    Param Id: {{ id }}
    <br/>
    User fullname: {{ getFullName }}
    <br/>

    <ul>
      <li v-for="(link, index) in userLinks" :key="index">
        <router-link v-bind:to="link.url">{{ link.name }}</router-link>
      </li>
    </ul>
    <br/>

    <input v-model="name" placeholder="Type whatever..."/>
    <br/>
    <span>{{ name }}</span>
    <br/>
    <p v-if="nameWritten">You've written your name</p>
    <p v-else>You haven't written your name</p>
    <br/>
    <div id="bind-class" v-bind:class="{ active: !!nameWritten }"></div>
  </div>
</template>


<script>
  const RepAppTest2 = {
    name: 'rep-app-test2',

    props: [
      'id'
    ],

    data () {
      return {
        name: '',
        nameWritten: false,
        users: [
          {
            id: 0,
            name: 'Pepe',
            lastName: 'Rodriguez',
            age: 36
          },
          {
            id: 1,
            name: 'Sergio',
            lastName: 'Vinilo',
            age: 26
          },
          {
            id: 2,
            name: 'Paula',
            lastName: 'Kazenave',
            age: 24
          }
        ],

        userLinks: [
          {
            url: '/test2/0',
            name: 'User 0'
          },
          {
            url: '1',
            name: 'User 1'
          },
          {
            url: '2',
            name: 'User 2'
          }
        ]
      }
    },

    computed: {
      getFullName () {
        const user = this.users[this.id]

        if (!user) {
          return 'No User Found'
        }

        return `${user.name} ${user.lastName}`
      }
    },

    watch: {
      name () {
        this.nameWritten = !!this.name
      }
    },

    created () {
//      console.log('Component RepAppTest 2 has been CREATED')
    },

    mounted () {
//      console.log('Component RepAppTest 2 has been MOUNTED')
    },

    updated () {
//      console.log('Component RepAppTest 2 has been UPDATED')
    },

    destroyed () {
//      console.log('Component RepAppTest 2 has been DESTROYED')
    }
  }

  export default RepAppTest2
</script>


<style scoped>

  #bind-class {
    height: 20px;
    width: 100px;
    background-color: palevioletred;
  }

  #bind-class.active {
    background-color: lawngreen !important;
  }

</style>
