<script>
	// @ts-nocheck
	import storedUrls from '../store/store';

	import Button from './components/button.svelte';

	let initialUrl = '';

	async function shortenUrl(url) {
		try {
			const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
			const data = await res.json();

			let urlCouple = {
				initial: initialUrl,
				shorten: data.result.short_link
			};

			storedUrls.update((data) => {
				return [...data, urlCouple];
			});
		} catch (error) {
			console.log(error);
		}
	}

	const handleShorten = (url) => {
		shortenUrl(url);
	};
</script>

<form class="input-url">
	<label class="input-url__label visually-hidden" for="link-input">Shorten a link here...</label>
	<input
		type="url"
		id="link-input"
		class="input-url__input"
		placeholder="Shorten a link here"
		bind:value={initialUrl}
	/>
	<p class="input-url__error-message" />

	<Button on:click={() => handleShorten(initialUrl)}>shorten it</Button>
</form>

<style lang="scss">
	// TODO: style input
</style>
