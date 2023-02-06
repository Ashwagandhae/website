<script lang="ts">
	import { base } from '$app/paths';

	export let name: string;
	export let interactive: boolean;

	let params = new URLSearchParams();
	params.set('tags', name);
</script>

{#if interactive}
	<a class="tag" data-sveltekit-noscroll href="{base}/projects?{params.toString()}">{name}</a>
{:else}
	<span class="tag">{name}</span>
{/if}

<style>
	.tag {
		display: block;

		border-radius: var(--radius-small);
		background: var(--back-2);
		box-sizing: border-box;
		font-size: 1rem;
		color: var(--text-weak);
		transition: background var(--tran-short) ease;
		padding: 0.5rem;

		text-decoration: none;
		white-space: nowrap;
	}
	a.tag:hover {
		background: var(--back-2-hover);
		color: var(--text);
	}
</style>
