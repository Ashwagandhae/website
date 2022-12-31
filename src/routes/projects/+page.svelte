<script lang="ts">
	import Card from '../Card.svelte';
	import ProjectCard from './ProjectCard.svelte';
	import TopCards from '../TopCards.svelte';
	import type { Project } from '../../types';

	export let data: { projects: Project[] };
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<TopCards>
	<Card title="Projects" subtitle="Things that I've created" path="" />
	<Card>
		<h2>Filter</h2>
	</Card>
</TopCards>

<div class="content card-square">
	{#each data.projects as project}
		<ProjectCard {project} />
	{/each}
</div>

<style>
	.content {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		grid-gap: var(--gap);
	}
</style>
