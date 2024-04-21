import { Parser } from "../src/fight-note";
import { splitStringData, inputData, fightNoteData } from "./note.data";

test("Parser split input string into inputs and custom text", (): void => {
	const parser: Parser = new Parser();
	for (const item of splitStringData) {
		const src: string[] = parser.splitInputString(item.src);
		expect(src).toStrictEqual(item.dst);
	}
});

test("Parser prepare input string by making it more strict", (): void => {
	const parser: Parser = new Parser();
	for (const item of inputData) {
		expect(parser.prepare(item.src)).toBe(item.dst);
	}
});

test("Parser make FightNote object from text code block", (): void => {
	const parser: Parser = new Parser();
	for (const item of fightNoteData) {
		expect(parser.parse(item.src)).toStrictEqual(item.dst);
	}
});
