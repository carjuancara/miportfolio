<script>
	const { socialLink } = $props();
</script>

<section class="banner">
	<ul class="social-link">
		{#each socialLink as social (social.name)}
			<li><a class="banner__social" href={social.url}>{social.name}</a></li>
		{/each}
	</ul>
</section>

<style>
	.banner {
		width: 100%;
		height: 100%;
		color: white;
	}

	.social-link {
		padding: 4px 0;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		font-size: 1.3rem;
		background-color: blueviolet;
	}

	.banner__social:hover {
		color: blue;
		cursor: pointer;
		transform: scale(1.1);
		transition: transform 0.3s ease-in-out;
	}

	@media (width >768px) {
		.social-link {
			border-radius: 0;
		}
	}
</style>
