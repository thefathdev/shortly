<script>
	// @ts-nocheck

	import Button from './components/button.svelte';

	export let urlCouple;

	let copyState = 'copy';

	const handleCopy = () => {
		copyState = 'copied!';
		navigator.clipboard.writeText(urlCouple.shorten);
	};
</script>

<div class="show-url">
	<p class="show-url__initial">{urlCouple.initial}</p>
	<div class="line" />
	<a class="show-url__shorten" href={urlCouple.shorten}>{urlCouple.shorten}</a>
	<Button
		type={copyState === 'copy' ? 'primary' : 'secondary'}
		corner="smooth"
		px="2em"
		fontSize="0.95rem"
		on:click={handleCopy}>{copyState}</Button
	>
</div>

<style lang="scss">
	.show-url {
		display: flex;
		flex-direction: column;
		margin-inline: 1em;
		padding: 1.25em;
		gap: 0.5em;
		background-color: var(--clr-neutral-0);
		border-radius: 0.35em;
		font-size: 0.925em;

		@include desktop {
			max-width: 68.75rem;
			margin-inline: auto;
			flex-direction: row;
			align-items: center;
			font-size: 1.05em;
			padding: 1em 1.5em;
		}

		&__initial {
			color: var(--clr-neutral-800);

			@include desktop {
				flex: 1;
			}
		}

		&__shorten {
			color: var(--clr-primary-1);
			text-decoration: none;

			@include desktop {
				margin-right: 1em;
			}
		}

		&:not(:last-child) {
			margin-bottom: 1.5em;

			@include desktop {
				margin-bottom: 1em;
			}
		}

		&:last-child {
			margin-bottom: 5em;
		}
	}

	.line {
		height: 1px;
		width: calc(100% + 2.5em);
		align-self: center;
		background-color: var(--clr-neutral-200);

		@include desktop {
			display: none;
		}
	}
</style>
