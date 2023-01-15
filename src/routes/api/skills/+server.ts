import { json } from '@sveltejs/kit';
import type { SkillTree, RawSkillTree, ColorIcon } from '../../../types';

type RawChildrenSkillTree = Exclude<SkillTree, 'children'> & {
	children: RawSkillTree[];
};

function normalizeTree(
	parent: RawChildrenSkillTree | null,
	tree: RawSkillTree,
	iconDict: { [key: string]: ColorIcon }
): SkillTree {
	const ret: RawSkillTree = typeof tree === 'string' ? { name: tree } : { ...tree };
	ret.start ??= parent?.start;
	ret.children ??= [];
	// ret is now a RawChildrenSkillTree
	ret.children = ret.children.map((child) =>
		normalizeTree(ret as RawChildrenSkillTree, child, iconDict)
	);
	ret.icon = iconDict[ret.name];
	// ret is now a SkillTree
	// sort children by start date
	(ret as SkillTree).children.sort((a, b) => a.start - b.start);
	return ret as SkillTree;
}

export const GET = async () => {
	// typsecript doesn't like this, but it works
	const trees = (await import('/src/routes/skills/content/tree.json')) as unknown as {
		default: RawSkillTree[];
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

	// convert from RawSkillTree to SkillTree, and add icons
	const normalizedTrees = trees.default.map((tree) => normalizeTree(null, tree, iconDict));
	// sort trees by start date
	normalizedTrees.sort((a, b) => a.start - b.start);

	return json(normalizedTrees);
};
