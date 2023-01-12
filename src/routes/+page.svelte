<script lang="ts">
	import Card from './Card.svelte';
	import TopCards from './TopCards.svelte';
	import LinkGroup from './LinkGroup.svelte';
	import ProjectsCard from './ProjectsCard.svelte';
	import { palette } from './stores';
	import type { Project } from '../types';

	$palette = null;

	export let data: {
		projects: Project[];
	};
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
	<ProjectsCard projects={data.projects} />
	<Card title="Skills" subtitle="Stuff that I have learned" path="skills" />
</div>

<style>
	.content {
		display: grid;
		gap: var(--gap);
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
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
	}
</style>
