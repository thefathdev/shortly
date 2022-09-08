<script>
	import Button from './components/button.svelte';
</script>

<form class="input-url">
	<label class="input-url__label visually-hidden" for="link-input">Shorten a link here...</label>
	<input type="url" id="link-input" class="input-url__input" placeholder="Shorten a link here" />
	<p class="input-url__error-message" />

	<Button>shorten it</Button>
</form>
