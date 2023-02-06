<script lang="ts">
	import { onMount } from 'svelte';
	export let single = false;
	let element: HTMLElement;
	let stuck = false;
	onMount(() => {
		const observer = new IntersectionObserver(
			([e]) => {
				stuck = e.intersectionRatio < 1;
			},
			{
				threshold: [1]
			}
		);

		observer.observe(element);
	});
</script>

<div on:scroll bind:this={element} class:stuck class:single>
	<slot />
</div>

<style>
	div {
		display: grid;
		gap: var(--gap);
		grid-template-rows: 1fr;
		grid-template-columns: 1fr auto;
		height: min-content;
		z-index: 100;
		position: sticky;
		top: -1px;
		padding-top: calc(var(--gap) + 1px);
	}
	.single {
		grid-template-columns: 1fr;
	}
	div::after {
		content: '';
		position: absolute;
		left: 0;
		width: 100%;
		height: calc(100% + 3rem);
		z-index: -1;
		opacity: 0;
		bottom: -3rem;
		pointer-events: none;
		transition: opacity var(--tran) ease, background var(--tran) ease;
		background: linear-gradient(180deg, var(--back) 0%, var(--back) 25%, transparent 100%);
	}
	div.stuck::after {
		opacity: 1;
	}
</style>
