<script>
	// @ts-nocheck

	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Button from './components/button.svelte';

	function fadeSlide(node, options) {
		const slideTrans = slide(node, options);
		return {
			duration: options.duration,
			css: (t) => `
				${slideTrans.css(t)}
				opacity: ${t};
			`
		};
	}
</script>

<ul transition:fadeSlide={{ duration: 300 }} class="container">
	<li class="item"><a href="/">Features</a></li>
	<li class="item"><a href="/">Pricing</a></li>
	<li class="item"><a href="/">Resources</a></li>
	<div class="line" />
	<li class="item"><a href="/">Login</a></li>
	<Button corner="round">Sign Up</Button>
</ul>

<style lang="scss">
	ul,
	li {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	a {
		text-decoration: none;
	}

	.container {
		position: absolute;
		width: calc(100% - 2em);
		transform: translateY(calc(1em + 10%));
		display: flex;
		flex-direction: column;
		gap: 1.5em;
		border-radius: 0.75rem;
		padding: 2.25em 1.25em;
		background-color: var(--clr-primary-2);
	}

	.item {
		text-align: center;

		> a {
			position: relative;
			color: var(--clr-neutral-0);
			font-weight: var(--fw-bold);

			&::after {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 0.2em;
				background-color: var(--clr-neutral-0);
				transform-origin: 0 0;
				transform: translateY(calc(1.25em + 50%)) scaleX(0);

				transition: transform 300ms ease-in-out;
			}

			&:hover::after {
				transform: translateY(calc(1.25em + 50%)) scaleX(1);
			}
		}
	}

	.line {
		height: 1px;
		background-color: var(--clr-neutral-500);
		opacity: 0.5;
	}
</style>
