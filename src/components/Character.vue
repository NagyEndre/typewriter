<template>
  <span :style="characterStyleClasses">{{ character }}</span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { CharacterStatus } from "../utils/types";

@Component({
  components: {},
})
export default class Character extends Vue {
  @Prop(String)
  readonly character!: string;

  @Prop(Number)
  readonly status!: number;

  correctStyle = { color: "white", backgroundColor: "seagreen" };
  wrongStyle = { color: "white", backgroundColor: "indianred" };

  get characterStyleClasses() {
    const classes = [];
    if (this.status === CharacterStatus.Correct) {
      classes.push(this.correctStyle);
    } else if (this.status === CharacterStatus.Wrong) {
      classes.push(this.wrongStyle);
    }
    return classes;
  }
}
</script>
