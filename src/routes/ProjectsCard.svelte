<script lang="ts">
	import Card from './Card.svelte';
	import ProjectDisplay from './ProjectDisplay.svelte';
	import type { Project } from '../types';
	import { palette } from './stores';

	export let projects: Project[];
	let projectIndex = 0;

	setInterval(() => {
		projectIndex = (projectIndex + 1) % projects.length;
	}, 2500);

	$: project = projects[projectIndex];
</script>

<Card path="projects" palette={project.color} fullContent modifyGlobalPalette>
	<div class="projects">
		<div class="text">
			<h1>Projects</h1>
			<p>Things that I have created</p>
		</div>
		<ProjectDisplay {project} />
	</div>
</Card>

<style>
	.projects {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr;
		height: 100%;
	}
	/* phone media query */
	@media (max-width: 600px) {
		.projects {
			width: 100%;
			grid-template-columns: 1fr 30%;
			grid-template-rows: 1fr;
		}
	}
</style>
