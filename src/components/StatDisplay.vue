<template>
  <div>
    <span>Correct hit: {{ correctCount }}. Error count: {{ errorCount }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StatDisplay",
  props: {
    correctCount: Number,
    errorCount: Number,
  },
});
</script>

<style scoped>
div {
  margin: 1rem;
  display: inline-block;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.6);
}
span {
  color: black;
}
</style>
