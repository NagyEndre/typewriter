<template>
  <p>{{ sampleText }}</p>
</template>

<script lang="ts">
// -import { Vue, Component} from 'vue-class-component'
import { Vue, Component } from "vue-property-decorator";

@Component
export default class SampleText extends Vue {
  private readonly sampleText = "lorem";
}
</script>
