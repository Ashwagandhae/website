<script lang="ts">
	import Card from '../Card.svelte';
	import type { SkillTree } from '../../types';
	import { messenger } from '../stores';

	export let tree: SkillTree;
	let params = new URLSearchParams();
	params.set('tags', tree.name);
	let paramsString = params.toString();
</script>

<div class="skill" style="--children-amount: {tree.children.length}">
	<Card
		fullContent
		palette={tree.icon?.color}
		modifyGlobalPalette
		hoverable
		path="projects?{paramsString}"
		onLinkClick={() => messenger.addMessage('Searched projects for ' + tree.name)}
	>
		<div class="header">
			{#if tree.icon}
				<svg
					width="500"
					height="500"
					viewBox="0 0 500 500"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					{@html tree.icon?.svg}
				</svg>
			{/if}
			<h2>{tree.name}</h2>
		</div>
		<p>since {tree.start?.toString()}</p>
	</Card>
	{#if tree.children.length > 0}
		<div class="children">
			{#each tree.children as child}
				<svelte:self tree={child} />
			{/each}
		</div>
	{/if}
</div>

<style>
	h2 {
		/* no wrap */
		white-space: nowrap;
	}
	.skill {
		display: flex;
		flex-direction: row;
		gap: var(--gap);
	}
	.skill > :global(.card) {
		width: calc((100vw - var(--side-padding-x) * 2 - var(--gap) * 3) * 0.3);
		min-width: min-content;
	}
	.children {
		display: flex;
		flex-direction: column;
		gap: var(--gap);
		/* fill the width */
	}
	.header {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
	}
	.header > svg {
		width: 2rem;
		height: 2rem;
	}
	/* mobile */
	@media (max-width: 1000px) {
		.skill {
			flex-direction: column;
		}
		.skill > :global(.card) {
			width: calc(100% - var(--gap) * 2);
		}
		.children {
			width: 90%;
			padding-left: 10%;
		}
		.header > svg {
			width: 1.5rem;
			height: 1.5rem;
		}
	}
</style>
