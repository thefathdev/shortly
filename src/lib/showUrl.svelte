<script>
	// @ts-nocheck

	import Button from './components/button.svelte';

	export let urlCouple;

	let copyState = 'copy';

	const handleCopy = () => {};
</script>

<div class="show-url">
	<p class="show-url__initial">{urlCouple.initial}</p>
	<a href={urlCouple.shorten}>{urlCouple.shorten}</a>
	<Button on:click={handleCopy}>{copyState}</Button>
</div>

<style lang="scss">
	.show-url {
		display: flex;
		flex-direction: column;
		margin-inline: 1em;
		padding: 1em;
		background-color: var(--clr-neutral-0);
	}
</style>
