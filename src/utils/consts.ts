import LinkedList from "ts-linked-list";

export const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export const randomProgramQuoteUrl =
  "https://programming-quotes-api.herokuapp.com/Quotes/random";

export const newLineCharacter = "\n";

const singleton =
  "class Singleton {\n  private static instance: Singleton;\n\n  private constructor() {}\n\n  public static getInstance(): Singleton {\n    if (!Singleton.instance) {\n      Singleton.instance = new Singleton();\n    }\n    return Singleton.instance;\n  }\n}";
const strategy =
  'interface StorageStrategy {\n    store(data: string): void;\n}\n\nclass CloudStorageStrategy implements StorageStrategy {\n    public store(data: string) {\n        console.log("Uploading data to cloud.");\n    }\n}';
const template_method =
  'abstract class TestSequence {\n  public execute() {\n    this.prepareEnvironment();\n    this.userPreparation();\n    this.run();\n    this.userCleanUp();\n    this.collectResults();\n  }\n\n  protected abstract prepareEnvironment(): void;\n\n  protected userPreparation(): void {\n    console.log("No user preparation is executed.");\n  }\n\n  protected abstract run(): void;\n\n  protected userCleanUp(): void {\n    console.log("No user clean up is executed.");\n  }\n\n  protected abstract collectResults(): void;\n}';

export const codeSnippets = new LinkedList(
  strategy,
  singleton,
  template_method
);
