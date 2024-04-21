module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleDirectories: ["node_modules", "src", "tests"],
	moduleNameMapper: {
		obsidian: 'mocks/obsidian.ts',
	},
};
