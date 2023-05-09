export type Project = {
	name: string;
	description: string;
	longDescription?: string;
	links: { icon: string; url: string; label: string }[];
	slug: string;
	iframe?: string;
	image?: string;
	date: string;
	tags: string[];
	icon: ColorIcon;
};

export type ColorPalette = [number, number, number];

export type Message = {
	text: string;
	id: number;
	count: number;
};

export type Skill = {
	name: string;
	icon: ColorIcon;
	start: number;
	big?: boolean;
	long?: boolean;
};
export type ColorIcon = {
	svg: string;
	color: ColorPalette;
};
export type RawSkillTree =
	| string
	| {
			name: string;
			start?: number;
			children?: RawSkillTree[];
			icon?: ColorIcon;
	  };
