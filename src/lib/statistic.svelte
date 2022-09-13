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

<style lang="scss">
	.heading {
		margin-top: 3.5em;
		margin-bottom: 0.625em;
		text-align: center;
		color: var(--clr-neutral-700);
		letter-spacing: -0.025em;

		@include desktop {
			font-size: 2.25em;
			margin-bottom: 0.3em;
		}
	}

	.lead {
		margin-bottom: 5.5em;
		margin-inline: 1em;
		text-align: center;
		color: var(--clr-neutral-500);
		font-size: 0.9em;
		line-height: 1.6;

		@include desktop {
			font-size: 1em;
			max-width: 47ch;
			margin-inline: auto;
			line-height: 1.7;
		}
	}

	.container {
		position: relative;
		display: flex;
		flex-direction: column;
		margin: 1em;

		@include desktop {
			margin-bottom: 6.5em;
			max-width: 68.75rem;
			margin-inline: auto;
			flex-direction: row;
			gap: 1.75em;
			align-items: flex-start;
		}
	}

	.line {
		position: absolute;
		background-color: var(--clr-primary-1);
		height: 90%;
		width: 8px;
		align-self: center;
		justify-self: center;
		margin-top: 10%;

		@include desktop {
			width: 90%;
			height: 8px;
			margin-top: 0;
		}
	}
</style>
