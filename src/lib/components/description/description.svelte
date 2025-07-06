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
		padding-top: 8px;
	}
	.description {
		flex: 1;
		padding: 0 4px;
		border: none;
		outline: none;
		resize: none;
		overflow-x: auto;
		font-size: 1rem;
		line-height: 1.5;
		color: var(--font-color-primary);
		background-color: var(--bg-color-secondary);
	}
</style>
