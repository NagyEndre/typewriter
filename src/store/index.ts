import Vue from "vue";
import Vuex from "vuex";
import { ExerciseType } from "../utils/types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    exerciseType: ExerciseType.CodeSnippet,
  },
  getters: {
    exerciseType(state) {
      return state.exerciseType;
    },
  },
  mutations: {
    setExerciseType(state, type: number) {
      state.exerciseType = type;
    },
  },
  modules: {},
});
