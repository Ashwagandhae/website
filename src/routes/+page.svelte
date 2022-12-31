<script>
	import Card from './Card.svelte';
	import TopCards from './TopCards.svelte';
	import LinkGroup from './LinkGroup.svelte';
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
				{ icon: 'gitHub', link: 'https://github.com/Ashwagandhae/' },
				{ icon: 'linkedIn', link: 'https://www.linkedin.com/in/julian-bauer-32823b246/' },
				{ icon: 'mail', link: 'mailto:julianlianbauer@gmail.com' }
			]}
		/>
	</Card>
</TopCards>

<div class="content">
	<Card title="Projects" path="projects" subtitle="Things that I have created" />
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
	/* phone media query */
	@media (max-width: 600px) {
		.content {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
		}
		h2 {
			font-size: 0rem;
		}
	}
</style>
