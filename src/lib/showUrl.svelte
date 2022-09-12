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

		&__initial {
			color: var(--clr-neutral-800);
		}

		&__shorten {
			color: var(--clr-primary-1);
			text-decoration: none;
		}

		&:not(:last-child) {
			margin-bottom: 1.5em;
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
	}
</style>
