<script>
	const { demoUrl, repoUrl } = $props();
	import { base } from '$app/paths';
</script>

<nav class="container__nav">
	<ul class="container__button">
		<li class="item_container"><a class="item" href={{ base } / demoUrl}>Demo</a></li>
		<li class="item_container"><a class="item" href={{ base } / repoUrl}>Repo</a></li>
	</ul>
</nav>

<style>
	.container__nav {
		color: var(--font-color-primary);
	}

	.container__button {
		padding: 1rem 1rem 1rem 0;
		border-radius: 8px;

		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 8px;

		cursor: pointer;
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
