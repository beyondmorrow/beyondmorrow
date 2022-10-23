<script>
	import { storyblokEditable } from '@storyblok/svelte';
	import Button from './Button.svelte';
	import * as c from '../pathConst'

	export let blok;

	let offerCount = 0;
	function countAndChangeTemplate() {
		offerCount++;
		return offerCount % 2 === 0;
	}
</script>

<div use:storyblokEditable={blok}>
	{#each blok.detailedOffers as offer}
		<section id={offer.anchor} class="py-24">
			<div class="container px-4 mx-auto max-w-6xl">
				<div class="flex flex-wrap items-center">
					{#if countAndChangeTemplate()}
						<div class="w-full lg:w-2/3 px-4 mb-16 lg:mb-0">
							<div class="text-left">
								<h2
									class="font-spectral text-4xl lg:text-5xl font-heading mb-9 text-beyondpurple-900"
								>
									{offer.heading}
								</h2>
								<p class="leading-8 mb-14">
									{offer.text}
								</p>
								<h3 class="font-spectral italic text-2xl">
									{offer.secondHeading}
								</h3>
								<ul class="leading-8 list-disc pl-6">
									{#each offer.bulletPoints as bulletPoint}
										<li>{bulletPoint.text}</li>
									{/each}
								</ul>
							</div>
						</div>
						<div class="w-full lg:w-1/3 px-4">
							<div class="relative">
								<img
									class="block w-full relative"
									src={offer.image.filename}
									alt={offer.image.alt}
								/>
							</div>
						</div>
					{:else}
						<div class="w-full lg:w-1/3 px-4">
							<div class="relative">
								<img
									class="block w-full relative"
									src={offer.image.filename}
									alt={offer.image.alt}
								/>
							</div>
						</div>
						<div class="w-full lg:w-2/3 px-4 mb-16 lg:mb-0">
							<div class="text-left">
								<h2
									class="font-spectral text-4xl lg:text-5xl font-heading mb-9 text-beyondpurple-900"
								>
									{offer.heading}
								</h2>
								<p class="leading-8 mb-14">
									{offer.text}
								</p>
								<h3 class="font-spectral italic text-2xl">
									{offer.secondHeading}
								</h3>
								<ul class="leading-8 list-disc pl-6">
									{#each offer.bulletPoints as bulletPoint}
										<li>{bulletPoint.text}</li>
									{/each}
								</ul>
							</div>
						</div>
					{/if}
				</div>
				<div class="mt-5 text-center">
					<Button link="/{offer.callToActionLink.cached_url}" text={offer.callToAction} />
					<a class="ml-3 underline" href="{c.PATH_PRICES}">Zu den Preisen</a>
				</div>
			</div>
		</section>
	{/each}
</div>
