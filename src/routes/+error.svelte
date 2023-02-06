<script lang="ts">
	import { page } from '$app/stores';
	import Card from '$lib/components/Card.svelte';
	import TopCards from '$lib/components/TopCards.svelte';

	let customMessages: { [key: number]: string } = {
		404: `golly gee willikers, looks like you've taken a wrong turn!!!! looks like our army of busy 
					little worker bees must have filed the page you were looking for in the wrong filing 
					cabinet!!!! mayhaps you could try looking at one of our other many pages? ?? i am sure 
					you would find something else you would like instead?? SO sorry you did not find what you 
					were looking for!! may the force be with you fellow geek! :3:3:3`
	};
</script>

<TopCards>
	<Card>
		<h1>Error {$page.status.toString()}</h1>
		<p>
			{customMessages[$page.status] ?? $page.error?.message}
		</p>
	</Card>
</TopCards>
