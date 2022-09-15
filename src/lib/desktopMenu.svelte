<script>
	import Button from './components/button.svelte';
</script>

<section class="desktop-menu">
	<ul class="desktop-menu__links">
		<li class="desktop-menu__item"><a href="/">Features</a></li>
		<li class="desktop-menu__item"><a href="/">Pricing</a></li>
		<li class="desktop-menu__item"><a href="/">Resources</a></li>
	</ul>
	<ul class="desktop-menu__links">
		<li class="desktop-menu__item"><a href="/">Login</a></li>
		<Button corner="round" px="1.5em" fontSize="0.85em">sign up</Button>
	</ul>
</section>

<style lang="scss">
	ul,
	li {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	a {
		text-decoration: none;
	}

	.desktop-menu {
		display: none;

		@include desktop {
			flex: 1;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			margin-left: 2.5em;
		}

		&__links {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 1.75em;
		}

		&__item > a {
			font-weight: var(--fw-bold);
			font-size: 0.85em;
			color: var(--clr-neutral-500);
			transition: color 300ms ease-in-out;

			&:hover,
			&:focus {
				color: var(--clr-neutral-700);
			}
		}
	}
</style>
