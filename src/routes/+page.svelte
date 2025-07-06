<script>
	import { Card } from '$lib';
	import { Banner } from '$lib';
	import { SocialLink } from '$lib';
	import { About } from '$lib';
	import { Skills } from '$lib';
	import { ViewImage } from '$lib';
	import { projects, name, socialLink, about, skills, profilePhoto } from '$lib';
</script>

<section class="container__principal bg-gray-900">
	<section class="container__projects">
		{#each projects as project (project.name)}
			<Card
				title={project.name}
				description={project.description}
				images={project.img}
				demoUrl={project.demoUrl}
				repoUrl={project.repoUrl}
			/>
		{/each}
	</section>
	<section class="container__title">
		<Banner {name} />
	</section>
	<section class="container__social">
		<SocialLink {socialLink} />
	</section>
	<article class="container__personals">
		<section class="personal clean"></section>
		<section class="personal about">
			<About {about} />
		</section>
		<section class="personal clean"></section>
		<section class="personal skills">
			<Skills {skills} />
		</section>
		<section class="personal clean"></section>
		<section class="personal container__mifoto">
			<ViewImage images={profilePhoto} />
		</section>
	</article>
</section>

<style>
	@media (width <= 768px) {
		.container__personals {
			display: flex;
			flex-direction: column;
			background-color: var(--bg-color-secondary);
		}
		.container__title {
			text-align: center;
		}
		.container__mifoto {
			padding-top: 1.2rem;
		}
		.clean {
			display: none;
		}
	}

	@media (width > 768px) {
		.container__principal {
			display: flex;
			flex-direction: column;
			gap: 2vw;
			margin: 0 10vw;
			padding: 0 5vw;
			background-color: var(--bg-color-primary);
		}

		.container__projects {
			margin-top: 8px;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 8px;
		}

		.container__personals {
			width: 100%;
			height: 920px;
			border-radius: 8px;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(2, 450px);
			gap: 5px;

			grid-template-areas:
				'clean-1 mifoto clean-2'
				'about clean-3 skills';
		}

		.personal {
			background-color: var(--bg-color-primary);
			border-radius: 4px;

			overflow: hidden;
			border: 2px solid var(--bg-color-tertiary);
		}

		.about {
			grid-area: about;
			padding: 0;
		}

		.skills {
			grid-area: skills;
		}

		.container__mifoto {
			grid-area: mifoto;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
		}

		.container__mifoto :global(img) {
			max-width: 100%;
			max-height: 100%;
			object-fit: fill;
			object-position: center;
		}

		.clean {
			background-color: var(--bg-color-secondary);
		}

		.clean:nth-child(1) {
			grid-area: clean-1;
		}

		.clean:nth-child(3) {
			grid-area: clean-3;
		}

		.clean:nth-child(5) {
			grid-area: clean-2;
		}
	}
</style>
