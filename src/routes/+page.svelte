<script>
	import Cta from './cta.svelte';
	import Hero from './hero.svelte';
	import InputUrl from './inputUrl.svelte';
	import Statistic from './statistic.svelte';
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
		<Statistic />
	</div>
	<div class="background" style="--bg-color: var()">
		<Cta />
	</div>
</main>

<style lang="scss">
</style>
