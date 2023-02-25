<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import TopCards from '$lib/components/TopCards.svelte';
</script>

<TopCards single>
	<Card path="./">
		<h1>About me</h1>
		<p>Who I am and what I do</p>
	</Card>
</TopCards>
<div class="content">
	<Card>
		<p>
			Hello, I'm Julian. I was born and raised in San Francisco, and I'm currently a student at the
			College Preparatory School in Oakland, California. I love coding, playing the piano, and
			taking care of my chickens. You can find me on
			<a href="https://github.com/Ashwagandhae">GitHub</a> and
			<a href="https://www.linkedin.com/in/julian-bauer-32823b246/">LinkedIn</a>, or email me
			directly at julianlianbauer@gmail.com.
		</p>
	</Card>
</div>
