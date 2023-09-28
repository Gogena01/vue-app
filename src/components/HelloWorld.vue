<template>
  <h1>Hello from Comp</h1>
  <h2>{{ counter }}</h2>
  <button @click="increment">increment</button>
  <button @click="decrement">decrement</button>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
  }
});

const counter = ref(0)

const increment = () => {
  counter.value++
}

const decrement = () => {
  counter.value--
}
</script>