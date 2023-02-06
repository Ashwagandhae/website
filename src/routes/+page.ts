// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import type { Load } from '@sveltejs/kit';
import { base } from '$app/paths';
import type { Project } from '$lib/models/types';

export const load: Load = async ({ fetch }) => {
	const projectResponse = await fetch(`${base}/api/projects`);
	const projectIcons = (await projectResponse.json()).map((project: Project) => ({
		...project.icon
	}));
	const skillResponse = await fetch(`${base}/api/skill-icons`);
	const skillIcons = await skillResponse.json();
	return {
		projectIcons,
		skillIcons
	};
};
