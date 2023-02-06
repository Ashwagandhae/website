<script lang="ts">
	import { onMount } from 'svelte';
	export let name: string;
	export let size: string = '1rem';

	let icons: { [name: string]: { svg: string } };

	const iconFiles = Object.entries(import.meta.glob('/src/lib/icons/*.json'));

	Promise.all(
		iconFiles.map(async ([path, resolver]) => {
			const svg = (await resolver()) as { svg: string };

			const slug = path.split('/').pop()?.replace('.json', '') as string;
			return [slug, svg] as [string, { svg: string }];
		})
	).then((iconsImport) => {
		icons = Object.fromEntries(iconsImport);
	});

	let displayIcon: { svg: string } | undefined;
	function findIcon() {
		if (icons == undefined) return;
		displayIcon = icons[name];
	}
	onMount(findIcon);
	$: name, icons, findIcon();
</script>

<svg
	style={`width:${size};height:${size};`}
	viewBox="0 0 {500} {500}"
	fill="none"
	stroke="var(--text)"
>
	{@html displayIcon?.svg}
</svg>

<style>
	svg {
		display: block;
		margin: auto;
		color: inherit;
		pointer-events: none;
	}
</style>
