export default class ExerciseRandomizer<T> {
  private readonly exerciseCount: number;
  private previousIndex: number | null = null;

  private readonly randomizerFn: (max: number) => number;

  constructor(randomizerFn: (max: number) => number, exerciseCount: number) {
    if (exerciseCount < 1) {
      throw new Error("At least 1 exercise must be provided.");
    }
    this.exerciseCount = exerciseCount;
    this.randomizerFn = randomizerFn;
  }

  public getExerciseIndex(): number {
    if (this.exerciseCount === 1) {
      return 0;
    }
    const max = this.exerciseCount;

    let randomIndex = this.randomizerFn(max);
    while (randomIndex === this.previousIndex) {
      randomIndex = this.randomizerFn(max);
    }

    this.previousIndex = randomIndex;
    return randomIndex;
  }
}

export function getRandomNumber(max: number): number {
  return Math.floor(Math.random() * max);
}
