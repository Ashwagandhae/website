<script lang="ts">
	import { page } from '$app/stores';
	import Card from './Card.svelte';
	import TopCards from './TopCards.svelte';
</script>

<TopCards>
	<Card>
		<h1>Error {$page.status.toString()}</h1>
		<p>
			{$page.error?.message}
		</p>
	</Card>
</TopCards>
