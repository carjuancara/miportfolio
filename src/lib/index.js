// place files you want to import through the `$lib` alias in this folder.

export { default as About } from './components/about/about.svelte';
export { default as ButtonBar } from './components/buttonBar/buttonBar.svelte';
export { default as Card } from './components/card/card.svelte';
export { default as Banner } from './components/banner/banner.svelte';
export { default as Description } from './components/description/description.svelte';
export { default as ViewImage } from './components/imageViewer/viewImage.svelte';
export { default as Skills } from './components/skills/skills.svelte';
export { default as SocialLink } from './components/socialLink/socialLink.svelte';
export { default as Title } from './components/title/title.svelte';
export { default as Data } from './assets/data/data.json';

import data from './assets/data/data.json';
export const { name, socialLink, profilePhoto, about, skills, projects } = data;
