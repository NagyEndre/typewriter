import Vue from "vue";
import Vuex from "vuex";
import { ExerciseType } from "../utils/types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    exerciseType: ExerciseType.ProgrammingQuote,
  },
  getters: {
    exerciseType(state) {
      return state.exerciseType;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
