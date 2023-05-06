<template>
  <the-header />
  <stat-display :correctCount="correctHitCount" :errorCount="errorHitCount" />
  <the-type-area
    :text="text"
    @hitType="handleHitResult"
    @finished="resetApp"
  ></the-type-area>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "./components/TheHeader.vue";
import TheTypeArea from "./components/TheTypeArea.vue";
import StatDisplay from "./components/StatDisplay.vue";
import { HitType } from "./utils/types";
import { lorem } from "./utils/consts";

export default defineComponent({
  name: "App",
  components: {
    TheHeader,
    TheTypeArea,
    StatDisplay,
  },
  data() {
    return {
      correctHitCount: 0,
      errorHitCount: 0,
      text: lorem,
    };
  },
  created() {
    this.setText();
  },
  methods: {
    handleHitResult(type: HitType) {
      switch (type) {
        case HitType.Correct:
          this.correctHitCount++;
          break;
        case HitType.Wrong:
          this.errorHitCount++;
          break;
        default:
          break;
      }
    },
    resetApp() {
      this.correctHitCount = 0;
      this.errorHitCount = 0;
      this.setText();
    },
    async setText(): Promise<void> {
      const responsePromise = fetch(
        "https://pattern-palette.onrender.com/random"
      );
      this.text = await (await responsePromise).text();
    },
  },
});
</script>

<style lang="less">
body {
  background-color: whitesmoke;
  background-image: url("./assets/plants.jpg");
  background-repeat: no-repeat;
  background-size: cover;
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
</style>
