<template>
  <div id="rep-layout-simple">
    <!--We can use components directly, declaring them inside the script part-->
    <!--<rep-layout-header></rep-layout-header>-->
    <!--<main>-->
      <!--<router-view></router-view>-->
    <!--</main>-->
    <!--<rep-layout-footer></rep-layout-footer>-->

    <router-view name="header"></router-view>
    <main>
      <router-view></router-view>
    </main>
    <router-view name="footer"></router-view>
  </div>
</template>


<script>
//  import RepLayoutHeader from '@/components/RepLayoutHeader';
//  import RepLayoutFooter from '@/components/RepLayoutFooter';

  const RepLayoutSimple = {
    name: 'RepLayoutSimple'

//    components: {
//      'rep-layout-header': RepLayoutHeader,
//      'rep-layout-footer': RepLayoutFooter
//    }
  }

  export default RepLayoutSimple
</script>


<style>

  main {
    /*margin-top: 40px;*/
    padding: 40px 20px;
  }

</style>
