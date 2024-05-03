import inquirer from "inquirer";

const createFunctions = (functionNames: string): string => {
	let outputString = "";
	for (const functionName of functionNames.split(",")) {
		outputString += `const ${functionName.trim()} = () => {
// function body
};

`;
	}
	outputString += `export { ${functionNames} };
`;
	return outputString;
};

const createTests = (fileName: string, functionNames: string): string => {
	let outputString = `import { describe, test, expect } from 'bun:test';
import { ${functionNames} } from './${fileName}';
`;

	for (const functionName of functionNames.split(",")) {
		outputString += `
describe('Function ${functionName.trim()}', () => {
	test('should...', () => {
		// expect();
	});
});
`;
	}

	return outputString;
};

inquirer
	.prompt([
		{
			type: "input",
			name: "fileName",
			message: "File name:",
		},
		{
			type: "input",
			name: "functionNames",
			message: "Function names (comma separated):",
		},
	])
	.then((answers) => {
		const { fileName, functionNames } = answers;

		const mainFile = Bun.file(`./src/${fileName}.ts`);
		Bun.write(mainFile, createFunctions(functionNames));

		const testFile = Bun.file(`./src/${fileName}.test.ts`);
		Bun.write(testFile, createTests(fileName, functionNames));
	});

export { createFunctions, createTests };
