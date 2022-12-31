export type Project = {
	name: string;
	description: string;
	longDescription?: string;
	links: { [key: string]: string };
	slug: string;
	iframe?: string;
	tags?: string[];
	color: ColorPalette;
	icon?: string;
};

export type ColorPalette = [number, number, number];
