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
