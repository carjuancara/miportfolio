<script>
	const { description } = $props();
</script>

<section class="container">
	<texttarea class="description">{description}</texttarea>
</section>

<style>
	.container {
		display: flex;
		width: 100%;
		height: 100%;
	}
	.description {
		flex: 1;

		border: none;
		outline: none;
		resize: none;
		overflow-x: auto;
		font-size: 1rem;
		line-height: 1.5;
		color: white;
		background-color: slateblue;
	}
</style>
