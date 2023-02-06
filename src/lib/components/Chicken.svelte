<script lang="ts">
	import { onMount } from 'svelte';
	import ChickenDisplay from './ChickenDisplay.svelte';

	let colorSets = [
		{
			body: '#F5D5A5',
			bodyShadow: '#EDB798',
			comb: '#D45C5C',
			combShadow: '#B5485B',
			eye: 'black'
		}
	];
	let pos: { x: number; y: number } = { x: 0, y: 0 };
	let direction = Math.random() < 0.5 ? 'left' : 'right';
	const moveDistance = 150;
	const moveVectors = [
		{ x: moveDistance, y: 0 },
		{ x: -moveDistance, y: 0 },
		{ x: moveDistance, y: 0 },
		{ x: -moveDistance, y: 0 },
		{ x: moveDistance, y: moveDistance },
		{ x: -moveDistance, y: moveDistance },
		{ x: moveDistance, y: -moveDistance },
		{ x: -moveDistance, y: -moveDistance }
	];

	let timeout: NodeJS.Timeout | null = null;

	function move() {
		const vector = moveVectors[Math.floor(Math.random() * moveVectors.length)];
		// if the chicken is moving horizontally, update the direction
		direction = vector.x == 0 ? direction : vector.x > 0 ? 'right' : 'left';
		pos.x += vector.x;
		pos.y += vector.y;
		pos.x = Math.max(0, Math.min(window.innerWidth, pos.x));
		pos.y = Math.max(0, Math.min(window.innerHeight, pos.y));

		waitThenMove();
	}
	function waitThenMove() {
		timeout = setTimeout(move, 8_000 + Math.random() * 20_000);
	}
	function runAway() {
		if (timeout) clearTimeout(timeout);
		move();
	}
	onMount(() => {
		pos.x = Math.random() * window.innerWidth;
		pos.y = Math.random() * window.innerHeight;
		waitThenMove();
	});
</script>

<div class="chicken" style="--x: {pos.x}px; --y: {pos.y}px;--" on:click={runAway}>
	<ChickenDisplay colors={colorSets[0]} {direction} />
</div>

<style>
	.chicken {
		width: 5rem;
		height: 5rem;
		position: fixed;
		top: var(--y);
		left: var(--x);
		transition: top 2s linear, left 2s linear;
	}
</style>
