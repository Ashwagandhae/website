<script lang="ts">
	import Card from './Card.svelte';
	import IconDisplay from './IconDisplay.svelte';
	import type { ColorIcon } from '$lib/models/types';

	export let icons: ColorIcon[];
	export let title: string;
	export let subtitle: string;
	export let path: string;
	let iconIndex = 0;

	setInterval(() => {
		iconIndex = (iconIndex + 1) % icons.length;
	}, 2500);

	$: icon = icons[iconIndex];
</script>

<Card {path} palette={icon.color} fullContent modifyGlobalPalette>
	<div class="icons">
		<div class="text">
			<h1>{title}</h1>
			<p>{subtitle}</p>
		</div>
		<IconDisplay {icon} />
	</div>
</Card>

<style>
	.icons {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr;
		height: 100%;
	}
	/* phone media query */
	@media (max-width: 600px) {
		.icons {
			width: 100%;
			grid-template-columns: 1fr 30%;
			grid-template-rows: 1fr;
		}
	}
</style>
