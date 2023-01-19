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
	icon: {
		svg: string;
		color: ColorPalette;
	};
};

export type ColorPalette = [number, number, number];

export type Message = {
	text: string;
	id: number;
	count: number;
};

export type SkillTree = {
	name: string;
	start: number;
	children: SkillTree[];
	icon?: ColorIcon;
};
export type ColorIcon = {
	svg: string;
	color: [number, number, number];
};
export type RawSkillTree =
	| string
	| {
			name: string;
			start?: number;
			children?: RawSkillTree[];
			icon?: ColorIcon;
	  };
