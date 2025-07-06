<script>
	const { name } = $props();
</script>

<section class="banner">
	<h2 class="banner__title">{name}</h2>
</section>

<style>
	@media (width <= 768px) {
		.banner {
			display: flex;
			justify-content: center;
			align-items: center;

			font-size: 1.6rem;
			color: var(--font-color-primary);
			background-color: var(--bg-color-secondary);

			width: 100%;
			height: 100%;
		}

		.banner__title {
			text-align: center;
			font-size: 1.8rem;
			font-weight: bold;
			border: none;
		}
	}
	@media (width > 768px) {
		.banner {
			font-size: 2.5rem;
			padding: 8px;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: var(--bg-color-primary);
			color: var(--font-color-primary);

			width: 100%;
			height: 100%;
		}
	}
</style>
