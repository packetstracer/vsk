<template>
  <header id="rep-layout-header-container">
    <img src="../assets/logo.png" alt="Vue.js PWA">
    <span>Vue.js PWA - Reptile Prototype</span>
  </header>
</template>


<script>
  const RepLayoutHeader = {
    name: 'rep-layout-header'
  }

  export default RepLayoutHeader
</script>


<style scoped>

  header {
    margin: 0;
    height: 46px;
    padding: 16px 16px 0 24px;
    background-color: #35495E;
    color: #ffffff;

    display: inline-flex;
    width: 100%;
  }

  header img {
    height: 30px;
    margin-right: 16px;
  }

  header span {
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;

    margin-top: 10px;
  }

</style>
