<script lang="ts">
	import { page } from '$app/stores';
	import Card from './Card.svelte';
	import TopCards from './TopCards.svelte';

	const emojis: { [key: number]: string } = {
		// TODO add the rest!
		420: '🫠',
		500: '💥'
	};
</script>

<TopCards>
	<Card>
		<h1>Error {$page.status.toString()}</h1>
		<p>
			{$page.error?.message}
		</p>
	</Card>
</TopCards>
