<script>
	import { Title } from '$lib';
	const { skills } = $props();
</script>

<section class="container">
	<Title title="Skills" />
	<section class="content_skills">
		{#each skills as skill (skill)}
			<span class="skill">{skill}</span>
		{/each}
	</section>
</section>

<style>
	@media (width <= 768px) {
		.container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 8px;
			padding: 8px;
			background-color: var(--bg-color-secondary);
			width: 100%;
			color: var(--font-color-primary);
		}
		.content_skills {
			display: flex;
			width: 100%;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
			border: none;
			padding-top: 20px;

			gap: 4px;
			background-color: var(--bg-color-secondary);

			width: 100%;
		}
		.skill {
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 1.3rem;
			font-weight: bold;
			padding: 8px;
			border-radius: 8px;
			background-color: var(--bg-color-primary);
		}
	}
	@media (width > 768px) {
		.container {
			display: flex;
			flex-direction: column;
			align-items: center;

			padding: 20px;
			background-color: var(--bg-color-secondary);
			width: 100%;
			height: 100%;
			color: var(--font-color-primary);
		}
		.content_skills {
			display: flex;
			width: 100%;

			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
			border: none;
			padding-top: 1rem;

			gap: 4px;
			background-color: var(--bg-color-secondary);
		}
		.skill {
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 1.2rem;

			font-weight: bold;
			padding: 8px;
			border-radius: 8px;
			background-color: var(--bg-color-primary);
		}
	}
</style>
