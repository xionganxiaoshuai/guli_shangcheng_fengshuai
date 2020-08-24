/*
 * @Author: your name
 * @Date: 2020-08-21 10:57:16
 * @LastEditTime: 2020-08-21 16:33:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gulishop_fengshuai\src\router\routes.js
 */

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Search from "@/pages/Search";
import Register from "@/pages/Register";

export default [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
    // 用来判断底部是否隐藏
    meta:{
      isHide:true
    }
  },
  { path: "/register",
    component: Register,
    // 用来判断底部是否隐藏
    meta:{
      isHide:true
    }
  },
  {
    path: "/search/:keyword?",
    component: Search,
    name:'search',
    props: (route) => ({keyword:route.params.keyword,keyword33:route.query.keyword22})
     
  },
  {
    path: "/",
    redirect: "home",
  },
];