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

export const codeSnippets = new LinkedList(
  'export class CloudStorageStrategy implements StorageStrategy {\n    public store(data: string) {\n        console.log("Uploading data to cloud.");\n    }\n}',
  "export class CloudStorageStrategy implements StorageStrategy {\n}"
);
