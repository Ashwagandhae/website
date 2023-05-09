import type { Load } from '@sveltejs/kit';
import { base } from '$app/paths';

export const load: Load = async ({ fetch }) => {
	const response = await fetch(`${base}/api/skills`);
	const skills = await response.json();
	return {
		skills
	};
};
