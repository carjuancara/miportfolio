<script>
	const { demoUrl, repoUrl } = $props();
</script>

<nav class="container__nav">
	<ul class="container__button">
		<li class="item"><a href={demoUrl}>Demo</a></li>
		<li class="item"><a href={repoUrl}>Repo</a></li>
	</ul>
</nav>

<style>
	@media (width <=768px) {
		.container__nav {
			background-color: slateblue;
			padding: 4px;
			color: white;
		}
		.container__button {
			cursor: pointer;
			border-radius: 8px;
			gap: 8px;
			padding-right: 8px;
			display: flex;
			justify-content: flex-end;
		}
		.item {
			cursor: pointer;
			border-radius: 8px;
			background-color: white;
			color: blueviolet;
			font-size: 1.3rem;
			font-weight: bold;
			padding: 8px;
		}
	}
</style>
