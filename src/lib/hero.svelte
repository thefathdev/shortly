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
		&__img {
			overflow: hidden;

			img {
				min-width: 135%;
				height: auto;
				margin-left: 1.25em;
			}
		}

		&__text {
			padding: 1.5em;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		&__heading,
		&__lead {
			text-align: center;
		}

		&__heading {
			margin-bottom: 0.35em;
			line-height: 1.2;
			font-size: 2.25em;
			font-weight: var(--fw-bold);
			color: var(--clr-neutral-700);
		}

		&__lead {
			margin-bottom: 1.75em;
			color: var(--clr-neutral-500);
		}
	}
</style>
