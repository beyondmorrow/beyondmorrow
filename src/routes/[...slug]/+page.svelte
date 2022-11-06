<script>
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';

	export let data;

	onMount(() => {
		useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
	});
</script>

<svelte:head>
	<title>beyondmorrow - {data.story.name}</title>
	<meta name="description" content="{data.story.metaDescription}">
</svelte:head>

<div class="mb-20">
	{#if data.story}
		<StoryblokComponent blok={data.story.content} />
	{/if}
</div>
