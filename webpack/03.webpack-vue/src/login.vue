<template>
    <div>
        <h1>这是登陆组件, 使用.vue文件定义出来的</h1>
        <input type="button" value="" @click="show">
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    methods: {
        show(){
            console.log('调用了login.vue中的show方法');
        }
    }
}
</script>

<style>
    
</style>