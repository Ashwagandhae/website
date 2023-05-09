<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import TopCards from '$lib/components/TopCards.svelte';
	import SkillCard from '$lib/components/SkillCard.svelte';
	import type { Skill } from '$lib/models/types';

	export let data: { skills: Skill[] };
</script>

<svelte:head>
	<title>Skills</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<TopCards single>
	<Card title="Skills" subtitle="Stuff that I have learned" path="./" />
</TopCards>
<div class="content">
	{#each data.skills as skill}
		<SkillCard {skill} />
	{/each}
</div>

<style>
	.content {
		display: grid;
		width: calc(100% - var(--gap));
		/* 1rem padding + 2rem height + 2rem height + 1rem padding */
		grid-template-rows: repeat(auto-fill, calc(1rem + 2rem + 2rem + 1rem));
		grid-template-columns: 50% 50%;
		grid-auto-flow: row dense;
		grid-gap: var(--gap);
	}
	@media (max-width: 600px) {
		.content {
			grid-template-columns: 100%;
		}
	}
</style>
