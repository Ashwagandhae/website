<script lang="ts">
	export let name: string;
</script>

<span>{name}</span>

<style>
	span {
		color: var(--text);
		font-family: var(--font-2);
		background: var(--back-2);
		padding: 0.5rem;
		border-radius: var(--radius);
	}
</style>
