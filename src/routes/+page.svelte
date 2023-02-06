<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import TopCards from '$lib/components/TopCards.svelte';
	import LinkGroup from '$lib/components/LinkGroup.svelte';
	import IconDisplayCard from '$lib/components/IconDisplayCard.svelte';
	import { palette } from '$lib/models/stores';
	import type { ColorIcon } from '$lib/models/types';

	$palette = null;

	export let data: {
		projectIcons: ColorIcon[];
		skillIcons: ColorIcon[];
	};
</script>

<svelte:head>
	<title>Julian's website</title>
	<meta name="description" content="Julian's personal website" />
</svelte:head>

<TopCards>
	<Card title="Hello, I'm Julian" subtitle="Coder, student, human" path="about" />
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
	<IconDisplayCard
		icons={data.projectIcons}
		title="Projects"
		subtitle="Things that I have created"
		path="projects"
	/>
	<IconDisplayCard
		icons={data.skillIcons}
		title="Skills"
		subtitle="Stuff that I know"
		path="skills"
	/>
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
