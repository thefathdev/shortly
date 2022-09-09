<script>
	import Cta from '../lib/cta.svelte';
	import Hero from '../lib/hero.svelte';
	import InputUrl from '../lib/inputUrl.svelte';
	import ShowUrl from '../lib/showUrl.svelte';
	import Statistic from '../lib/statistic.svelte';

	/**
	 * @type {object[]}
	 */
	let urls = [];
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
		{#each urls as url}
			<ShowUrl />
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
