<script lang="ts">
	import Icon from './Icon.svelte';
	export let icon: string;
	export let link: string;
</script>

<a href={link} target="_blank" rel={link} class="link">
	<Icon name={icon} size="1.5rem" />
</a>

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
</style>
