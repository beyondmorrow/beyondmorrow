<script>
	import { storyblokEditable } from '@storyblok/svelte';
	import Heading from './Heading.svelte';

	export let blok;

	blok.size = 'h1';
</script>

<div use:storyblokEditable={blok}>
	<section class="bg-beyondrose-100">
		<div class="container px-4 mx-auto">
			<Heading {blok} />
			<div class="flex flex-wrap -mx-4 -mb-8 pl-5 pr-5">
				{#each blok.offers as offer}
					<div class="w-full lg:w-1/2 px-4 mb-8">
						<div class="py-12 px-6 lg:p-20 bg-white">
							<img class="mb-6" src="pstls-assets/icons/rounded-document-clean.svg" alt="" />
							<h2 class="text-3xl font-spectral font-semibold italic font-heading mb-4">
								{offer.heading}
							</h2>
							<p class="max-w-xs leading-8">
								{offer.subheading}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>
