<template>
  <span :class="characterStyleClasses" ref="character">{{ character }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CharacterState } from "../utils/types";

export default defineComponent({
  name: "CharacterElement",
  props: {
    character: String,
    status: Number,
  },
  computed: {
    characterStyleClasses() {
      const classes = [];
      if (this.status === CharacterState.Correct) {
        classes.push("correct");
      } else if (this.status === CharacterState.Wrong) {
        classes.push("wrong");
      }
      return classes;
    },
  },
});
</script>

<style scoped>
.correct {
  color: white;
  background-color: seagreen;
}
.wrong {
  color: white;
  background-color: indianred;
}
</style>
