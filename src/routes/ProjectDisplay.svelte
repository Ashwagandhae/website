<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { Project } from '../types';
	import ProjectCard from './projects/ProjectCard.svelte';

	export let project: Project;
	let refresh = false;
	const possibleDirections = [
		{ x: 15, y: 0 },
		{ x: -15, y: 0 },
		{ x: 0, y: 15 },
		{ x: 0, y: -15 }
	];
	let directionIndex: number = Math.floor(Math.random() * possibleDirections.length);
	let direction: { x: number; y: number };
	let oppositeDirection: { x: number; y: number };
	function onProjectUpdate() {
		directionIndex += Math.floor(Math.random() * 3) + 1;
		directionIndex %= possibleDirections.length;
		direction = possibleDirections[directionIndex];
		oppositeDirection = {
			x: -direction.x,
			y: -direction.y
		};

		refresh = !refresh;
	}
	$: project, onProjectUpdate();
</script>

<div class="display">
	<div class="icon">
		{#key refresh}
			<div
				class="transition"
				in:fly|local={{ ...direction, duration: 400, delay: 400 }}
				out:fly|local={{ ...oppositeDirection, duration: 400 }}
			>
				{@html project.icon}
			</div>
		{/key}
	</div>
</div>

<style>
	.display {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
	}
	.icon {
		width: 50%;
		height: 80%;
		position: relative;
	}
	.transition {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.icon :global(svg) {
		height: 100%;
		width: 100%;

		transition: all var(--tran) ease;
		opacity: 0.7;
	}
	@media (max-width: 600px) {
		.icon {
			width: 100%;
			height: 100%;
			aspect-ratio: 1;
		}
		.display {
			aspect-ratio: 1;
			height: auto;
		}
	}
</style>
