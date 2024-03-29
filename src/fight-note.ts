import { sanitizeHTMLToDom, setTooltip } from "obsidian";
import { prefix, notation, svgData, alias, Notation } from "./fight-note-data";
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
			} else if (value in notation) {
				inputs.appendChild(render.notation(notation[value]));
			} else if (value in alias) {
				inputs.appendChild(render.notation(notation[alias[value]]));
			} else if (note.strings[value]) {
				inputs.appendChild(render.custom(note.strings[value]));
			} else {
				inputs.appendChild(render.custom(value));
			}
		});

	if (!header.hasChildNodes())
		header.addClass("fight-note__hidden");
	if (!footer.hasChildNodes())
		footer.addClass("fight-note__hidden");

	frame.appendChild(header);
	frame.appendChild(inputs);
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
	 * Obsidian can't draw correctly SVG with the same gradient ID. Therefore, for each SVG shape,
	 * that requires a gradient, it is necessary to generate a gradient with a unique ID and associate
	 * it with that shape.
	 */
	notation(notation: Notation): HTMLDivElement {
		const container: HTMLDivElement = createDiv({ cls: notation.cls });

		if (svgData[notation.svg]) {
			// Get SVG object from SVG string.
			const svg: DocumentFragment = sanitizeHTMLToDom(svgData[notation.svg]);
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

			container.appendChild(svg);
		} else {
			container.appendChild(this.plate(notation.input))
		}

		if (notation.tooltip)
			setTooltip(container, notation.tooltip!);

		return container;
	}

	/**
	 * Render custom text or undefined values.
	 */
	custom(text: string): HTMLDivElement {
		const container: HTMLDivElement = createDiv({ cls: [prefix + "input", prefix + "input-custom"] });
		container.appendChild(this.plate(text))
		return container;
	}

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
