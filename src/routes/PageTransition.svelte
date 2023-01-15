<script lang="ts">
	import { fly } from 'svelte/transition';
	import { beforeNavigate } from '$app/navigation';
	import { reducedMotion } from './accessibility';
	import { onMount } from 'svelte';
	let refresh = false;
	let direction = 'right';
	beforeNavigate((navigation) => {
		let from = navigation.from?.route.id?.length ?? '';
		let to = navigation.to?.route.id?.length ?? '';
		direction = from < to ? 'right' : 'left';
		refresh = !refresh;
	});
	let show = false;
	onMount(() => {
		show = true;
	});
</script>

{#if show}
	{#key refresh}
		<div
			class="transition"
			in:fly={{ x: 0, duration: 0, delay: 400 }}
			out:fly={{ x: reducedMotion() ? 0 : direction == 'right' ? -15 : 15, duration: 400 }}
		>
			<slot />
		</div>
	{/key}
{/if}

<style>
	div {
		position: absolute;
	}
</style>
