import { Plugin } from 'obsidian';
import { processNote, loadFont } from './fight-note';
import { DEFAULT_SETTINGS, FightNotePluginSettings, FightNoteSettingTab } from "./settings";

export default class FightNotePlugin extends Plugin {
	public settings: FightNotePluginSettings;

	async onload() {
		await this.loadSettings();
		await loadFont();
		this.registerMarkdownCodeBlockProcessor("fight", (source: string, el: HTMLElement): void => {
			processNote(source, el, this.settings);
		});

		this.addSettingTab(new FightNoteSettingTab(this.app, this));
	}

	onunload() {
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}


