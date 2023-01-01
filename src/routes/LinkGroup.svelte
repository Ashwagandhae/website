<script lang="ts">
	import Link from './Link.svelte';
	export let links: { icon: string; label: string; link?: string; copy?: string }[] = [];
</script>

<div class="top">
	{#each links as link}
		<Link {...link} />
	{/each}
</div>

<style>
	.top {
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
		.top {
			flex-direction: column;
		}
	}
</style>
