<script>
	// @ts-nocheck

	import { storedUrls } from '../store/store.js';

	import Cta from '../lib/cta.svelte';
	import Hero from '../lib/hero.svelte';
	import InputUrl from '../lib/inputUrl.svelte';
	import ShowUrl from '../lib/showUrl.svelte';
	import Statistic from '../lib/statistic.svelte';

	$: urlCouples = $storedUrls;
</script>

<header>
	<section class="background" style="--bg-color: var(--clr-neutral-0)">
		<Hero mb="3em" />
	</section>
</header>

<main class="background" style="--bg-color: var(--clr-neutral-200)">
	<section class="background" style="--bg-color: var(--bg-split)">
		<InputUrl />
	</section>
	<section>
		{#each urlCouples as urlCouple}
			<ShowUrl {urlCouple} />
		{/each}
	</section>
	<section>
		<Statistic />
	</section>
	<section>
		<Cta />
	</section>
</main>

<style lang="scss">
	.background {
		background: var(--bg-color);
	}
</style>
