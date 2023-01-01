<script lang="ts">
	import { onDestroy } from 'svelte';
	import type { Project } from '../../types';
	import Card from '../Card.svelte';
	import { palette } from '../stores';

	export let project: Project;

	let hover: boolean = false;
	function onHoverChange() {
		if (hover) {
			palette.set(project.color);
		} else {
			palette.set(null);
		}
	}

	$: hover, onHoverChange();
</script>

<Card
	path="./projects/{project.slug}"
	square
	on:mouseenter={() => (hover = true)}
	on:mouseleave={() => (hover = false)}
	palette={project.color}
>
	<div class="content">
		{@html project.icon}
		<h2>{project.name}</h2>
	</div>
</Card>

<style>
	.content {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		flex-direction: column;
		position: relative;
		height: 100%;
	}
	.content > :global(svg) {
		height: 50%;
		width: 50%;

		transition: all var(--tran) ease;
		opacity: 0.7;
	}
	:global(.card:hover) .content > :global(svg) {
		transform: translateY(1.5rem) scale(1.5);
		opacity: 1;
	}
	.content > h2 {
		/* prevent wrapping and use ellipses */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		height: 1em;
		transition: all var(--tran) ease;
	}
	/* hide title */
	:global(.card:hover) .content > h2 {
		transform: translateY(100%);
		opacity: 0;
	}
</style>
