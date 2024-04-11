import { sanitizeHTMLToDom, setTooltip } from "obsidian";
import { prefix, notations, svgData, alias, Notation, NotationTooltip } from "./fight-note-data";
import { FightNotePluginSettings } from "./settings";

export async function processNote(source: string,
								  el: HTMLElement,
								  settings: FightNotePluginSettings): Promise<void> {
	this.settings = settings;
	const note: Note = parseNote(source);
	const noteElement: HTMLDivElement = await renderNote(note);
	el.appendChild(noteElement);
}

/**
 * Split lines, trim, drop empty lines, find keyword lines, get value and fill {@link Note}.
 */
function parseNote(source: string): Note {
	const note: Note = new Note();

	source.split("\n")
		.map((move: string): string => move.trim())
		.filter((move: string): boolean => move.length > 0)
		.forEach((line: string): void => {
			let data: string[] = line
				.split(/^(input|name|damage|hits):(.+?)$/);

			if (data.length > 1) {
				const property: string = data[1];
				const value: string = data[2].trim();

				if (property == "input" || property == "name" || property == "damage" || property == "hits") {
					note[property] = value;
				}
			} else {
				note.input = data[0];
			}
		});

	return note;
}

async function renderNote(note: Note): Promise<HTMLDivElement> {
	const render: Render = new Render(this.settings);
	const frame: HTMLDivElement = render.frame();
	const header: HTMLDivElement = render.header();
	const footer: HTMLDivElement = render.footer();

	if (note.name)
		header.appendChild(render.title(note));

	if (note.hits)
		footer.appendChild(render.hits(note));

	if (note.damage) {
		if (footer.hasChildNodes())
			footer.appendChild(render.separator());

		footer.appendChild(render.damage(note));
	}

	const inputs: HTMLDivElement = render.inputs();

	note.buildStrings();
	note.inputs()
		.forEach(value => {
			if (value in this.settings.customNotations) {
				inputs.appendChild(render.notation(this.settings.customNotations[value]));
			} else if (value in notations) {
				inputs.appendChild(render.notation(notations[value]));
			} else if (value in alias) {
				inputs.appendChild(render.notation(notations[alias[value]]));
			} else if (note.strings[value]) {
				inputs.appendChild(render.custom(note.strings[value]));
			} else {
				inputs.appendChild(render.custom(value));
			}
		});

	if (header.hasChildNodes())
		frame.appendChild(header);
	frame.appendChild(inputs);
	if (footer.hasChildNodes())
		frame.appendChild(footer);

	return frame;
}

class Render {

	settings: FightNotePluginSettings;

	constructor(settings: FightNotePluginSettings) {
		this.settings = settings;
	}

	frame(): HTMLDivElement {
		return createDiv({ cls: [
			prefix + "frame",
			prefix + "settings__buttons" + "_" + this.settings.buttons,
			prefix + "settings__inputs-size" + "_" + this.settings.inputsSize,
			prefix + "settings__wrap-inputs" + "_" + this.settings.wrapInputs,
		]});
	}

	inputs(): HTMLDivElement {
		return createDiv({ cls: prefix + "inputs" });
	}

	header(): HTMLDivElement {
		return createDiv({ cls: prefix + "header" });
	}

	footer(): HTMLDivElement {
		return createDiv({ cls: prefix + "footer" });
	}

	title(note: Note): HTMLDivElement {
		return createDiv({ cls: prefix + "title", text: note.name });
	}

	hits(note: Note): HTMLDivElement {
		return createDiv({ cls: prefix + "hits", text: "Hits: " + note.hits });
	}

	damage(note: Note): HTMLDivElement {
		return createDiv({ cls: prefix + "damage", text: "Dmg: " + note.damage });
	}

	separator(): HTMLDivElement {
		return createDiv({ cls: prefix + "separator" });
	}

	gradient(id: string, stop000: string, stop100: string): SVGLinearGradientElement {
		const gradient: SVGLinearGradientElement =
			document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
		gradient.setAttr("id", id);
		gradient.setAttr("x2", 0.5);
		gradient.setAttr("y2", 1);
		gradient.appendChild(this.stop("0%", stop000));
		gradient.appendChild(this.stop("100%", stop100));
		return gradient;
	}

	stop(offset: string, stopColor: string):SVGStopElement {
		const stop: SVGStopElement = document.createElementNS("http://www.w3.org/2000/svg", "stop");
		stop.setAttr("offset", offset);
		stop.setAttr("stop-color", stopColor);
		return stop;
	}

	/**
	 * Render notation. SVG or HTML div will be used.
	 */
	notation(notation: Notation): HTMLDivElement {
		const container: HTMLDivElement = createDiv({ cls: notation.cls });

		if (notation.expand) {
			this.shortcut(container, notation);
		} else if (svgData[notation.svg]) {
			container.appendChild(this.svg(svgData[notation.svg]));
		} else {
			container.appendChild(this.plate(notation.input));
		}

		if (notation.tooltip) {
			if (this.settings.tooltipStyle == "default") {
				this.setTooltip(container, notation.tooltip);
			} else if (this.settings.tooltipStyle == "extend") {
				this.setTooltipExtend(container, notation.tooltip,
					notation.expand == undefined || this.settings.shortcutStyle != "expand");
			}
		}

		return container;
	}

	/**
	 * Render shortcut notation is affected by the plugin parameters.
	 */
	shortcut(container: HTMLDivElement, notation: Notation): void {
		// Expand notation, if possible.
		if (notation.expand && this.settings.shortcutStyle == "expand") {
			notation.expand.forEach(item => {
				container.appendChild(this.notation(notations[item]));
			});
		} else if (svgData[notation.svg] && this.settings.shortcutStyle == "icon") {
			container.appendChild(this.svg(svgData[notation.svg]));
		} else {
			container.appendChild(this.plate(notation.input));
		}
	}

	/**
	 * Render SVG document.
	 * Obsidian can't draw correctly SVG with the same gradient ID. Therefore, for each SVG shape,
	 * that requires a gradient, it is necessary to generate a gradient with a unique ID and associate
	 * it with that shape.
	 */
	svg(svgDocument: string): DocumentFragment {
		// Get SVG object from SVG string.
		const svg: DocumentFragment = sanitizeHTMLToDom(svgDocument);
		// Find all shapes, which require a gradient.
		const shapes: HTMLElement[] = svg.findAll("*[data-gradient]");
		// Each shape will have its own gradient with a unique identifier and color .
		const defs: HTMLElement = svg.find("defs");
		shapes.forEach(shape => {
			const gradient: string|null = shape.getAttr("data-gradient");
			if (gradient) {
				const uuid: string = "gradient-" + crypto.randomUUID();
				shape.setAttr("fill", "url(#" + uuid + ")");
				const vars: string[] = gradient.split(",");
				defs.appendChild(this.gradient(uuid, vars[0], vars[1]));
			}
		});

		return svg;
	}

	/**
	 * Set default tooltip.
	 */
	setTooltip(container: HTMLDivElement, notationTooltip: NotationTooltip): void {
		if (notationTooltip.name == undefined)
			return;

		let text: string = notationTooltip.name;
		if (notationTooltip.characters)
			text += " (" + notationTooltip.characters.join(", ") + ")";

		setTooltip(container, text);
	}

	/**
	 * Set extend tooltip.
	 */
	setTooltipExtend(container: HTMLDivElement, notationTooltip: NotationTooltip, showInput: boolean): void {
		container.addEventListener("mouseenter", (): void => {
			const body: HTMLBodyElement | null = document.querySelector("body");

			if (body && notationTooltip) {
				const tooltip: HTMLDivElement = this.tooltip(notationTooltip, showInput);
				body.appendChild(tooltip);

				const src: DOMRect = container.getBoundingClientRect();
				const dst: DOMRect = tooltip.getBoundingClientRect();

				tooltip.setCssProps({
					top: src.top + src.height + "px",
					left: src.left + (src.width / 2) - (dst.width / 2) + "px",
					animation: "scale-up-center 0.2s cubic-bezier(0.680, -0.550, 0.265, 1.550) both",
				});
			}
		});
		container.addEventListener("mouseleave", (): void => {
			document.querySelectorAll(".fight-note__tooltip")
				.forEach(e => e.remove())
		})
	}

	/**
	 * Render extend tooltip.
	 */
	tooltip(notationTooltip: NotationTooltip, showInput: boolean): HTMLDivElement {
		const tooltip: HTMLDivElement = createDiv({ cls: [prefix + "tooltip"] });

		if (notationTooltip.name || notationTooltip.characters) {
			const text: HTMLDivElement = createDiv({ cls: [prefix + "tooltip-text"] });
			tooltip.appendChild(text);

			if (notationTooltip.name)
				this.append(text, notationTooltip.name, [prefix + "tooltip-name"]);

			if (notationTooltip.characters)
				this.append(text, notationTooltip.characters.join(", "), [prefix + "tooltip-characters"]);
		}

		if (notationTooltip.input && showInput)
			this.append(tooltip, notationTooltip.input, [prefix + "tooltip-input"]);

		return tooltip;
	}

	/**
	 * Render custom text or undefined values.
	 */
	custom(text: string): HTMLDivElement {
		const container: HTMLDivElement = createDiv({ cls: [prefix + "input", prefix + "input-custom"] });
		container.appendChild(this.plate(text));
		return container;
	}

	/**
	 * Render plate notation, like WGS, SEN, DES and etc.
	 */
	plate(text: string): HTMLDivElement {
		const plate: HTMLDivElement = createDiv({ cls: prefix + "plate"});
		const base: HTMLDivElement = createDiv({ cls: prefix + "plate-base"});
		const content: HTMLDivElement = createDiv({ cls: prefix + "plate-content"});
		base.setText(text);
		content.setText(text);
		plate.appendChild(base);
		plate.appendChild(content);
		return plate;
	}

	/**
	 * Append to element simple div with text.
	 */
	append(el: HTMLElement, text: string, cls: string[]): void {
		const child: HTMLDivElement = createDiv({ cls: cls });
		child.setText(text);
		el.appendChild(child);
	}
}

class Note {
	input: string;
	name: string;
	damage: string;
	hits: string;
	strings: { [key: string]: string } = {};

	inputs(): string[] {
		return this.input
			.split(" ")
			.map((move: string) => move.trim())
			.filter((move: string): boolean => move.length > 0);
	}

	/**
	 * Replace all custom text with UUID for later replacement in place.
	 */
	buildStrings(): void {
		const matches: RegExpMatchArray[] = [...this.input.matchAll(/".*?"/g)];
		for (const key in matches) {
			const value: string = matches[key][0];
			const uuid: string = crypto.randomUUID();
			this.strings[uuid] = value.replace(/"/g, "");
			this.input = this.input.replace(value, uuid);
		}
	}
}
