<script>
	import { useStoryblokApi } from '@storyblok/svelte';
	import * as c from '../pathConst';

	export let blok;

	let events = null;
	let event = null;

	const storyblokApi = useStoryblokApi();
	const promise = storyblokApi.get('cdn/stories/', {
		version: 'published',
		starts_with: c.PATH_RETREATS_EVENTS.substring(1),
		excluding_ids: '189787416', // Exclude Retreats & Events Overview Page
		per_page: blok.maxEvents,
	});

	function getFormattedDate(event) {
		const startingDate = new Date(event.startingDate);
		const endDate =	event.endDate.length > 0 ? new Date(event.endDate) : null;

		if (endDate) {
			const sameDay = (startingDate.getFullYear() === endDate.getFullYear() &&
					   startingDate.getMonth() === endDate.getMonth() &&
					   startingDate.getDay() === endDate.getDay());

			if (sameDay) {
				return `${startingDate.toLocaleString()} - ${endDate.toLocaleTimeString()}`;
			} else {
				return `${startingDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
			}
		}

		const timeSpecified = (startingDate.getHours() !== 0 && startingDate.getMinutes !== 0);
		if (timeSpecified) {
			return startingDate.toLocaleString();
		} else {
			return startingDate.toLocaleDateString();
		}
	}
</script>

<div>
	{#await promise}
		<p>Loading ...</p>
	{:then response}
		<!-- Get Stories from response -->
		{((events = response.data.stories), '')}

		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
			{#each events as e}
				<!-- Save current event to variable -->
				{((event = e.content.body[0]), '')}

				<div class="bg-gradient-to-t from-beyondrose-100 to-white shadow-md">
					<div class="w-full h-48 relative overflow-hidden">
						<img
							class="absolute block top-0 left-0"
							src={event.image.filename}
							alt={event.image.alt}
						/>
					</div>
					<div class="p-5 text-center">
						<h3 class="font-spectral text-xl font-semibold italic text-beyondpurple-900">
							{event.title}
						</h3>
						<h4 class="font-spectral text-md">{event.subtitle}</h4>
						<div class="flex items-center my-3">
							<div class="flex-grow h-px bg-slate-300" />
							<span class="flex-shrink text-2xl text-beyondgrey px-3 pb-1">{event.type[0]}</span>
							<div class="flex-grow h-px bg-slate-300" />
						</div>
						<div>
							<span>{getFormattedDate(event)}</span>
						</div>
						<div class="flex items-center justify-center">
							<img class="h-4" src="/icons/location.svg" alt="location" />
							<span>{event.location}</span>
						</div>
						<div><a class="underline" href="/{e.full_slug}">Zum Event</a></div>
					</div>
				</div>
			{/each}
		</div>
	{:catch error}
		<p>Leider konnten keine Events geladen werden.</p>
	{/await}
</div>
