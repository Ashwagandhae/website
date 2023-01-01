<script lang="ts">
	import Card from './Card.svelte';
	import TopCards from './TopCards.svelte';
	import LinkGroup from './LinkGroup.svelte';
	import ProjectDisplay from './ProjectDisplay.svelte';
	import { palette } from './stores';
	import type { Project } from '../types';

	$palette = null;

	export let data: {
		projects: Project[];
	};

	let projectIndex = 0;

	setInterval(() => {
		projectIndex = (projectIndex + 1) % data.projects.length;
	}, 2500);
</script>

<svelte:head>
	<title>Julian's website</title>
	<meta name="description" content="Julian's personal website" />
</svelte:head>

<TopCards>
	<Card title="Hello, I'm Julian" subtitle="Coder, student, human" />
	<Card>
		<h2>Contacts</h2>
		<LinkGroup
			links={[
				{ icon: 'gitHub', link: 'https://github.com/Ashwagandhae/', label: 'Link to GitHub' },
				{
					icon: 'linkedIn',
					link: 'https://www.linkedin.com/in/julian-bauer-32823b246/',
					label: 'Link to LinkedIn'
				},
				{ icon: 'mail', copy: 'julianlianbauer@gmail.com', label: 'Copy email' }
			]}
		/>
	</Card>
</TopCards>

<div class="content">
	<Card path="projects" palette={data.projects[projectIndex].color} fullContent>
		<div class="projects">
			<div class="text">
				<h1>Projects</h1>
				<p>Things that I have created</p>
			</div>
			<ProjectDisplay project={data.projects[projectIndex]} />
		</div>
	</Card>
	<Card title="Skills" subtitle="Stuff that I have learned" />
</div>

<style>
	.content {
		display: grid;
		gap: var(--gap);
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
	}
	.projects {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr;
		height: 100%;
	}
	/* phone media query */
	@media (max-width: 600px) {
		.content {
			grid-template-columns: 1fr;
			grid-template-rows: min-content min-content;
		}
		h2 {
			font-size: 0rem;
		}
		.projects {
			width: 100%;
			grid-template-columns: 1fr 30%;
			grid-template-rows: 1fr;
		}
	}
</style>
