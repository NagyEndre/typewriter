export enum CharacterState {
  Untyped,
  Correct,
  Wrong,
}

export enum ExerciseType {
  ProgrammingQuote,
  CodeSnippet,
}

export const codeSnippets = [
  'export class CloudStorageStrategy implements StorageStrategy {\n    public store(data: string) {\n        console.log("TODO: Upload data to cloud.");\n    }\n}',
  "export class CloudStorageStrategy implements StorageStrategy {\n}",
];
