import { sanitizeHTMLToDom, setTooltip } from "obsidian";
import { prefix, notations, svgData, alias, Notation, NotationTooltip } from "./fight-note-data";
import { FightNotePluginSettings } from "./settings";

export async function processFight(source: string,
								   el: HTMLElement,
								   settings: FightNotePluginSettings): Promise<void> {
	this.settings = settings;
	const parser: Parser = new Parser();
	const fightNote: FightNote = parser.parse(source);
	const fightNoteElement: HTMLDivElement = await renderFightNote(fightNote);
	el.appendChild(fightNoteElement);
}

async function renderFightNote(fightNote: FightNote): Promise<HTMLDivElement> {
	const render: Render = new Render(this.settings);
	const frame: HTMLDivElement = render.frame();
	const header: HTMLDivElement = render.header();
	const footer: HTMLDivElement = render.footer();

	if (fightNote.name)
		header.appendChild(render.title(fightNote));

	if (fightNote.hits)
		footer.appendChild(render.hits(fightNote));

	if (fightNote.damage) {
		if (footer.hasChildNodes())
			footer.appendChild(render.separator());

		footer.appendChild(render.damage(fightNote));
	}

	const inputs: HTMLDivElement = render.inputs(fightNote);

	if (header.hasChildNodes())
		frame.appendChild(header);
	frame.appendChild(inputs);
	if (footer.hasChildNodes())
		frame.appendChild(footer);

	return frame;
}

export class FightNote {
	input: string;
	name: string;
	damage: string;
	hits: string;
	inputs: string[] = [];
}

interface Correction {
	search: RegExp;
	replace: string;
}

/**
 * Convert notation string to an FightNote object.
 */
export class Parser {

	// Some rules that allow to write notations in a more free form.
	corrections: Correction[] = [
		// Remove spare signs and stack combined inputs: "1+2" => "12", "d/f => df"
		{
			search: /[+\/]/g,
			replace: "",
		},
		// Remove commas separators: "1,2, d,df" => "1 2 d df"
		{
			search: /([a-zA-Z0-9"]),/ig,
			replace: "$1 ",
		},
		// Add spaces to sloppily inputs: "uf>12" => "uf > 12"
		{
			search: /([\]\[>])/g,
			replace: " $1 ",
		},
		// Split move and action inputs: "d4" => "d 4"
		{
			search: /([udfbUDFB])([1234])/g,
			replace: "$1 $2",
		},
		// Convert slide `~` input: "df~4" => "[ df 4 ]"
		{
			search: /\s*([udfbUDFB1234]{1,2})~([udfbUDFB1234]{1,2})\s*/g,
			replace: " [ $1 $2 ] ",
		},
		// Remove extra spaces: " 1    2 " => "1 2"
		{
			search: /\s+/g,
			replace: " ",
		},
	];

	/**
	 * Correct notation, if necessary, making it more strict.
	 */
	prepare(source: string): string {
		this.corrections.forEach((correction: Correction): void => {
			source = source.replace(correction.search, correction.replace);
		});
		return source.trim();
	}

	/**
	 * Build FightNote from code block.
	 */
	parse(source: string): FightNote {
		const fightNote: FightNote = new FightNote();

		// Split lines, trim, drop empty, find lines with keyword, get value and fill FightNote properties.
		this.splitBlock(source)
			.forEach((line: string): void => {
				let data: string[] = line
					.split(/^(input|name|damage|hits):(.+?)$/);

				if (data.length > 1) {
					const property: string = data[1];
					const value: string = data[2].trim();

					if (property == "input" || property == "name" || property == "damage" || property == "hits") {
						fightNote[property] = value;
					}
				} else {
					fightNote.input = data[0];
				}
			});

		// Split inputs and custom text in quotation marks.
		// Then prepare and split inputs of notation string.
		fightNote.inputs = this.splitInputString(fightNote.input)
			.map(input => {
				if (this.custom(input))
					return [input];

				input = this.prepare(input);
				return this.splitInput(input);
			})
			.flatMap(item => item);


		return fightNote;
	}

	/**
	 * Split string by some separator, then trim and drop empty results.
	 */
	split(source: string, separator: string | RegExp): string[] {
		return source.split(separator)
			.map((move: string): string => move.trim())
			.filter((move: string): boolean => move.length > 0);
	}

	splitBlock(source: string): string[] {
		return this.split(source, /\n/);
	}

	splitInputString(source: string): string[] {
		return this.split(source, /([^"]*)(".+?")/g);
	}

	splitInput(source: string): string[] {
		return this.split(source, " ");
	}

	/**
	 * Check if string is custom text.
	 */
	custom(source: string): boolean {
		return source.startsWith("\"");
	}
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

	header(): HTMLDivElement {
		return createDiv({ cls: prefix + "header" });
	}

	footer(): HTMLDivElement {
		return createDiv({ cls: prefix + "footer" });
	}

	title(fightNote: FightNote): HTMLDivElement {
		return createDiv({ cls: prefix + "title", text: fightNote.name });
	}

	hits(fightNote: FightNote): HTMLDivElement {
		return createDiv({ cls: prefix + "hits", text: "Hits: " + fightNote.hits });
	}

	damage(fightNote: FightNote): HTMLDivElement {
		return createDiv({ cls: prefix + "damage", text: "Dmg: " + fightNote.damage });
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
	 * Render inputs of FightNote.
	 */
	inputs(fightNote: FightNote): HTMLDivElement {
		const inputs: HTMLDivElement = createDiv({ cls: prefix + "inputs" });
		fightNote.inputs
			.forEach(value => {
				if (value in this.settings.customNotations) {
					inputs.appendChild(this.notation(this.settings.customNotations[value]));
				} else if (value in notations) {
					inputs.appendChild(this.notation(notations[value]));
				} else if (value in alias) {
					inputs.appendChild(this.notation(notations[alias[value]]));
				} else {
					inputs.appendChild(this.custom(value));
				}
			});

		return inputs;
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
				.forEach(e => e.remove());
		});
	}

	/**
	 * Render extend tooltip.
	 */
	tooltip(notationTooltip: NotationTooltip, showInput: boolean): HTMLDivElement {
		const tooltip: HTMLDivElement = createDiv({ cls: [prefix + "tooltip"] });

		if (notationTooltip.name) {
			const text: HTMLDivElement = createDiv({ cls: [prefix + "tooltip-text"] });
			tooltip.appendChild(text);

			if (notationTooltip.name)
				this.append(text, notationTooltip.name, [prefix + "tooltip-name"]);

			if (notationTooltip.characters && notationTooltip.characters.length)
				this.append(text, notationTooltip.characters.join(", "), [prefix + "tooltip-characters"]);
		}

		if (notationTooltip.input && showInput)
			this.append(tooltip, notationTooltip.input, [prefix + "tooltip-input"]);

		return tooltip;
	}

	/**
	 * Render custom text.
	 * Double quotes are used to separate custom text and notation inputs, so it will be removed.
	 */
	custom(text: string): HTMLDivElement {
		const container: HTMLDivElement = createDiv({ cls: [prefix + "input", prefix + "input-custom"] });
		container.appendChild(this.plate(text.replace(/"/g, "")));
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
