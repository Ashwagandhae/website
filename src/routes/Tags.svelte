<script lang="ts">
	import Tag from './Tag.svelte';

	export let tags: string[] = [];
	export let capWidth: boolean = false;
</script>

<div class="tags">
	<div class="row" class:capWidth>
		{#each tags as tag}
			<Tag name={tag} />
		{/each}
	</div>
</div>

<style>
	.tags {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		overflow: scroll;
	}
	.row {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--pad-small);
		color: var(--text-weak);
		font-family: var(--font-2);
		width: 100%;
	}
	.capWidth {
		width: min-content;
		max-width: 15rem;
		flex-wrap: nowrap;
		overflow: scroll;
	}
</style>
