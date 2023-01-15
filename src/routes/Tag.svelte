<script lang="ts">
	export let name: string;
</script>

<span class="tag">{name}</span>

<style>
	.tag {
		display: block;

		border-radius: var(--radius-small);
		background: var(--back-2);
		padding: 0.5rem;
		box-sizing: border-box;
		font-size: 1rem;
		color: var(--text);
		transition: all var(--tran-short) ease-in-out;

		text-decoration: none;
		white-space: nowrap;
	}
</style>
