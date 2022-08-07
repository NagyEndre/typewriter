<template>
  <div id="app">
    <the-header></the-header>
    <exercise-selector @selection-changed="setText"></exercise-selector>
    <div>
      <span
        >Correct hit: {{ correctCount }}. Error count: {{ errorCount }}</span
      >
    </div>
    <div class="character-container" @keydown="onKeyPress($event)">
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
import { mapGetters } from "vuex";
import TheHeader from "./components/TheHeader.vue";
import ExerciseSelector from "./components/ExerciseSelector.vue";
import Character from "./components/Character.vue";
import { CharacterState, codeSnippets, ExerciseType } from "./utils/types";
import { lorem, randomProgramQuoteUrl, newLineCharacter } from "./utils/consts";
import LinkedListNode from "ts-linked-list/dist/LinkedListNode";

@Component({
  components: {
    TheHeader,
    ExerciseSelector,
    Character,
  },
  computed: mapGetters(["exerciseType"]),
})
export default class App extends Vue {
  readonly url = randomProgramQuoteUrl;

  text = lorem;
  currentCodeSnippet: LinkedListNode<string> | null | undefined =
    codeSnippets.head;
  selectedIndex = 0;
  errorCount = 0;
  correctCount = 0;
  exerciseType!: any;
  get characters() {
    return [...this.text];
  }

  get entries() {
    return this.characters.map((character) => {
      return { character: character, status: CharacterState.Untyped };
    });
  }

  isCurrent(index: number) {
    return index === this.selectedIndex;
  }

  onKeyPress(event: any) {
    const isEndReached = this.selectedIndex === this.characters.length;
    if (isEndReached) {
      this.resetApp();
    } else {
      if (this.isCorrectHit(event.key)) {
        this.handleCorrectHit();
      } else {
        this.handleWrongHit();
      }
    }
  }

  isCorrectHit(key: string): boolean {
    if (
      key === "Enter" &&
      this.characters[this.selectedIndex] == newLineCharacter
    )
      return true;
    else {
      return key === this.characters[this.selectedIndex];
    }
  }

  handleCorrectHit() {
    console.log(`Correct hit`);
    let status = this.entries[this.selectedIndex].status;
    if (status !== CharacterState.Wrong) {
      this.entries[this.selectedIndex].status = CharacterState.Correct;
    }
    this.selectedIndex++;
    this.correctCount++;
  }

  handleWrongHit() {
    console.log("Wrong hit");
    this.entries[this.selectedIndex].status = CharacterState.Wrong;
    this.errorCount++;
  }

  setText() {
    switch (this.exerciseType) {
      case ExerciseType.ProgrammingQuote:
        fetch(this.url)
          .then((response) => response.json())
          .then((data) => {
            this.text = data.en;
          });
        break;
      case ExerciseType.CodeSnippet:
        this.currentCodeSnippet =
          this.currentCodeSnippet?.next || this.currentCodeSnippet?.list?.head;
        this.text = this.currentCodeSnippet!.data;
        break;
      default:
        break;
    }
  }

  resetApp() {
    this.correctCount = 0;
    this.errorCount = 0;
    this.selectedIndex = 0;
    this.setText();
  }

  created() {
    window.addEventListener("keypress", this.onKeyPress);
    this.setText();
  }

  destroyed() {
    window.removeEventListener("keypress", this.onKeyPress);
  }
}
</script>

<style>
body {
  background-color: darkkhaki;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.character-container {
  white-space: break-spaces;
  text-align: left;
  border: #2c3e50 solid;
  padding: 0.5rem;
  width: 90%;
  margin: auto;
  font-family: monospace;
}
.current {
  border: #2c3e50 solid;
}
</style>
