<template>
  <header>
    <img
      src="../assets/logo-192x192.png"
      alt="logo"
      draggable="false"
      width="192"
      height="192"
    />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheHeader",
});
</script>

<style scoped>
header {
  margin-bottom: 2rem;
}

img {
  box-shadow: 0px 0px 20px 10px gold;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
}

img:hover {
  transform: scale(1.1);
}
</style>
