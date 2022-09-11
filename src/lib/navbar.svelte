<script>
	import HamburgerMenuIcon from './components/hamburgerMenuIcon.svelte';
	import DesktopMenu from './desktopMenu.svelte';
	import MobileMenu from './mobileMenu.svelte';

	let mobileMenu = 'close';
</script>

<nav class="navbar">
	<a href="/" class="navbar__logo"><img src="/images/logo.svg" alt="Shortly Logo" /></a>
	<div class="navbar__hamburger-btn">
		<HamburgerMenuIcon on:clickMenu={(e) => (mobileMenu = e.detail)} />
	</div>
	{#if mobileMenu === 'open'}
		<MobileMenu />
	{/if}
	<DesktopMenu />
</nav>

<style lang="scss">
	.navbar {
		position: relative;
		display: flex;
		padding: 2em 1em;

		&__hamburger-btn {
			margin-left: auto;
		}
	}
</style>
