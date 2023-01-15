<script lang="ts">
	import type { Project } from '../../types';
	import Card from '../Card.svelte';

	export let project: Project;
</script>

<Card path="./projects/{project.slug}" square palette={project.icon.color} modifyGlobalPalette>
	<div class="content">
		<p>{project.description}</p>
		<svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
			{@html project.icon.svg}
		</svg>
		<h2>{project.name}</h2>
	</div>
</Card>

<style>
	.content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		position: relative;
		height: 100%;
		padding-bottom: 1rem;
		box-sizing: border-box;
	}
	.content > svg {
		height: 50%;
		width: 50%;

		transition: all var(--tran) ease;
		opacity: 0.7;
	}
	:global(.card:hover) .content > svg {
		transform: translateY(3rem) scale(1.5);
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
	.content > p {
		width: 100%;
		height: 0;
		opacity: 0;
		transition: all var(--tran) ease;
		text-align: center;
		color: var(--text);
	}
	/* show para */
	:global(.card:hover) .content > p {
		opacity: 1;
	}
</style>
