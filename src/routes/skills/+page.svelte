<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import TopCards from '$lib/components/TopCards.svelte';
	import SkillCard from '$lib/components/SkillCard.svelte';
	import type { SkillTree } from '$lib/models/types';

	export let data: { tree: SkillTree[] };
</script>

<svelte:head>
	<title>Skills</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<TopCards single>
	<Card title="Skills" subtitle="Stuff that I have learned" path="./" />
</TopCards>
<div class="content">
	{#each data.tree as tree}
		<SkillCard {tree} />
	{/each}
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		gap: var(--gap);
	}
</style>
