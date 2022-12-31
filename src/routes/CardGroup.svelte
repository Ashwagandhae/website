<script lang="ts">
</script>

<div>
	<slot />
</div>

<style>
	div {
		--padding-x: max(var(--gap), calc(30vw - 10rem));
		--padding-y: max(var(--gap), calc(30vh - 10rem));
		/* subtract gap to compensate for TopCards padding-top */
		/* subtract footer height to compensate for footer */
		padding: calc(var(--padding-y) - var(--gap)) 0 calc(var(--padding-y) - var(--footer-height)) 0;
		display: grid;
		grid-template-rows: min-content 1fr;
		gap: var(--gap);
		width: calc(100vw - var(--padding-x) * 2);
		height: auto;
		min-height: calc(100vh - var(--padding-y) * 2 + var(--gap));
	}
</style>
