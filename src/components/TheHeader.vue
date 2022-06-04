<template>
  <header>
    <img src="../assets/logo-192x192.png" alt="logo" />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TheHeader extends Vue {}
</script>

<style scoped>
header {
  margin-bottom: 2rem;
}
</style>
