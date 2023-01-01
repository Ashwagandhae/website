<script lang="ts">
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { beforeNavigate } from '$app/navigation';
	let refresh = false;
	let direction = 'right';
	beforeNavigate((navigation) => {
		let from = navigation.from?.route.id?.length ?? '';
		let to = navigation.to?.route.id?.length ?? '';
		direction = from < to ? 'right' : 'left';
		refresh = !refresh;
	});
</script>

{#key refresh}
	<div
		in:fly={{ x: direction == 'right' ? 15 : -15, duration: 400, delay: 400 }}
		out:fly={{ x: direction == 'right' ? -15 : 15, duration: 400 }}
	>
		<slot />
	</div>
{/key}
