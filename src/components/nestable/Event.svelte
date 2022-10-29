<script>
	import Heading from './Heading.svelte';
	import { getFormattedDate } from '../../modules/dateHandler';
	import RichText from './RichText.svelte';

	export let blok;

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
		<div class="mx-10 my-20">
			<div class="flex items-center justify-center text-3xl mb-5">
				<img class="h-8" src="/icons/location.svg" alt="location" />
				<span>{blok.location}</span>
			</div>
			<div class="text-center text-lg">
				<span>{getFormattedDate(blok, true)}</span>
			</div>
			<div class="flex items-center my-5">
				<div class="flex-grow h-px bg-slate-300" />
				<span class="flex-shrink text-2xl text-beyondgrey px-3 pb-1">{blok.type[0]}</span>
				<div class="flex-grow h-px bg-slate-300" />
			</div>
			<div class="text-center">
				<span>{blok.shortDescription}</span>
			</div>
		</div>
	</div>
	<div class="mt-8">
		<RichText blok={richText} />
	</div>
</div>
