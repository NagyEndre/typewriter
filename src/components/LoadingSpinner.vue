<template>
  <div class="loading-spinner">
    <div class="spinner"></div>
    <div class="loading-text">Loading...</div>
    <p class="loading-text">
      Waking up backend.. this might take a minute or two
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoadingSpinner",
});
</script>

<style>
.loading-text {
  color: whitesmoke;
}

.loading-spinner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.spinner {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 0.4rem solid whitesmoke;
  border-top-color: green;
  animation: spinner 0.8s ease-in-out infinite;
  margin: 0.5rem;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>
