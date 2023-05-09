<script lang="ts">
	import Card from './Card.svelte';
	import type { Skill } from '$lib/models/types';
	import { messenger } from '$lib/models/stores';

	export let skill: Skill;
	let params = new URLSearchParams();
	params.set('tags', skill.name);
</script>

<div class="skill" class:big={skill.big} class:long={skill.long}>
	<Card
		fullContent
		palette={skill.icon?.color}
		modifyGlobalPalette
		hoverable
		path="projects?{params.toString()}"
		onLinkClick={() => messenger.addMessage('Searched projects for ' + skill.name)}
	>
		<div class="header">
			{#if skill.icon}
				<svg
					width="500"
					height="500"
					viewBox="0 0 500 500"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					{@html skill.icon?.svg}
				</svg>
			{/if}
			<h2>{skill.name}</h2>
		</div>
		<p>since {skill.start?.toString()}</p>
	</Card>
</div>

<style>
	h2 {
		/* no wrap */
		white-space: nowrap;
	}
	.skill.big {
		grid-column: span 2;
		grid-row: span 2;
	}
	.skill.long {
		grid-column: span 2;
	}
	.skill > :global(.card) {
		width: auto;
		min-width: min-content;
		height: 100%;
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
		/* .skill {
			flex-direction: column;
		}
		.skill > :global(.card) {
			width: calc(100% - var(--gap) * 2);
		}
		.header > svg {
			width: 1.5rem;
			height: 1.5rem;
		} */
	}
</style>
