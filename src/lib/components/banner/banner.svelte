<script>
	const { name } = $props();
</script>

<section class="banner">
	<h2 class="banner__title">{name}</h2>
</section>

<style>
	@media (width <=768px) {
		.banner {
			padding: 4px;

			display: flex;
			justify-content: center;
			align-items: center;
			background-color: blueviolet;

			width: 100%;
			height: 100%;

			.banner__title {
				text-align: center;
				font-size: 2rem;
				font-weight: bold;
			}
		}
	}
	.banner {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: blueviolet;
		border-radius: 10px;
		padding: 8px;
		height: 30px;
		width: 100%;
		.banner__title {
			font-size: 2rem;
			font-weight: 700;
		}
	}
</style>
