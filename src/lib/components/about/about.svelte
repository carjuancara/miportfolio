<script>
	import { Title } from '$lib';
	const { about } = $props();
</script>

<section class="container__about">
	<section class="about__title">
		<Title title="About" />
	</section>
	<p class="about__text">{about}</p>
</section>

<style>
	@media (width <= 768px) {
		.container__about {
			padding: 1rem;
			background-color: slateblue;
		}
		.about__title {
			padding: 2rem 0;
		}
		.about__text {
			color: white;
			font-size: 1.2rem;
		}
	}
</style>
