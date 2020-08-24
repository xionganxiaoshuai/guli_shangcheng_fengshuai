/*
 * @Author: your name
 * @Date: 2020-08-21 10:35:02
 * @LastEditTime: 2020-08-21 11:01:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gulishop_fengshuai\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
// 终极解决多次点击报错的push和replace问题；
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location,onResolved,onRejected) {
  if (onResolved === undefined && onRejected === undefined) {
    return originPush.call(this,location).catch(() => {})
  }else{
    return originPush.call(this,location,onResolved,onRejected)
  }
}

VueRouter.prototype.replace = function (location,onResolved,onRejected) {
  if (onResolved === undefined && onRejected === undefined) {
    return originPush.originReplace(this,location).catch(() => {})
  }else{
    return originPush.originReplace(this,location,onResolved,onRejected)
  }
}




import routes from "@/router/routes.js";
export default new VueRouter({
  routes
});