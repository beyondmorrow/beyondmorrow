<script>
	import { getFormattedDate, isPastEvent } from '../../modules/dateHandler';
	import { page } from '$app/stores';

	export let blok;

	function trimEvents(events) {
		const maxEvents = parseInt(blok.maxEvents);
		return events.slice(0, maxEvents);
	}

	function handlePastEvents(events) {
		const showPastEvents = blok.showPastEvents;
		if (showPastEvents === false) {
			events = events.filter((e) => !isPastEvent(e.content.body[0]))
		}
		return events;
	}

	let events = $page.data.events;
	events = trimEvents(events);
	events = handlePastEvents(events);
</script>

<div class="mb-24">
	{#if events.length > 0}
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
			{#each events as event}
				<div
					class="bg-gradient-to-t from-beyondrose-100 to-white shadow-md"
					class:opacity-30={isPastEvent(event.content.body[0])}
				>
					<a href="/{event.full_slug}">
						<div class="w-full h-48 relative overflow-hidden">
							<img
								class="absolute block top-0 left-0"
								src={event.content.body[0].image.filename}
								alt={event.content.body[0].image.alt}
							/>
						</div>
						<div class="p-5 text-center">
							<div class="min-h-[80px]">
								<h3 class="font-spectral text-xl font-semibold italic text-beyondpurple-900">
									{event.content.body[0].heading}
								</h3>
								<h4 class="font-spectral text-md">{event.content.body[0].subheading}</h4>
							</div>
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
					</a>
				</div>
			{/each}
		</div>
	{:else}
		<div class="h-32 max-w-sm text-lg text-center mx-auto">
			<p>
				Aktuell sind keine Events geplant. Melde dich zum Newsletter an, um bei zukünftigen Events
				informiert zu werden.
			</p>
		</div>
	{/if}
</div>
