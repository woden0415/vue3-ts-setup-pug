<script setup lang="ts">
import { reactive, ref } from "vue";
import ComponentHeader from "./component/component-header.vue";
const count = ref(0)
const data = reactive({
  name: 'hello world',
  age: 30,
})
const addCount = () => { 
  count.value = count.value+1
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

</template>

<style scoped></style>
