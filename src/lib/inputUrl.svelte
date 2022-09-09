<script>
	// @ts-nocheck

	import Button from './components/button.svelte';

	let shortUrl = '';

	async function shortenUrl(url) {
		try {
			const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
			const data = await res.json();

			console.log(data);
			shortUrl = data.result.short_link;
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
	<input type="url" id="link-input" class="input-url__input" placeholder="Shorten a link here" />
	<p class="input-url__error-message" />

	<Button on:click={() => handleShorten('https://www.youtube.com/')}>shorten it</Button>

	<p>{shortUrl}</p>
</form>
