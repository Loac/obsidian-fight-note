import { FightNote } from "../src/fight-note";

interface SplitString {
	src: string;
	dst: string[];
}

export const splitStringData: SplitString[] = [
	{
		src: "1+2",
		dst: ["1+2"],
	},
	{
		src: "1+2 \"String\"",
		dst: ["1+2", "\"String\""],
	},
	{
		src: "\"String\" 1+2",
		dst: ["\"String\"", "1+2"],
	},
	{
		src: "1+2 \"String\" 3+4 \"String\"",
		dst: ["1+2", "\"String\"", "3+4", "\"String\""],
	},
	{
		src: "1+2 \"String\" \"String\"",
		dst: ["1+2", "\"String\"", "\"String\""],
	},
	{
		src: "1+2 > \"Default inputs d/f\" > 3+4",
		dst: ["1+2 >", "\"Default inputs d/f\"", "> 3+4"],
	},
]

export interface NoteData {
	src: string;
	dst: string;
}

export const inputData: NoteData[] = [
	{
		src: "f+2",
		dst: "f 2",
	},
	{
		src: "df+2",
		dst: "df 2",
	},
	{
		src: "d+f+2",
		dst: "df 2",
	},
	{
		src: "f+2+3",
		dst: "f 23",
	},
	{
		src: "d+f+2+3",
		dst: "df 23",
	},
	{
		src: "d/f+2",
		dst: "df 2",
	},
	{
		src: "f2+3",
		dst: "f 23",
	},
	{
		src: "1~2",
		dst: "[ 1 2 ]",
	},
	{
		src: "D+F+2,1~2",
		dst: "DF 2 [ 1 2 ]",
	},
	{
		src: "d/f~1+2",
		dst: "[ df 12 ]",
	},
	{
		src: "f[2 3]",
		dst: "f [ 2 3 ]",
	},
	{
		src: "f,n,d,d/f+2",
		dst: "f n d df 2",
	},
	{
		src: "DES, d+1+2",
		dst: "DES d 12",
	},
	{
		src: "u/f>1+2",
		dst: "uf > 12",
	},
	{
		src: "u/f>1+2 DES",
		dst: "uf > 12 DES",
	},
	{
		src: "df+1,1 > f+2 > uf+1 (wait) f+3 T! > DBT f+1",
		dst: "df 1 1 > f 2 > uf 1 (wait) f 3 T! > DBT f 1",
	},
	{
		src: "db+1,2 T! > df+1,1 > u+3,2",
		dst: "db 1 2 T! > df 1 1 > u 3 2",
	},
	{
		src: "f,f+2~F SEN 3 > df+2 > df+1 > f+2,3~F SEN 2 T! > uf+3+4,1+2",
		dst: "f f [ 2 F ] SEN 3 > df 2 > df 1 > f 2 [ 3 F ] SEN 2 T! > uf 34 12",
	},
	{
		src: "df+2,3 > db+2,1~D SZN 3,2 T! > b+2,4,2",
		dst: "df 2 3 > db 2 [ 1 D ] SZN 3 2 T! > b 2 4 2",
	},
	{
		src: "1 2 3 4 > 1+2 3+4 1~3 2+4 > 1+2+3 1+2+3+4>df+23>u/b+2+3",
		dst: "1 2 3 4 > 12 34 [ 1 3 ] 24 > 123 1234 > df 23 > ub 23",
	},
]

export interface FightNoteData {
	src: string;
	dst: FightNote;
}

const fightNote_1: FightNote = new FightNote();
fightNote_1.input = "f,f+2~F SEN 3 , df+2 \"Custom text d/f\" 2+3";
fightNote_1.name = "Unreal combo";
fightNote_1.damage = "99";
fightNote_1.hits = "10";
fightNote_1.inputs = ["f", "f", "[", "2", "F", "]", "SEN", "3", ",",
	"df", "2", "\"Custom text d/f\"", "23"];

export const fightNoteData: FightNoteData[] = [
	{
		src: `input: f,f+2~F SEN 3 , df+2 \"Custom text d/f\" 2+3
		      name: Unreal combo
			  damage: 99
			  hits: 10`,
		dst: fightNote_1,
	}
];
