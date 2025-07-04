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
		height: 10%;
		padding: 8px 0 8px 8px;
		align-items: center;
		justify-content: flex-start;
		color: white;
		background-color: blueviolet;
	}

	.event__title {
		font-size: 1rem;
		font-weight: bold;
	}
</style>
