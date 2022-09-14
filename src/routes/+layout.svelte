<script>
	import '../styles.scss';
	import Navbar from '../lib/navbar.svelte';
	import Footer from '../lib/footer.svelte';
</script>

<svelte:head>
	<title>Shortly - Url Shortener</title>
	<meta name="description" content="Url shortener for your daily basis" />
</svelte:head>

<Navbar />

<slot />

<Footer />
