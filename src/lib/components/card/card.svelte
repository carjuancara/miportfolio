<script>
	import { Title } from '$lib';
	import { ViewImage } from '$lib';
	import { Description } from '$lib';
	import { ButtonBar } from '$lib';
	const { title, images, description, demoUrl, repoUrl } = $props();
</script>

<section class="card">
	<div class="container__title">
		<Title {title} />
	</div>
	<div class="container__image">
		<ViewImage {images} />
	</div>
	<div class="container__bottom">
		<div class="container__description">
			<Description {description} />
		</div>
		<div class="container__button-bar">
			<ButtonBar {demoUrl} {repoUrl} />
		</div>
	</div>
</section>

<style>
	@media (width <= 768px) {
		.card {
			display: flex;
			flex-direction: column;
			align-items: center;

			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
			background-color: var(--bg-color-secondary);
		}
		.container__title {
			display: flex;
			justify-content: center;
			width: 100%;
		}
		.container__image {
			display: flex;
			width: 100%;
			height: 202px;
		}
		.container__description {
			display: flex;
			width: 100%;
			height: 100px;
			border: none;
		}
		.container__button-bar {
			display: flex;
			justify-content: flex-end;
			width: 100%;
			padding-bottom: 8px;
		}
	}
	@media (width > 768px) {
		.card {
			display: flex;
			flex-direction: column;
			align-items: center;
			border: 2px solid var(--color-tertiary);
			border-radius: 8px;
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		}
		.container__bottom {
			background-color: var(--bg-color-secondary);
			border-radius: 0 0 8px 8px;
		}
		.container__title {
			display: flex;
			width: 100%;
			border: 2px solid transparent;
			border-radius: 8px;
		}
		.container__image {
			display: flex;
			width: 100%;
			height: 202px;
		}
		.container__description {
			display: flex;
			width: 100%;
			height: 100px;
		}
		.container__button-bar {
			display: flex;
			justify-content: flex-end;
			width: 100%;
			border: 2px solid transparent;
			border-radius: 8px;
		}
	}
</style>
