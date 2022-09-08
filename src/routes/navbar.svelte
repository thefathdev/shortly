<script>
	import HamburgerMenuIcon from './components/hamburgerMenuIcon.svelte';
	import DesktopMenu from './desktopMenu.svelte';
	import MobileMenu from './mobileMenu.svelte';

	let mobileMenu = 'close';
</script>

<nav class="navbar">
	<a href="/" class="navbar__logo"><img src="/images/logo.svg" alt="Shortly Logo" /></a>
	<HamburgerMenuIcon on:clickMenu={(e) => (mobileMenu = e.detail)} />
	<MobileMenu state={mobileMenu} />
	<DesktopMenu />
</nav>
