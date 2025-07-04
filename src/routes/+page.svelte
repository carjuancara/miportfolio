<script>
	import { Card } from '$lib';
	import { Banner } from '$lib';
	import { SocialLink } from '$lib';
	import { About } from '$lib';
	import { Skills } from '$lib';
	import { ViewImage } from '$lib';
	import { projects, name, socialLink, about, skills, profilePhoto } from '$lib';
</script>

<section>
	<section>
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
	<section>
		<section class="container__title">
			<Banner {name} />
		</section>
		<section class="container__skills">
			<SocialLink {socialLink} />
		</section>
	</section>
	<article class="container__personals">
		<section class="clean"></section>
		<section>
			<About {about} />
		</section>
		<section class="clean"></section>
		<section class="container__skills">
			<Skills {skills} />
		</section>
		<section class="clean"></section>
		<section class="container__mifoto">
			<ViewImage images={profilePhoto} />
		</section>
	</article>
</section>

<style>
	@media (width <= 768px) {
		.container__personals {
			display: flex;
			flex-direction: column;
			background-color: slateblue;
		}
		.container__title {
			text-align: center;
			font-size: 1.3rem;
		}
		.container__mifoto {
			padding-top: 1.2rem;
		}
		.clean {
			display: none;
		}
	}
</style>
