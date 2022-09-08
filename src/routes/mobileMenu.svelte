<script>
	export let state = 'close';
</script>

<ul class="container" style="display: {state === 'open' ? 'block' : 'none'}">
	<li class="item"><a href="/">Features</a></li>
	<li class="item"><a href="/">Pricing</a></li>
	<li class="item"><a href="/">Resources</a></li>
	<div class="line" />
	<li class="item"><a href="/">Login</a></li>
	<li class="item"><a href="/">Sign Up</a></li>
</ul>
