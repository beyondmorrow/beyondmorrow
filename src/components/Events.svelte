<script>
	import { useStoryblokApi } from '@storyblok/svelte';

	let story = null;

	async function loadEvents() {
		const storyblokApi = useStoryblokApi();
		const data = await storyblokApi.get('cdn/stories/agb', {
			version: 'published',
		})
		story = data.data.story;
	}

	loadEvents();

	
</script>

<div>
	{JSON.stringify(story)}
</div>
