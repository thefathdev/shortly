<script>
	import Button from './components/button.svelte';

	export let mb = '0';
</script>

<div class="hero" style="margin-bottom: {mb};">
	<div class="hero__img">
		<img src="/images/illustration-working.svg" alt="url shortening made enjoyable with shotly" />
	</div>
	<div class="hero__text">
		<h1 class="hero__heading">More than just shorter links</h1>
		<p class="hero__lead">
			Build your brand's recognition and get detailed insights on how your links are performing.
		</p>
		<Button corner="round" px="2em" py="0.75em" fontSize="1.05em">get started</Button>
	</div>
</div>

<style lang="scss">
	.hero {
		@include desktop {
			max-width: 68.75rem;
			margin-inline: auto;
			align-items: center;
			display: grid;
			grid-template-columns: 1fr 1fr;
		}

		&__img {
			overflow: hidden;

			@include desktop {
				overflow: visible;
			}

			img {
				min-width: 135%;
				height: auto;
				margin-left: 1.25em;

				@include desktop {
					margin-left: 6em;
				}
			}
		}

		&__text {
			padding: 1.5em;
			display: flex;
			flex-direction: column;
			align-items: center;

			@include desktop {
				grid-column: 1;
				grid-row: 1;
				align-items: start;
				padding: 0;
			}
		}

		&__heading,
		&__lead {
			text-align: center;

			@include desktop {
				text-align: start;
			}
		}

		&__heading {
			margin-bottom: 0.35em;
			line-height: 1.2;
			font-size: 2.25em;
			font-weight: var(--fw-bold);
			color: var(--clr-neutral-700);

			@include desktop {
				font-size: 4.125em;
				margin-bottom: 0;
			}
		}

		&__lead {
			margin-bottom: 1.75em;
			color: var(--clr-neutral-500);

			@include desktop {
				font-size: 1.25em;
				margin-bottom: 1.5em;
			}
		}
	}
</style>
