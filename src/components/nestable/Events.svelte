<script>
	import { useStoryblokApi } from '@storyblok/svelte';
	import * as c from '../../pathConst';
	import LoadingSpinner from '../internal/LoadingSpinner.svelte';
	import { getFormattedDate, isPastEvent } from '../../modules/dateHandler';

	export let blok;
	let events = null;
	const dateToday = new Date();

	const storyblokApi = useStoryblokApi();
	const promise = storyblokApi.get('cdn/stories/', {
		version: 'published',
		starts_with: c.PATH_RETREATS_EVENTS.substring(1),
		is_startpage: 0, // Exclude Retreats & Events Overview Page
		per_page: blok.maxEvents,
		sort_by: Boolean(blok.showPastEvents)
			? 'content.startingDate:desc'
			: 'content.startingDate:asc',
		filter_query: {
			component: {
				in: 'eventPage'
			},
			...(Boolean(blok.showPastEvents) === false && {
				startingDate: {
					gt_date: dateToday.toJSON().slice(0, 10)
				}
			})
		}
	});
</script>

<div class="mb-24">
	{#await promise}
		<LoadingSpinner />
	{:then response}
		<!-- Get Stories from response-->
		{((events = response.data.stories), '')}

		{#if events.length > 0}
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
				{#each events as event}
					<div
						class="bg-gradient-to-t from-beyondrose-100 to-white shadow-md"
						class:pointer-events-none={isPastEvent(event.content.body[0])}
						class:opacity-30={isPastEvent(event.content.body[0])}
					>
						<div class="w-full h-48 relative overflow-hidden">
							<img
								class="absolute block top-0 left-0"
								src={event.content.body[0].image.filename}
								alt={event.content.body[0].image.alt}
							/>
						</div>
						<div class="p-5 text-center">
							<h3 class="font-spectral text-xl font-semibold italic text-beyondpurple-900">
								{event.content.body[0].heading}
							</h3>
							<h4 class="font-spectral text-md">{event.content.body[0].subheading}</h4>
							<div class="flex items-center my-3">
								<div class="flex-grow h-px bg-slate-300" />
								<span class="flex-shrink text-2xl text-beyondgrey px-3 pb-1"
									>{event.content.body[0].type[0]}</span
								>
								<div class="flex-grow h-px bg-slate-300" />
							</div>
							<div>
								<span>{getFormattedDate(event.content.body[0])}</span>
							</div>
							<div class="flex items-center justify-center">
								<img class="h-4" src="/icons/location.svg" alt="location" />
								<span>{event.content.body[0].location}</span>
							</div>
							<div><a class="underline" href="/{event.full_slug}">Zum Event</a></div>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<div class="h-32 max-w-sm text-lg text-center mx-auto">
				<p>Aktuell sind keine Events geplant. Melde dich zum Newsletter an, um bei zukünftigen Events informiert zu werden.</p>
			</div>
		{/if}
	{:catch error}
		<div class="h-32 max-w-sm text-center text-lg mx-auto">
			<img src="/icons/error.svg" class="w-5 h-5 mx-auto" alt="error" />
			<p>Beim Laden der Events ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.</p>
		</div>
	{/await}
</div>
