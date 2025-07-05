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
			background-color: var(--bg-color-secondary);
		}
		.about__title {
			padding: 2rem 0;
		}
		.about__text {
			color: var(--font-color-primary);
			font-size: 1.2rem;
		}
	}
	@media (width > 768px) {
		.container__about {
			padding: 1rem;
			background-color: var(--bg-color-secondary);
			height: 100%;
		}
		.about__text {
			padding: 1rem 0.8rem;
			color: var(--font-color-primary);
			font-size: 1.1rem;
			overflow-y: auto;
		}
	}
</style>
