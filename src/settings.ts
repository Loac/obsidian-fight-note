import { App, PluginSettingTab, Setting } from "obsidian";
import FightNotePlugin from "./main";
import { Notation, prefix } from "./fight-note-data";

export const DEFAULT_SETTINGS: FightNotePluginSettings = {
	buttons: 'default',
	inputsSize: 'default',
	wrapInputs: false,
	customNotationsRaw: '',
	customNotations: {},
}

export interface FightNotePluginSettings {
	buttons: string;
	inputsSize: string;
	wrapInputs: boolean;
	customNotationsRaw: string;
	customNotations: { [key: string]: Notation };
}

export class FightNoteSettingTab extends PluginSettingTab {
	plugin: FightNotePlugin;

	constructor(app: App, plugin: FightNotePlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Buttons')
			.setDesc('Colors for action buttons.')
			.addDropdown(component => {
				component
					.addOptions({
						'default': 'Default',
						'xbox': 'XBox',
						'ps': 'Play Station',
					})
					.setValue(this.plugin.settings.buttons ?? 'default')
					.onChange(async value => {
						this.plugin.settings.buttons = value;
						await this.plugin.saveSettings();
					});
			});

		new Setting(containerEl)
			.setName('Inputs size')
			.setDesc('Size of input icons and special plates.')
			.addDropdown(component => {
				component
					.addOptions({
						'default': 'Default',
						'small': 'Small',
						'big': 'Big',
					})
					.setValue(this.plugin.settings.inputsSize ?? 'default')
					.onChange(async value => {
						this.plugin.settings.inputsSize = value;
						await this.plugin.saveSettings();
					});
			});

		new Setting(containerEl)
			.setName('Wrap inputs')
			.setDesc('Wrap inputs if it exceeds frame width.')
			.addToggle(component => {
				component
					.setValue(this.plugin.settings.wrapInputs ?? false)
					.onChange(async value => {
						this.plugin.settings.wrapInputs = value;
						await this.plugin.saveSettings();
					});
			});
		new Setting(containerEl)
			.setName('Custom notations')
			.setDesc('You can define your own notations.')
			.addTextArea(component => {
				component
					.setValue(this.plugin.settings.customNotationsRaw ?? '')
					.onChange(async value => {
						this.plugin.settings.customNotationsRaw = value;
						this.plugin.settings.customNotations = parseCustomNotation(value);
						await this.plugin.saveSettings();
					});
			})
			.then(setting => {
				setting.settingEl.setAttr("width", "300px")
				setting.descEl.createEl('br');
				setting.descEl.createEl(
					'a',
					{
						text: 'More details.',
						href: 'https://github.com/Loac/obsidian-fight-note',
					},
					a => {
						a.setAttr('target', '_blank');
					},
				);
			});
	}
}

function parseCustomNotation(data: string): { [key: string]: Notation } {
	const notations: { [key: string]: Notation } = {}

	const lines: string[] = split(data, "\n");
	lines.forEach(line => {
		const parts: string[] = split(line, ":")

		if (parts.length == 3) {
			const input: string = parts[0];
			const classes: string[] = split(parts[1], ",")
				.map(item => prefix + "input-custom_" + item);
			const tooltip: string = parts[2];
			notations[input] = new Notation(input, classes, tooltip);
		}
	});

	return notations;
}

/**
 * Split and trim string.
 */
function split(data: string, separator: string): string[] {
	return data.split(separator).map(item => item.trim());
}
