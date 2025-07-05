<script>
	const { demoUrl, repoUrl } = $props();
</script>

<nav class="container__nav">
	<ul class="container__button">
		<li class="item_container"><a class="item" href={demoUrl}>Demo</a></li>
		<li class="item_container"><a class="item" href={repoUrl}>Repo</a></li>
	</ul>
</nav>

<style>
	.container__nav {
		padding: 4px;
		color: var(--font-color-primary);
	}

	.container__button {
		cursor: pointer;
		border-radius: 8px;
		gap: 16px;
		padding-right: 1rem;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.item_container {
		display: flex;
		align-items: center;
		margin-right: 4px;
	}

	.item {
		padding: 8px;
		border-radius: 8px;
		flex-basis: 80px;
		flex-shrink: 0;
		background-color: var(--bg-color-tertiary);
		color: var(--font-color-secondary);
		font-size: 1.3rem;
		text-align: center; /* Centra el texto dentro del item */
	}

	.item:hover {
		cursor: pointer;
		transform: scale(1.1);
		transition: transform 0.3s ease-in-out;
	}
</style>
