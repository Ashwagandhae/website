<script lang="ts">
	import CardGroup from './CardGroup.svelte';
	import Messages from './Messages.svelte';
	import { getPaletteStyle } from './palette';
	import { palette } from './stores';
	import './styles.css';
	import PageTransition from './PageTransition.svelte';
</script>

<div class="root" style={getPaletteStyle($palette)}>
	<div class="back" />
	<Messages />
	<main>
		<PageTransition>
			<CardGroup>
				<slot />
			</CardGroup>
		</PageTransition>
		<footer>
			<p>
				Fonts: <a href="https://github.com/mona-sans">Mona Sans</a> by Github,
				<a href="https://www.jetbrains.com/lp/mono/">JetBrains Mono</a> by JetBrains.
			</p>
		</footer>
	</main>
</div>

<style>
	main {
		display: flex;
		justify-content: center;
		position: relative;
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
