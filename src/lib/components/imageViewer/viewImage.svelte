<script>
	import { base } from '$app/paths';

	const { images } = $props();
	const image = images[0];
</script>

<section class="container-image">
	<img class="img__image" src={base + image || '#'} alt={base + image} />
</section>

<style>
	.container-image {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	.img__image {
		display: flex;
		width: 100%;
		height: 100%;
		object-fit: cover;
		background-position: center;
	}
</style>
