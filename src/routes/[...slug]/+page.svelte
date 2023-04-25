<script>
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
	import { consent } from '../../modules/cookieBanner';

	export let data;

	onMount(() => {
		useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
	});
</script>

<svelte:head>
	<title>beyondmorrow - {data.story.name}</title>
	<meta name="description" content={data.story.metaDescription} />

	{#if $consent === String(true)}
		<!-- Google tag (gtag.js) -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-5HWRZDBCQ2"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());

			gtag('config', 'G-5HWRZDBCQ2');
		</script>
	{/if}
</svelte:head>

<div class="mb-20">
	{#if data.story}
		<StoryblokComponent blok={data.story.content} />
	{/if}
</div>
