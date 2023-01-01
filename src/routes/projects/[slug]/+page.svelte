<script lang="ts">
	import TopCards from '../../TopCards.svelte';
	import Card from '../../Card.svelte';
	import Tag from '../../Tag.svelte';
	import LinkGroup from '../../LinkGroup.svelte';
	import type { Project } from '../../../types';
	import { onDestroy, onMount } from 'svelte';
	import { palette } from '../../stores';
	export let data: Project;

	$palette = data.color;
	onDestroy(() => {
		$palette = null;
	});
</script>

<TopCards>
	<Card path="./projects">
		<div class="header">
			<div class="icon">
				{@html data.icon}
			</div>
			<h1>
				{data.name}
			</h1>
			<p>
				{data.description}
			</p>
		</div>
	</Card>
	<Card>
		<h2>Links</h2>
		<LinkGroup links={data.links} />
	</Card>
</TopCards>
<div class="content">
	<Card hideBack>
		{#if data.iframe != null}
			<iframe title={data.name} src={data.iframe} />
		{/if}
	</Card>
	<Card>
		<div class="details">
			{#if data.longDescription != null}
				<p>{data.longDescription}</p>
			{/if}
			{#if data.tags != null}
				<div class="tags">
					{#each data.tags as item}
						<Tag name={item} />
					{/each}
				</div>
			{/if}
		</div>
	</Card>
</div>

<style>
	iframe {
		width: 100%;
		height: 60vh;
		margin: 0;
		padding: 0;
		border: none;
		border-radius: var(--radius-small);
		z-index: -100;
		display: block;
	}
	.header {
		display: grid;
		grid-template-areas:
			'icon title'
			'icon description';
		grid-template-columns: min-content 1fr;
	}
	.header > h1 {
		grid-area: title;
	}
	.header > p {
		grid-area: description;
	}
	.header > .icon {
		grid-area: icon;
		width: 5rem;
		height: 5rem;
		margin-right: var(--gap);
	}
	.header > .icon > :global(svg) {
		width: 100%;
		height: 100%;
	}
	.content {
		width: 100%;
		height: auto;
		display: grid;
		gap: var(--gap);
	}
	.details {
		display: flex;
		flex-direction: column;
		gap: var(--gap);
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--gap);
		color: var(--text-weak);
		font-family: var(--font-2);
	}
</style>
