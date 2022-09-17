<script>
	import { storyblokEditable } from '@storyblok/svelte';
	import Heading from './Heading.svelte';

	export let blok;

	// Size for Heading component
	blok.size = 'h1';

	function generateTextForAlternatives(alternative) {
		switch (alternative) {
			case 'yoga':
				return 'Yoga';
			case 'meditation':
				return 'Meditation';
			case 'healing-arts':
				return 'Healing Arts';
		}
	}
</script>

<div use:storyblokEditable={blok}>
	<section class="bg-beyondrose-100 pb-20">
		<div class="container px-4 mx-auto">
			<Heading {blok} />
			<div class="flex flex-wrap -mx-4 -mb-8 pl-5 pr-5">
				{#each blok.offers as offer}
					<div class="w-full lg:w-1/2 px-4 mb-8">
						<a href="#{offer.link.anchor}">
							<div class="py-12 px-6 lg:p-20 bg-white">
								<img class="mb-6" src={offer.image.filename} alt={offer.image.alt} />
								<h2
									class="break-words text-3xl font-spectral font-semibold italic font-heading mb-4"
								>
									{offer.heading}
								</h2>
								<div class="leading-8">
									{offer.subheading}
									<br />
									<p class="underline">Mehr erfahren</p>
								</div>
							</div>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="container mx-auto text-center mt-16">
		<p class="font-spectral italic text-3xl">
			Lust auf etwas anderes? Entdecke <a class="font-bold" href="/{blok.alternatives[0]}">
				{generateTextForAlternatives(blok.alternatives[0])}</a>
			und
			<a class="font-bold" href={blok.alternatives[1]}>{generateTextForAlternatives(blok.alternatives[1])}</a>.
		</p>
	</section>
</div>
