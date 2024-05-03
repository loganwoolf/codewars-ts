import { describe, test, expect } from "bun:test";
import { binaryArrayToNumber } from "./7-ones-and-zeros";

describe("Function binaryArrayToNumber", () => {
	test("should convert many binary numbers to base 10 integers", () => {
		expect(binaryArrayToNumber([0])).toEqual(0);
		expect(binaryArrayToNumber([1])).toEqual(1);
		expect(binaryArrayToNumber([1, 0])).toEqual(2);
		expect(binaryArrayToNumber([1, 1])).toEqual(3);
		expect(binaryArrayToNumber([1, 0, 1])).toEqual(5);
		expect(binaryArrayToNumber([1, 1, 1, 1])).toEqual(15);
	});
});
