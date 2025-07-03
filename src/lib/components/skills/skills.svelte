<script>
	import Title from '../title/title.svelte';

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
			background-color: slateblue;
			width: 100%;
			color: white;
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
			background-color: slateblue;

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
			background-color: blueviolet;
		}
	}
</style>
