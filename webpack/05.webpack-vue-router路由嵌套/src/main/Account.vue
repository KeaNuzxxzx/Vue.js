<template>
  <div>
    <h1>Account组件</h1>
    <router-link to="/account/login">Login</router-link>
    <router-link to="/account/register">Register</router-link>
    <router-view></router-view>
  </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
div{
  color: red;
}
</style>