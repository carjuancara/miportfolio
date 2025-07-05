<script>
	const { title } = $props();
</script>

<section class="event">
	<h2 class="event__title">{title}</h2>
</section>

<style>
	.event {
		display: flex;
		width: 100%;
		padding: 8px 0 8px 8px;
		align-items: center;
		justify-content: flex-start;
		color: var(--font-color-primary);
		background-color: var(--bg-color-primary);
	}

	.event__title {
		font-size: 1rem;
		font-weight: bold;
	}
</style>
