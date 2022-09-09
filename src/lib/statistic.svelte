<script>
	import Card from './components/card.svelte';

	let titles = ['Brand Recognition', 'Detailed Records', 'Fully Customizable'];
	let bodies = [
		"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
		'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
		'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
	];
</script>

<h2 class="heading">Advanced Statistics</h2>
<p class="lead">
	Track how your links are performing across the web with our advanced statistic dashboard.
</p>
<div class="container">
	<div class="line" />
	{#each titles as title, i}
		<Card {title} body={bodies[i]} />
	{/each}
</div>
