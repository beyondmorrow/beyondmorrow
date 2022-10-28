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
	<div class="grid grid-cols-2 gap-10">
		<div>
			<img src={blok.image.filename} alt={blok.image.alt} />
		</div>
		<div class="m-10">
			<div class="flex items-center justify-center text-3xl mb-5">
				<img class="h-8" src="/icons/location.svg" alt="location" />
				<span>{blok.location}</span>
			</div>
			<div class="text-center text-lg">
				<span>{getFormattedDate(blok, true)}</span>
			</div>
		</div>
	</div>
	<div class="text-center mt-10">
		<RichText blok={richText} />
	</div>
</div>
