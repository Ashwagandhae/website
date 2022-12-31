import { json } from '@sveltejs/kit';
import type { Project } from '../../../types';

export const GET = async () => {
	// first get svgs
	const allSvgFiles = import.meta.glob('/src/routes/projects/content/*.svg', { as: 'raw' });
	const iterableSvgFiles = Object.entries(allSvgFiles);

	const svgDict = (
		await Promise.all(
			iterableSvgFiles.map(async ([path, resolver]) => {
				const svg = (await resolver()) as string;

				// get last part of path
				const slug = path.split('/').pop()?.split('.').shift() as string;
				return { svg: svg, slug };
			})
		)
	).reduce((acc, path) => {
		acc[path.slug] = path.svg;
		return acc;
	}, {} as { [key: string]: string });

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
		if (Object.hasOwn(svgDict, project.slug)) {
			project.icon = svgDict[project.slug];
		}
	});

	return json(allProjects);
};
