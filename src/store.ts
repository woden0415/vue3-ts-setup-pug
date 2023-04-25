import {  defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', ()=>{
    const user = ref('12312')
    const updateUser = (params?: string|'')=> {
        user.value = params||Math.random()+''
    }
    
    return {
        user,
        updateUser
    }
})