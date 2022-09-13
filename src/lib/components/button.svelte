<script>
	export let type = 'primary';
	export let corner = 'flat';
	export let px = '0.5em';
	export let py = '0.5em';
	export let fontSize = '1em';
</script>

<button
	on:click|preventDefault
	class="button {type} {corner}"
	style="--py: {py}; --px:{px}; --fs:{fontSize}"><slot /></button
>

<style lang="scss">
	.button {
		cursor: pointer;
		text-transform: capitalize;
		border: none;
		font-weight: var(--fw-bold);
		padding: var(--py) var(--px);
		font-size: var(--fs);

		transition: background-color 300ms ease-in-out;
	}

	.primary {
		background-color: var(--clr-primary-1);
		color: var(--clr-neutral-0);

		&:hover {
			background-color: var(--clr-primary-1-50);
		}
	}

	.secondary {
		background-color: var(--clr-primary-2);
		color: var(--clr-neutral-0);

		&:hover {
			background-color: var(--clr-primary-2-50);
		}
	}

	.round {
		border-radius: 2rem;
	}
	.smooth {
		border-radius: 0.3rem;

		@include desktop {
			border-radius: 0.4rem;
		}
	}
</style>
