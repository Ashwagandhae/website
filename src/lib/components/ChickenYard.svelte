<script>
	import Chicken from './Chicken.svelte';

	let chickenAmount = 5;
</script>

<div>
	{#each Array(chickenAmount) as _}
		<Chicken />
	{/each}
</div>

<style>
	div {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
