<script>
	import { useStoryblokApi } from '@storyblok/svelte';
	import * as c from '../pathConst';

	// let events = null;

	// async function loadEvents() {
	// 	const storyblokApi = useStoryblokApi();
	// 	const { data } = await storyblokApi.get('cdn/stories', {
	// 		version: 'published',
	// 		starts_with: c.PATH_RETREATS_EVENTS.substring(1),
	// 		excluding_ids: '189787416' // Exclude Retreats & Events Overview Page
	// 	})

	// 	events = data.stories;
	// }

	// loadEvents();

	let events = null;

	const storyblokApi = useStoryblokApi();
	const promise = storyblokApi.get('cdn/stories/', {
		version: 'published',
		starts_with: c.PATH_RETREATS_EVENTS.substring(1),
		excluding_ids: '189787416' // Exclude Retreats & Events Overview Page
	});
</script>

<div>
	{#await promise}
		<p>Loading ...</p>
	{:then response}
		{((events = response.data.stories), '')}

		<div class="bg-blue-400 grid grid-cols-4 gap-5">
			{#each events as event}
				<div>
					<h3>{event.content.body[0].title}</h3>
					<h4>{event.content.body[0].subtitle}</h4>
					<p>{event.content.body[0].startingDate}</p>

					{#if event.content.body[0].hasOwnProperty('endDate')}
						<p>{event.content.body[0].endDate}</p>
					{/if}
					<p>{event.content.body[0].type[0]}</p>
					<p>{event.content.body[0].location}</p>
				</div>
			{/each}
		</div>
	{:catch error}
		<p>Leider konnten keine Events geladen werden.</p>
	{/await}
</div>
