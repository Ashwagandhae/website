<script lang="ts">
	import { onMount } from 'svelte';
	import CardGroup from './CardGroup.svelte';
	import { getPaletteStyle } from './palette';
	import { palette } from './stores';
	import './styles.css';

	let style = '';
	// only run onMount to avoid server-side errors
	onMount(() => {
		palette.subscribe((value) => {
			document.body.style.cssText = getPaletteStyle(value);
		});
	});
</script>

<main>
	<div class="container">
		<CardGroup>
			<slot />
		</CardGroup>
	</div>
</main>
<footer>
	<p>
		Fonts: <a href="https://github.com/mona-sans">Mona Sans</a> by Github,
		<a href="https://www.jetbrains.com/lp/mono/">JetBrains Mono</a> by JetBrains.
	</p>
</footer>

<style>
	main {
		display: flex;
		justify-content: center;
	}
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		height: var(--footer-height);
		opacity: 0;
		font-family: var(--font-2);
		font-size: 1rem;
		color: var(--text-weak);
		transition: opacity var(--tran-long) ease;
	}
	footer:hover {
		opacity: 1;
	}
</style>
