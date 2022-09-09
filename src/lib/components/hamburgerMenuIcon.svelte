<script>
	import { createEventDispatcher } from 'svelte';

	let dispatch = createEventDispatcher();

	let menu = 'close';
</script>

<div
	tabindex="0"
	class="hamburger-menu"
	data-state={menu}
	on:click={() => {
		menu = menu === 'open' ? 'close' : 'open';
		dispatch('clickMenu', menu);
	}}
>
	<div class="hamburger-menu__btn" />
</div>

<style lang="scss">
	.hamburger-menu {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 32px;
		height: 36px;
		cursor: pointer;

		&__btn {
			width: 26px;
			height: 4px;
			background-color: black;
			transition: background 300ms ease-in-out;

			&::after,
			&::before {
				content: '';
				position: absolute;
				width: 26px;
				height: 4px;
				background-color: black;
			}

			&::before {
				transform: translateY(-10px);
				transform-origin: 100% 0;
				transition: transform 300ms ease-in-out;
			}
			&::after {
				transform: translateY(10px);
				transform-origin: 100% 100%;
				transition: transform 300ms ease-in-out;
			}
		}
	}

	.hamburger-menu[data-state='open'] {
		.hamburger-menu {
			&__btn {
				background: transparent;
			}
			&__btn::before {
				transform: translateY(-12.5px) rotateZ(-45deg) translateX(-20%);
			}
			&__btn::after {
				transform: translateY(12.5px) rotateZ(45deg) translateX(-20%);
			}
		}
	}
</style>
