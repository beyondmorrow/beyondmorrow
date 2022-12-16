<script>
	import { page } from '$app/stores';
	import Heading from './Heading.svelte';
	import { getFormattedDate, isPastEvent } from '../../modules/dateHandler';
	import RichText from './RichText.svelte';
	import Button from '../internal/Button.svelte';
	import * as c from '../../pathConst';

	export let blok;

	let source = $page.url.pathname.slice($page.url.pathname.lastIndexOf('/') + 1);

	const richText = {
		text: blok.description
	};
</script>

<div>
	<Heading {blok} />
	<div class="grid lg:grid-cols-2 gap-10 items-center">
		<div>
			<img src={blok.image.filename} alt={blok.image.alt} />
		</div>
		<div class="mx-10 my-16">
			<div class="flex items-center justify-center text-3xl mb-5">
				<img class="h-8" src="/icons/location.svg" alt="location" />
				<span>{blok.location}</span>
			</div>
			<div class="text-center text-lg">
				{#if isPastEvent(blok)}
					<span>Die Veranstaltung ist leider schon vorbei.</span>
				{:else}
					<span>{getFormattedDate(blok, true)}</span>
				{/if}
			</div>
			<div class="flex items-center my-5">
				<div class="flex-grow h-px bg-slate-300" />
				<span class="flex-shrink text-2xl text-beyondgrey px-3 pb-1">{blok.type[0]}</span>
				<div class="flex-grow h-px bg-slate-300" />
			</div>
			<div class="text-center">
				<span>{blok.shortDescription}</span>
			</div>
			<div class="mt-5 flex justify-center">
				{#if isPastEvent(blok)}
					<Button link={c.PATH_RETREATS_EVENTS} text="Zukünftige Events anzeigen" />
				{:else}
					<Button link={blok.buttonLink} text={blok.buttonText} source={source}/>
				{/if}
			</div>
		</div>
	</div>
	<div class="mt-8">
		<RichText blok={richText} />
	</div>
</div>
