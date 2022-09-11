<script>
	export let type = 'primary';
	export let corner = 'flat';
</script>

<button on:click|preventDefault class="{type} {corner}"><slot /></button>

<style lang="scss">
	button {
		cursor: pointer;
		text-transform: capitalize;
		border: none;
		font-weight: var(--fw-bold);
		padding: 0.5em;

		transition: background-color 300ms ease-in-out;
	}

	.primary {
		background-color: var(--clr-primary-1);
		color: var(--clr-neutral-0);

		&:hover {
			background-color: var(--clr-primary-1-50);
		}
	}

	.round {
		border-radius: 2em;
	}
</style>
