<template>
  <span :class="characterStyleClasses">{{ character }}</span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { CharacterState } from "../utils/types";

@Component({
  components: {},
})
export default class Character extends Vue {
  @Prop(String)
  readonly character!: string;

  @Prop(Number)
  readonly status!: number;

  get characterStyleClasses() {
    const classes = [];
    if (this.status === CharacterState.Correct) {
      classes.push("correct");
    } else if (this.status === CharacterState.Wrong) {
      classes.push("wrong");
    }
    return classes;
  }
}
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
