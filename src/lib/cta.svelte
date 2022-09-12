<script>
	import Button from './components/button.svelte';
</script>

<div class="cta">
	<h2 class="cta__heading">Boost your links today</h2>
	<Button corner="round" px="2em" py="0.75em" fontSize="1.05em">get started</Button>
</div>

<style lang="scss">
	.cta {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-image: url('/images/bg-boost-mobile.svg');
		background-color: var(--clr-primary-2);
		background-size: cover;
		background-repeat: no-repeat;
		padding: 5.5em 1em;

		&__heading {
			text-align: center;
			margin-bottom: 0.5em;
			color: var(--clr-neutral-0);
			font-size: 1.5em;
		}
	}
</style>
