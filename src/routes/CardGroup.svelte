<script lang="ts">
</script>

<div class="cards">
	<slot />
</div>

<style>
	div {
		/* subtract gap to compensate for TopCards padding-top */
		/* subtract footer height to compensate for footer */
		padding: calc(var(--side-padding-y) - var(--gap)) 0
			calc(var(--side-padding-y) - var(--footer-height)) 0;
		display: grid;
		grid-template-rows: min-content 1fr;
		gap: var(--gap);
		width: calc(100vw - var(--side-padding-x) * 2);
		height: auto;
		min-height: calc(100vh - var(--side-padding-y) * 2 + var(--gap));
	}
</style>
