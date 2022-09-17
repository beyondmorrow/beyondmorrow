<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;
</script>

<div use:storyblokEditable={blok}>
	<section class="py-24 bg-beyondrose-100">
		<div class="container px-4 mx-auto">
			<div class="max-w-xl mx-auto mb-16 text-center">
				<h1 class="font-spectral text-5xl text-beyondpurple">{blok.heading}</h1>
				<p>
					{blok.subheading}
				</p>
			</div>

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
