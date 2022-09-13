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
				return [urlCouple, ...data];
			});
		} catch (error) {
			console.log(error);
		}
	}

	// url validation
	let urlPattern = new RegExp(
		'^(https?:\\/\\/)?' +
			'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
			'((\\d{1,3}\\.){3}\\d{1,3}))' +
			'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
			'(\\?[;&a-z\\d%_.~+=-]*)?' +
			'(\\#[-a-z\\d_]*)?$',
		'i'
	);

	const handleShorten = (url) => {
		if (url.length < 1) {
			errorMessage = 'Please add a link';
			inputValid = 'false';
		} else if (!url.match(urlPattern)) {
			errorMessage = 'Make sure your link is valid';
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

	<Button px="2.25em" corner="smooth" on:click={() => handleShorten(initialUrl)}>shorten it!</Button
	>
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

		@include desktop {
			position: relative;
			max-width: 68.75rem;
			margin-inline: auto;
			flex-direction: row;
			flex-wrap: wrap;
			padding: 2.85em 3.5em;
			border-radius: 0.75em;
			background-image: url('/images/bg-shorten-desktop.svg');
		}

		&__input {
			padding: 0.625em 1em;
			border: none;
			border-radius: 0.3rem;

			@include desktop {
				flex: 1;
				border-radius: 0.4rem;
				padding: 0.9em 1.75em;
			}

			&::placeholder {
				color: var(--clr-neutral-700);
				font-size: 0.875em;

				@include desktop {
					font-size: 1.125em;
				}
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

			@include desktop {
				position: absolute;
				font-size: 0.9em;
				top: 0;
				left: 0;
				transform: translateX(3.5em) translateY(calc(7.5em + 15%));
			}
		}
	}
</style>
