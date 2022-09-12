<script>
	// @ts-nocheck
	import storedUrls from '../store/store';

	import Button from './components/button.svelte';

	let initialUrl = '';

	let errorMessage = '';

	let inputValid = 'true';

	async function shortenUrl(url) {
		try {
			const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
			const data = await res.json();

			let urlCouple = {
				initial: initialUrl,
				shorten: data.result.short_link
			};

			initialUrl = '';

			storedUrls.update((data) => {
				return [...data, urlCouple];
			});
		} catch (error) {
			console.log(error);
		}
	}

	const handleShorten = (url) => {
		// TODO: add validation
		if (url.length < 1) {
			errorMessage = 'Please add a link';
			inputValid = 'false';
		} else {
			shortenUrl(url);
			errorMessage = '';
			inputValid = 'true';
		}
	};
</script>

<form class="input-url">
	<label class="input-url__label visually-hidden" for="link-input">Shorten a link here</label>
	<input
		type="url"
		id="link-input"
		class="input-url__input"
		placeholder="Shorten a link here..."
		bind:value={initialUrl}
		data-valid={inputValid}
	/>
	<p class="input-url__error-message">{errorMessage}</p>

	<Button corner="smooth" on:click={() => handleShorten(initialUrl)}>shorten it</Button>
</form>

<style lang="scss">
	.input-url {
		margin-bottom: 1.5em;
		display: flex;
		flex-direction: column;
		margin-inline: 1em;
		padding: 1.25em;
		gap: 0.625em;
		background-image: url('/images/bg-shorten-mobile.svg');
		background-position: right top;
		background-repeat: no-repeat;
		background-color: var(--clr-primary-2);
		border-radius: 0.5em;

		&__input {
			padding: 0.625em 1em;
			border: none;
			border-radius: 0.3rem;

			&::placeholder {
				color: var(--clr-neutral-700);
				font-size: 0.875em;
			}
		}

		&__input[data-valid='false'] {
			outline: 4px solid var(--clr-secondary);

			&::placeholder {
				color: var(--clr-secondary);
			}
		}

		&__error-message {
			color: var(--clr-secondary);
			font-size: 0.7em;
			font-weight: var(--fw-medium);
			font-style: italic;
			margin-top: -0.4em;
		}
	}
</style>
