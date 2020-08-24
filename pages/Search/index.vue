<!--
 * @Author: your name
 * @Date: 2020-08-21 10:31:18
 * @LastEditTime: 2020-08-21 13:50:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gulishop_fengshuai\src\pages\Serach\index.vue
-->
<template>
 <div>
   Search
   <h1>params参数:{{keyword}}</h1>
   <!-- <h1>params参数:{{$route.params.keyword}}</h1> -->
   <h1>query参数：{{keyword33}}</h1>
   <!-- <h1>query参数：{{$route.query.keyword22}}</h1> -->
 </div>
</template>
 
<script>
 
export default {
  props:['keyword','keyword33'],
   name: "Search"
  
}
 
</script>
 
<style lang="less" scoped>
 
</style>