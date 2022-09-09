<script>
	// @ts-nocheck

	import storedUrls from '../store/store.js';

	import Cta from '../lib/cta.svelte';
	import Hero from '../lib/hero.svelte';
	import InputUrl from '../lib/inputUrl.svelte';
	import ShowUrl from '../lib/showUrl.svelte';
	import Statistic from '../lib/statistic.svelte';

	let urlCouples = $storedUrls;
</script>

<header>
	<div class="background" style="--bg-color: var()">
		<Hero />
	</div>
</header>

<main>
	<div class="background" style="--bg-color: var()">
		<InputUrl />
	</div>
	<div class="background" style="--bg-color: var()">
		{#each urlCouples as urlCouple}
			<ShowUrl {urlCouple} />
		{/each}
	</div>
	<div class="background" style="--bg-color: var()">
		<Statistic />
	</div>
	<div class="background" style="--bg-color: var()">
		<Cta />
	</div>
</main>

<style lang="scss">
</style>
