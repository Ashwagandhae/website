<script lang="ts">
	import Card from '../Card.svelte';
	import TopCards from '../TopCards.svelte';
	import SkillCard from './SkillCard.svelte';
	import type { SkillTree } from '../../types';

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
		overflow: scroll;
		gap: var(--gap);
	}
</style>
