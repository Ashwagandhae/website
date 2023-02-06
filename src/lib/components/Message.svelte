<script lang="ts">
	import { sineOut } from 'svelte/easing';
	import type { Message } from '$lib/models/types';

	export let message: Message;

	function appear(node: HTMLElement, { delay = 0, duration = 300 } = {}) {
		const height = node.getBoundingClientRect().height;
		return {
			delay,
			duration,
			css: (t: number) => {
				const e = sineOut(t);
				return `
					transform: scale(${e});
					height: ${e * height}px;
					margin-bottom: ${e * 0.5}rem;
					padding: ${e * 0.25}rem ${e * 0.5}rem;
      	`;
			}
		};
	}
	function countAppear(node: HTMLElement, { delay = 0, duration = 300 } = {}) {
		const width = node.getBoundingClientRect().width;
		return {
			delay,
			duration,
			css: (t: number) => {
				const e = sineOut(t);
				return `
					transform: scale(${e});
					width: ${e * width}px;
				`;
			}
		};
	}
</script>

<li transition:appear>
	<span>
		{message.text}
	</span>
	{#if message.count > 1}
		<span class="count" in:countAppear>
			x{message.count}
		</span>
	{/if}
</li>

<style>
	li {
		display: flex;
		flex-direction: row;
		background: var(--back-0);
		padding: 0.25rem 0.5rem;
		border-radius: var(--radius);
		margin: 0;
		margin-bottom: 0.5rem;
		font-size: 1rem;
		box-sizing: border-box;
		overflow: visible;
		user-select: none;
		gap: 1ch;
	}
	span {
		display: block;
		font-family: inherit;
	}
	.count {
		display: block;
		color: var(--text-weak);
	}
</style>
