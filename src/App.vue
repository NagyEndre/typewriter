<template>
  <div id="app">
    <the-header></the-header>
    <div>
      <span
        >Correct hit: {{ correctCount }}. Error count: {{ errorCount }}</span
      >
    </div>
    <div class="container" @keydown="onKeyPress($event)">
      <character
        v-for="(entry, index) in entries"
        :key="`${index}-${entry.character}`"
        :character="entry.character"
        :status="entry.status"
        :class="{ current: isCurrent(index) }"
      >
      </character>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TheHeader from "./components/TheHeader.vue";
import Character from "./components/Character.vue";
import { CharacterStatus } from "./utils/types";

@Component({
  components: {
    TheHeader,
    Character,
  },
})
export default class App extends Vue {
  text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  characters = [...this.text];
  entries = this.characters.map((character) => {
    return { character: character, status: CharacterStatus.Untyped };
  });

  selectedIndex = 0;
  errorCount = 0;
  correctCount = 0;

  isCurrent(index: number) {
    return index === this.selectedIndex;
  }

  onKeyPress(event: any) {
    const isCorrectHit = event.key === this.characters[this.selectedIndex];
    if (isCorrectHit) {
      this.handleCorrectHit();
    } else {
      this.handleWrongHit();
    }
  }

  handleCorrectHit() {
    console.log(`Correct hit`);
    let status = this.entries[this.selectedIndex].status;
    if (status !== CharacterStatus.Wrong) {
      this.entries[this.selectedIndex].status = CharacterStatus.Correct;
    }
    this.selectedIndex++;
    this.correctCount++;
  }

  handleWrongHit() {
    console.log("Wrong hit");
    this.entries[this.selectedIndex].status = CharacterStatus.Wrong;
    this.errorCount++;
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
.current {
  border: #2c3e50 solid;
}
</style>
