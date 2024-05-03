import { expect, test } from "bun:test";
import { createFunctions, createTests } from "./generate";

test("createFunctions", () => {
	const functionNames = "add,subtract, multiply";
	const outputString = createFunctions(functionNames);
	console.log({ outputString });
	expect(outputString).toContain("add");
});

test("createTests", () => {
	const fileName = "test";
	const functionNames = "add,subtract, multiply";
	const outputString = createTests(fileName, functionNames);
	console.log({ outputString });
	expect(outputString).toContain("add");
});
