<template>
  <div>
    <select v-model="selected">
      <option v-for="option in options" :key="option" :value="option[1]">
        {{ option[0] }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { ExerciseType } from "../utils/types";

@Component({
  components: {},
})
export default class ExerciseSelector extends Vue {
  private readonly options = [
    ["Programming quote", ExerciseType.ProgrammingQuote],
    ["Code snippet", ExerciseType.CodeSnippet],
  ];
  selected = this.options[0][1];

  @Watch("selected")
  private onSelectedChanged(newSelected: number): void {
    this.$store.commit("setExerciseType", this.options[newSelected][1]);
  }
}
</script>

<style></style>
