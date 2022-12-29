import { readFileSync } from "fs";

class FileReader {
  public stringify(path: string): string {
    return readFileSync(path).toString();
  }
}

describe("", () => {
  let reader: FileReader;

  beforeEach(() => {
    reader = new FileReader();
  });

  test("Should return file content as string", () => {
    const expectedSample =
      'console.log("asdf");\r\nconst testString = "dummy-string";\r\n';
    const filePath =
      "O:/Output/Programming/GitHub/typewriter/src/utils/dummy.ts";

    const sample = reader.stringify(filePath);

    expect(sample).toStrictEqual(expectedSample);
  });
});
