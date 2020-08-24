<!--
 * @Author: your name
 * @Date: 2020-08-21 08:36:54
 * @LastEditTime: 2020-08-21 10:49:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gulishop_fengshuai\src\App.vue
-->
<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <!-- <Footer v-if="$route.path === '/home' || $route.path === '/search'"></Footer> -->
    <Footer v-if="$route.meta.isHide"></Footer>
  </div>
</template>
 
<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default {
  name: "App",
  components:{
    Header,
    Footer
  }

}

</script>
 
<style  lang="less" scoped>

</style>