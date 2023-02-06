import { json } from '@sveltejs/kit';

import type { ColorIcon } from '$lib/models/types';

export const GET = async () => {
	const allIconFiles = import.meta.glob('/src/routes/skills/content/icons/*.json');
	const iterableIconFiles = Object.entries(allIconFiles);
	const icons = await Promise.all(
		iterableIconFiles.map(async ([_, resolver]) => {
			const icon = (await resolver()) as { default: ColorIcon };
			// get first part of path
			return icon.default as ColorIcon;
		})
	);

	return json(icons);
};
