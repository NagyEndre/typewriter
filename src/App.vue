<template>
  <div id="app">
    <the-header></the-header>
    <div class="container">
      <span class="correct">l</span>
      <span class="wrong">o</span>
      <span>r</span>
      <span>e</span>
      <span>m</span>
      <span v-for="letter in letters" :key="letter">{{ letter }}</span>
      <!-- for each letter create a span -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SampleText from "./components/SampleText.vue";
import TheHeader from "./components/TheHeader.vue";

@Component({
  components: {
    SampleText,
    TheHeader,
  },
})
export default class App extends Vue {
  text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  letters = [...this.text];
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  border: #2c3e50 solid;
  padding: 0.5rem;
}
.correct {
  color: green;
}
.wrong {
  color: red;
}
</style>
