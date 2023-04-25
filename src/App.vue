<script setup lang="ts">
import { reactive, ref } from "vue";
import { storeToRefs } from 'pinia'
import  {useUserStore} from "@/store";
import ComponentHeader from "./component/component-header.vue";

const _useUserStore = useUserStore();
const { user,  } = storeToRefs(_useUserStore)
const {updateUser} = _useUserStore

const count = ref(0)
const data = reactive({
  name: 'hello world',
  age: 30,
})
const addCount = () => { 
  count.value = count.value+1
}

const resetUser = ()=>{
  _useUserStore.$reset()
}
</script>

<script lang="ts">
export default {
  name: "AppIndex"
}
</script>

<template lang="pug">
div()
  span() {{ count  }}
  button(@click="addCount") addCount
  hr
  span() {{ data.name }}
  span() {{ data.age }}
  hr
  ComponentHeader()
  hr
  span() {{ user }}
  button(@click="()=>{updateUser()}") 更新user
  button(@click="resetUser") 重置user
  

</template>

<style scoped></style>
