import { json } from '@sveltejs/kit';
import type { Project, ColorPalette } from '../../../types';

export const GET = async () => {
	// first get svgs
	const iconFiles = Object.entries(import.meta.glob('/src/routes/projects/content/icons/*.json'));

	const iconDict = Object.fromEntries(
		await Promise.all(
			iconFiles.map(async ([path, resolver]) => {
				const svg = (await resolver()) as { svg: string; color: ColorPalette };

				const slug = path.split('/').pop()?.replace('.json', '') as string;
				return [slug, svg] as [string, { svg: string; color: ColorPalette }];
			})
		)
	);

	const allProjectFiles = import.meta.glob('/src/routes/projects/content/*.json');
	const iterableProjectFiles = Object.entries(allProjectFiles);

	const allProjects = await Promise.all(
		iterableProjectFiles.map(async ([path, resolver]) => {
			const project = (await resolver()) as { default: Omit<Project, 'slug'> };
			// get last part of path
			const slug = path.split('/').pop()?.split('.').shift() as string;
			return { ...project.default, slug };
		})
	);
	// add svgs to projects
	allProjects.forEach((project) => {
		if (Object.hasOwn(iconDict, project.slug)) {
			project.icon = iconDict[project.slug];
		}
	});

	return json(allProjects as Project[]);
};
