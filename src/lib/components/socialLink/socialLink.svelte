<script>
	const { socialLink } = $props();
	import { base } from '$app/paths';
</script>

<section class="banner">
	<ul class="social-link">
		{#each socialLink as social (social.name)}
			<li class="container__social">
				<a class="banner__social" href={base / social.url}>{base / social.name}</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	@media (width <= 768px) {
		.banner {
			width: 100%;
			height: 100%;
			color: var(--font-color-secondary);
			padding-top: 16px;
			background-color: var(--bg-color-secondary);
		}
		.social-link {
			padding: 4px 0;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 4px;
			font-size: 1.3rem;
			background-color: var(--bg-color-secundary);
		}
		.container__social {
			padding: 8px;
		}
		.banner__social {
			place-content: center center;
			padding: 8px;
			border-radius: 8px;
			place-items: center;
			text-decoration: none;

			color: var(--font-color-secundary);
			background-color: var(--font-color-primary);
		}
		.banner__social:hover {
			color: var(--font-color-secundary);
			cursor: pointer;
			transform: scale(1.1);
			transition: transform 0.3s ease-in-out;
		}
	}

	@media (width >768px) {
		.banner {
			width: 100%;
			height: 100%;
			color: var(--font-color-primary);
		}
		.social-link {
			padding: 4px 0;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 8px;
			font-size: 1.3rem;
			background-color: transparent;
		}

		.banner__social {
			display: flex;
			text-align: center;
			padding: 8px;
			border-radius: 8px;
			place-items: center;
			text-decoration: none;

			color: var(--font-color-secondary);
			background-color: var(--bg-color-tertiary);
		}
		.banner__social:hover {
			cursor: pointer;
			transform: scale(1.1);
			transition: transform 0.3s ease-in-out;
		}
	}
</style>
