import { json } from '@sveltejs/kit';
import type { ColorIcon, Skill } from '$lib/models/types';

export const GET = async () => {
	// typsecript doesn't like this, but it works
	const trees = (await import('../../skills/content/skills.json')) as unknown as {
		default: Skill[];
	};
	// get icons
	const allIconFiles = import.meta.glob('/src/routes/skills/content/icons/*.json');
	const iterableIconFiles = Object.entries(allIconFiles);
	const iconDict = await Promise.all(
		iterableIconFiles.map(async ([path, resolver]) => {
			const icon = (await resolver()) as { default: ColorIcon };
			// get first part of path
			const slug = path.split('/').pop()?.replace('.json', '') as string;
			return [slug, icon.default] as [string, ColorIcon];
		})
	).then((entries) => Object.fromEntries(entries));

	// add icons to skills
	const skills = trees.default.map((skill) => {
		const icon = iconDict[skill.name];
		return { ...skill, icon };
	});
	return json(skills);
};
