<script>
	const { title } = $props();
</script>

<section class="event">
	<h2 class="event__title">{title}</h2>
</section>

<style>
	@media (width <= 768px) {
		.event {
			display: flex;
			padding: 4px;
			width: 100%;
			align-items: center;
			justify-content: flex-start;
			color: var(--font-color-primary);
			background-color: var(--bg-color-primary);
		}

		.event__title {
			font-size: 1rem;
			font-weight: bold;
		}
	}
	@media (width > 768px) {
		.event {
			display: flex;
			padding: 4px;
			width: 100%;
			align-items: center;
			justify-content: flex-start;
			color: var(--font-color-primary);
			background-color: var(--bg-color-primary);
		}

		.event__title {
			font-size: 1rem;
			font-weight: bold;
			padding: 8px 0;
		}
	}
</style>
