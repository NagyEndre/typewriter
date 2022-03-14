<template>
  <div id="app">
    <the-header></the-header>
    <div>
      <span
        >Correct hit: {{ correctCount }}. Error count: {{ errorCount }}</span
      >
    </div>
    <div class="container" @keydown="onKeyPress($event)">
      <span class="correct">l</span>
      <span class="wrong">o</span>
      <span class="current">r</span>
      <span>e</span>
      <span>m</span>
      <span
        v-for="(character, index) in characters"
        :key="`${index}-${character}`"
        :class="{ current: isCurrent(index) }"
        >{{ character }}</span
      >
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
  characters = [...this.text];
  selectedIndex = 0;
  errorCount = 0;
  correctCount = 0;
  isCurrent(index: number) {
    return index === this.selectedIndex;
  }

  onKeyPress(event: any) {
    const character = event.key;
    if (character === this.characters[this.selectedIndex]) {
      console.log(`Correct hit`);
      // bind correct class
      // remove current class
      this.selectedIndex++;
      this.correctCount++;
      // attach current class
    } else {
      console.log("Wrong hit");
      this.errorCount++;
      // bind wrong class
    }
  }
  created() {
    window.addEventListener("keypress", this.onKeyPress);
  }
  destroyed() {
    window.removeEventListener("keypress", this.onKeyPress);
  }
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
  font-family: monospace;
}
.correct {
  color: white;
  background-color: green;
}
.wrong {
  color: white;
  background-color: indianred;
}
.current {
  border: #2c3e50 solid;
}
</style>
