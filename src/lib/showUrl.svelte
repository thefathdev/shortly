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
