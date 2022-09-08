<script>
	export let title = 'title';
	export let body = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, enim?';

	let url = `/images/icon-${title.replace(/\s+/g, '-').toLowerCase()}.svg`;
</script>

<div class="card">
	<div class="card__icon" style="--icon-url: url({url})" />
	<h3 class="card__heading">{title}</h3>
	<p class="card__body">{body}</p>
</div>

<style lang="scss">
	.card {
		&__icon {
			width: 40px;
			height: 40px;
			background-image: var(--icon-url);
		}
	}
</style>
