<script lang="ts">
	import { onMount } from 'svelte';
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

<div on:scroll bind:this={element} class:stuck>
	<slot />
</div>

<style>
	div {
		position: relative;
		display: grid;
		gap: var(--gap);
		grid-template-rows: 1fr;
		grid-template-columns: 1fr auto;
		height: min-content;
		position: sticky;
		z-index: 10000;
		top: -1px;
		padding-top: calc(var(--gap) + 1px);
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
