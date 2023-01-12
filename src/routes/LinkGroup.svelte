<script lang="ts">
	import Link from './Link.svelte';
	export let links: {
		icon: string;
		label: string;
		link?: string;
		copy?: string;
		callback?: () => void;
	}[] = [];
</script>

<ul class="links">
	{#each links as link}
		<Link {...link} />
	{/each}
</ul>

<style>
	.links {
		/* remove ul style */
		list-style: none;
		padding: 0;
		margin: 0;

		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-around;
		align-items: center;

		flex-direction: row;
		z-index: 2;
		gap: 0.5rem;
	}
	@media (max-width: 600px) {
		.links {
			flex-direction: column;
		}
	}
</style>
