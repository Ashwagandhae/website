<script lang="ts">
	import Card from '../Card.svelte';
	import type { SkillTree } from '../../types';

	export let tree: SkillTree;
</script>

<div class="skill" style="--children-amount: {tree.children.length}">
	<Card fullContent palette={tree.icon?.color} modifyGlobalPalette hoverable>
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
	<div class="children">
		{#each tree.children as child}
			<svelte:self tree={child} />
		{/each}
	</div>
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
	@media (max-width: 600px) {
		.skill {
			flex-direction: column;
		}
		.skill > :global(.card) {
			width: calc(100vw - var(--side-padding-x) * 2);
		}
		.children {
			/* fill the width */
			width: 100%;
		}
		.header > svg {
			width: 1.5rem;
			height: 1.5rem;
		}
	}
</style>
