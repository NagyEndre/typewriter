<template>
  <div>
    <span>Correct hit: {{ correctCount }}. Error count: {{ errorCount }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class StatDisplay extends Vue {
  @Prop({
    type: Number,
    required: true,
  })
  private readonly correctCount!: number;

  @Prop({
    type: Number,
    required: true,
  })
  private readonly errorCount!: number;
}
</script>

<style scoped>
div {
  margin: 1rem;
  display: inline-block;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.6);
}
span {
  color: black;
}
</style>
