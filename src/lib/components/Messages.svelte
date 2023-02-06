<script>
	import Message from './Message.svelte';
	import { messages } from '$lib/models/stores';
</script>

<div class="messages">
	<ul>
		{#each $messages as message (message.id)}
			<Message {message} />
		{/each}
	</ul>
</div>

<style>
	.messages {
		position: fixed;
		top: var(--pad);
		left: 0;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		width: 100%;
		z-index: 1000;
	}
	/* remove list style */
	ul {
		display: flex;
		flex-direction: column;
		list-style: none;
		padding: 0;
		margin: 0;
	}
</style>
