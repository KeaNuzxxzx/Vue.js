<template>
    <div>
        <h1> App组件</h1>

        <mt-button type="danger" size="small" icon="back">back</mt-button>
        <mt-button type="danger" size="small" icon="more">more</mt-button>

        <mt-button type="primary" size="large"  @click="show" plain>large</mt-button>

        <!-- <mybtn type="primary" size="large">hello</mybtn> -->
        <br>
        <button type="button" class="mui-btn mui-btn-royal">purple</button>
        <br>
        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">GoodsList</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
    date(){
        return {
            toast: null,
        }
    },
    created(){
        this.getList()
    },
    methods: {
        getList(){
            this.show()
            setTimeout( () => { 
                this.toast.close()
            }, 3000)
        },
        show(){
            // Toast("hello")
            this.toast = Toast({
                message: 'hello',
                duration: -1,
                iconClass: 'oi oi-check',
                className: 'mytoast'
            })
        }
    }
}
</script>

<style>

</style>