<script lang="ts">
	export let text: string;
</script>

<li>
	{text}
</li>

<style>
	li {
		background: var(--back-0);
		padding: 0.25rem 0.5rem;
		border-radius: var(--radius);
		margin-bottom: var(--gap);
		margin: 0;
	}
</style>
