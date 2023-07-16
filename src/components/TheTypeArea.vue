<template>
  <div
    tabindex="0"
    class="show-on-focus character-container"
    autofocus
    @keydown="onKeyPress"
  >
    <character-element
      v-for="(character, index) in characters"
      :key="`${index}-${character}`"
      ref="targetElements"
      :character="character"
      :status="states[index]"
      :class="{ current: isCurrent(index) }"
    >
    </character-element>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CharacterState, HitType } from "../utils/types";
import CharacterElement from "./CharacterElement.vue";

export default defineComponent({
  name: "TheTypeArea",
  components: {
    CharacterElement,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      newLineCharacter: "\n",
      selectedIndex: 0,
      states: Array(this.text.length).fill(0),
      keysToIgnore: ["Control", "Shift", "AltGraph"],
    };
  },
  computed: {
    characters(): string[] {
      return [...this.text];
    },
  },
  methods: {
    onKeyPress(event: { key: string; preventDefault: () => void }) {
      console.log(event.key);

      if (this.keysToIgnore.includes(event.key)) return;

      const isEndReached = this.selectedIndex === this.characters.length;
      if (isEndReached) {
        this.selectedIndex = 0;
        this.$emit("finished");
        this.resetStates();
      } else {
        const isSpacePressed = event.key === " ";
        if (isSpacePressed) event.preventDefault();

        if (this.isCorrectHit(event.key)) {
          this.handleCorrectHit();
          this.handleVerticalScroll(event.key);
        } else {
          this.handleWrongHit();
        }
      }
    },
    isCorrectHit(key: string): boolean {
      if (
        key === "Enter" &&
        this.characters[this.selectedIndex] == this.newLineCharacter
      )
        return true;
      else {
        return key === this.characters[this.selectedIndex];
      }
    },
    handleCorrectHit(): void {
      console.log(`Correct hit`);
      const notAlreadyMarkedAsWrong =
        this.states[this.selectedIndex] !== CharacterState.Wrong;
      if (notAlreadyMarkedAsWrong) {
        this.states[this.selectedIndex] = CharacterState.Correct;
      }
      this.selectedIndex++;
      this.$emit("hitType", HitType.Correct);
    },
    handleWrongHit(): void {
      console.log("Wrong hit");
      this.states[this.selectedIndex] = CharacterState.Wrong;
      this.$emit("hitType", HitType.Wrong);
    },
    handleVerticalScroll(key: string) {
      if (key === "Enter") {
        const targets = this.$refs.targetElements as any;
        targets[this.selectedIndex].$refs.character.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
      }
    },
    isCurrent(index: number): boolean {
      return index === this.selectedIndex;
    },
    resetStates(): void {
      this.states = Array(this.text.length).fill(0);
    },
  },
});
</script>

<style lang="less" scoped>
.show-on-focus {
  filter: blur(5px);
  transition: filter 0.2s;
}

.show-on-focus:focus {
  filter: blur(0);
}

.character-container {
  background: rgba(255, 255, 255, 0.9);
  white-space: break-spaces;
  text-align: left;
  border: #2c3e50 solid;
  border-radius: 0.5em;
  padding: 0.8rem;
  width: 90%;
  margin: auto;
  font-family: monospace;
}

.current {
  border: #2c3e50 solid;
}
</style>
