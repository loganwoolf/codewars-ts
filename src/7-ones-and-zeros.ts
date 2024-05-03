const binaryArrayToNumber = (arr: BinaryInt[]): number =>
	Number.parseInt(arr.join(""), 2);

type BinaryInt = 0 | 1;

export { binaryArrayToNumber };
