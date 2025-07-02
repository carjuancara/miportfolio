<script>
	const { demoUrl, repoUrl } = $props();
</script>

<nav class="container__nav">
	<ul class="container__button__bar">
		<li class="container__button__bar__item"><a href={demoUrl}>Demo</a></li>
		<li class="container__button__bar__item"><a href={repoUrl}>Repo</a></li>
	</ul>
</nav>

<style>
	.container__nav {
		background-color: #1e2939;
		padding: 8px;
		color: white;
	}
	.container__button__bar {
		cursor: pointer;
		border-radius: 8px;
		gap: 8px;
		padding-right: 8px;
		display: flex;
		justify-content: flex-end;
	}
	.container__button__bar__item {
		cursor: pointer;
		border-radius: 8px;
		background-color: #155dfc;
		padding: 8px;
	}
</style>
