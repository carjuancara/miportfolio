<script>
	import Title from '$lib/components/title/title.svelte';
	import ViewImage from '$lib/components/imageViewer/viewImage.svelte';
	import Description from '$lib/components/description/description.svelte';
	import ButtonBar from '$lib/components/button-bar/buttonBar.svelte';
	const { title, images, description, demoUrl, repoUrl } = $props();
</script>

<section class="card">
	<div class="container__title">
		<Title {title} />
	</div>
	<div class="container__image">
		<ViewImage {images} />
	</div>
	<div class="container__description">
		<Description {description} />
	</div>
	<div class="container__button-bar">
		<ButtonBar {demoUrl} {repoUrl} />
	</div>
</section>

<style>
	@media (width <= 768px) {
		.card {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 4px;
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
			background-color: slateblue;
		}
		.container__title {
			margin-bottom: 8px;
			display: flex;
			width: 100%;
		}
		.container__image {
			display: flex;
			width: 100%;
			height: 202px;
			margin-bottom: 8px;
		}
		.container__description {
			display: flex;
			width: 100%;
			height: 100px;
			margin-bottom: 8px;
		}
		.container__button-bar {
			display: flex;
			justify-content: flex-end;
			width: 100%;
			margin-bottom: 1px;
		}
	}
</style>
