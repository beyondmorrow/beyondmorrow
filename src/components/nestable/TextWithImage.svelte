<script>
	import Button from '../internal/Button.svelte';
	import RichText from './RichText.svelte';

	export let blok;

	const imagePositionRight = blok.imagePosition === 'right' ? true : false;

	let displayButton = false;
	if (blok.buttonText && blok.buttonLink.cached_url) {
		displayButton = true;
	}
</script>

<div class="flex flex-wrap items-center mb-24">
	<div class="lg:w-2/3 lg:px-3">
		<RichText {blok} />
		{#if displayButton}
			<div class="text-center mt-12">
				<Button link={blok.buttonLink} text={blok.buttonText} />
			</div>
		{/if}
	</div>
	<div
		class="w-2/3 mx-auto mb-16 order-first lg:mb-0 lg:w-1/3 lg:px-3"
		class:lg:order-last={imagePositionRight}
	>
		<img src={blok.image.filename} alt={blok.image.alt} />
	</div>
</div>
