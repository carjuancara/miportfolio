<script>
	const { name } = $props();
</script>

<section class="banner">
	<h2 class="banner__title">{name}</h2>
</section>

<style>
	.banner {
		padding: 8px;

		display: flex;
		justify-content: center;
		align-items: center;
		background-color: blueviolet;
		color: white;

		width: 100%;
		height: 100%;
	}

	.banner__title {
		text-align: center;
		font-size: 1.5rem;
		font-weight: bold;
	}

	@media (width > 768px) {
		.banner {
			border-radius: 0;
		}
	}
</style>
