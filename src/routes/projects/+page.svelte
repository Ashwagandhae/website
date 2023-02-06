<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import TopCards from '$lib/components/TopCards.svelte';
	import type { Project } from '$lib/models/types';
	import Tags from '$lib/components/Tags.svelte';

	export let data: { projects: Project[] };
	// get location.search query params
	let searchTags: string[] = [];
	if (typeof window !== 'undefined') {
		const search = new URLSearchParams(window.location.search);
		searchTags =
			search
				.get('tags')
				?.split(',')
				.filter((tag) => tag !== '') ?? [];
	}
	let filteredProjects: Project[] = data.projects.filter((project) => {
		if (searchTags.length === 0) return true;
		if (project.tags == null) return false;
		return searchTags.every((tag) => project.tags?.includes(tag));
	});
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Things that I've created" />
</svelte:head>

<TopCards single={searchTags.length == 0}>
	<Card path="./">
		<h1>Projects</h1>
		<p>Things that I've created</p>
	</Card>
	{#if searchTags.length > 0}
		<Card>
			<h2>Filter</h2>
			<Tags tags={searchTags} capWidth />
		</Card>
	{/if}
</TopCards>

<div class="content">
	<div class="grid" style="--card-amount: {filteredProjects.length}">
		{#each filteredProjects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</div>

<style>
	.content {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.grid {
		--min-card-size: 15rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(var(--min-card-size), 1fr));
		grid-gap: var(--gap);
		height: min-content;
		width: min(
			calc(100vw - var(--side-padding-x) * 2),
			calc((var(--min-card-size) + var(--gap)) * var(--card-amount))
		);
	}
</style>
