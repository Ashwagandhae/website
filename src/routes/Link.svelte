<script lang="ts">
	import Icon from './Icon.svelte';
	import { messenger } from './stores';
	export let icon: string;
	export let label: string;
	export let link: string | null = null;
	export let copy: string | null = null;

	function copyToClipboard() {
		navigator.clipboard.writeText(copy as string);
		messenger.addMessage(`Copied to clipboard`);
	}
</script>

{#if link}
	<a href={link} target="_blank" rel={link} class="link" aria-label={label}>
		<Icon name={icon} size="1.5rem" />
	</a>
{:else if copy != null}
	<button on:click={copyToClipboard} class="link" aria-label={label}>
		<Icon name={icon} size="1.5rem" />
	</button>
{/if}

<style>
	.link {
		display: block;

		border-radius: var(--radius-small);
		background: var(--back-2);
		padding: 0.5rem;
		box-sizing: border-box;
		color: var(--text);
		transition: all var(--tran-short) ease-in-out;

		text-decoration: none;
	}
	.link:hover {
		background: var(--back-2-hover);
	}
	/* remove button styles */
	button {
		background: none;
		border: none;
		padding: 0;
	}
</style>
