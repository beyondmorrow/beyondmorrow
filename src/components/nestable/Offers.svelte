<script>
	import { storyblokEditable } from '@storyblok/svelte';
	import { page } from '$app/stores';
	import Heading from './Heading.svelte';
	import * as c from '../../pathConst';

	export let blok;

	function alternative() {
		switch ($page.url.pathname) {
			case '/yoga':
				return {
					text: "Auf der Suche nach Ruhe? Probier's mal mit ",
					linkText: 'Nuad & Klang',
					href: c.PATH_NUAD_SOUND
				};
			case '/meditation-klang':
				return {
					text: "Auf der Suche nach etwas bewegterem? Probier's mal mit ",
					linkText: 'Yoga',
					href: c.PATH_YOGA
				};
			default:
				return null;
		}
	}
</script>

<div use:storyblokEditable={blok}>
	<section class="bg-beyondrose-100 pb-20">
		<div class="container px-4 mx-auto">
			<Heading {blok} />
			<div class="flex flex-wrap items-stretch -mx-4 -mb-8 pl-5 pr-5">
				{#each blok.offers as offer}
					<div class="w-full lg:w-1/2 px-4 mb-8">
						<a href="#{offer.link.anchor}">
							<div class="py-12 px-6 lg:p-20 bg-white h-full">
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

	{#if alternative() !== null}
		<section class="container mx-auto text-center mt-24">
			<p class="font-spectral italic text-3xl">
				{alternative().text}<a href={alternative().href}><b>{alternative().linkText}</b></a>.
			</p>
		</section>
	{/if}
</div>
