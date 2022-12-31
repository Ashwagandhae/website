<script lang="ts">
	import { base } from '$app/paths';
	import type { ColorPalette } from '../types';
	import { sineIn } from 'svelte/easing';
	import { getPaletteStyle } from './palette';

	export let title: string | null = null;
	export let path: string | null = null;
	export let subtitle: string | null = null;
	export let square = false;
	export let hideBack = false;
	export let palette: ColorPalette | null = null;
	$: style = getPaletteStyle(palette);
</script>

<div
	class="card"
	class:hideBack
	class:square
	class:hoverable={path != null}
	{style}
	on:mouseenter
	on:mouseleave
>
	{#if path != null}
		<a href="{base}/{path}">{title}</a>
	{/if}
	{#if title != null}
		<h1>{title}</h1>
	{/if}
	{#if subtitle != null}
		<p>{subtitle}</p>
	{/if}
	<div class="content">
		<slot />
	</div>
</div>

<style>
	.card {
		background: var(--back-1);
		border-radius: var(--radius);
		transition: all var(--tran) ease;
		position: relative;
		padding: 1rem;
		min-width: 2rem;
	}

	.square {
		aspect-ratio: 1;
	}
	.card.hoverable:hover {
		background: var(--back-1-hover);
		color: var(--text-strong);
		transition: all var(--tran-short) ease;
	}
	h1 {
		/* prevent wrapping and use ellipses */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.card > a {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: block;
		/* hide text in link bc its shown in h1 */
		opacity: 0;
		z-index: 10;
	}
	.content {
		position: relative;
		z-index: 1;
		height: auto;
	}
	/* if square, height isn't auto */
	.square .content {
		height: 100%;
	}
	/* remove link style */
	a {
		text-decoration: none;
		color: inherit;
	}

	.card.hideBack {
		padding: 0;
		overflow: hidden;
	}
</style>
