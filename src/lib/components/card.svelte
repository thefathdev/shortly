<script>
	export let title = 'title';
	export let body = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, enim?';

	let url = `/images/icon-${title.replace(/\s+/g, '-').toLowerCase()}.svg`;
</script>

<div class="card">
	<div class="card__icon" style="--icon-url: url({url})" />
	<h3 class="card__heading">{title}</h3>
	<p class="card__body">{body}</p>
</div>

<style lang="scss">
	.card {
		position: relative;
		background-color: var(--clr-neutral-0);
		border-radius: 0.3em;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 4em 2em 2.5em;

		@include desktop {
			align-items: flex-start;
		}

		&:not(:last-child) {
			margin-bottom: 5em;

			@include desktop {
				margin-bottom: 0;
			}
		}

		&:nth-child(3) {
			@include desktop {
				margin-top: 2em;
			}
		}

		&:nth-child(4) {
			@include desktop {
				margin-top: 4em;
			}
		}

		&__icon {
			position: absolute;
			top: 0;
			width: 85px;
			height: 85px;
			border-radius: 50%;
			background-image: var(--icon-url);
			background-position: center;
			background-repeat: no-repeat;
			background-color: var(--clr-primary-2);
			transform: translateY(-50%);
		}

		&__heading {
			margin-bottom: 0.75em;
			text-align: center;
			color: var(--clr-neutral-700);

			@include desktop {
				text-align: start;
			}
		}

		&__body {
			text-align: center;
			font-size: 0.85em;
			color: var(--clr-neutral-500);
			line-height: 1.6;

			@include desktop {
				text-align: start;
			}
		}
	}
</style>
