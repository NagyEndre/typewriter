import ExerciseRandomizer from "@/utils/ExerciseRandomizer";

describe("ExerciseRandomizer tests", () => {
  let randomizer: (max: number) => number;

  beforeEach(() => {
    randomizer = jest.fn().mockReturnValue(0);
  });

  test("Should throw when no exercise is supplied", () => {
    const expectedErrorMessage = "At least 1 exercise must be provided.";

    expect(() => {
      new ExerciseRandomizer(randomizer, 0);
    }).toThrow(expectedErrorMessage);
  });

  test("Should return exercise index", () => {
    const expectedExerciseIndex = 0;
    const selector = new ExerciseRandomizer(randomizer, 1);

    const exercise = selector.getNextExerciseIndex();

    expect(exercise).toBe(expectedExerciseIndex);
  });

  test("Should regenerate when previous exercise is repeated", () => {
    const expectedIndex = 1;
    const randomizer = jest
      .fn()
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(1);
    const selector = new ExerciseRandomizer(randomizer, 2);

    selector.getNextExerciseIndex();
    const index = selector.getNextExerciseIndex();

    expect(index).toBe(expectedIndex);
  });

  test("Should handle multiple getExerciseIndex calls when there is only 1 exercise ", () => {
    const selector = new ExerciseRandomizer(randomizer, 1);

    const firstIndex = selector.getNextExerciseIndex();
    const secondIndex = selector.getNextExerciseIndex();

    expect(firstIndex).toBe(secondIndex);
  });
});
