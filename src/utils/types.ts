import LinkedList from "ts-linked-list";

export enum CharacterState {
  Untyped,
  Correct,
  Wrong,
}

export enum ExerciseType {
  ProgrammingQuote,
  CodeSnippet,
}

const singleton =
  "class Singleton {\n  private static instance: Singleton;\n\n  private constructor() {}\n\n  public static getInstance(): Singleton {\n    if (Singleton.instance === undefined) {\n      Singleton.instance = new Singleton();\n    }\n    return Singleton.instance;\n  }\n}";
const strategy =
  'interface StorageStrategy {\n    store(data: string): void;\n}\n\nclass CloudStorageStrategy implements StorageStrategy {\n    public store(data: string) {\n        console.log("Uploading data to cloud.");\n    }\n}';

export const codeSnippets = new LinkedList(
  strategy,
  singleton,
  "class CloudStorageStrategy implements StorageStrategy {\n}"
);
