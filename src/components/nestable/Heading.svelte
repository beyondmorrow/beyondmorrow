<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;

	if (blok.hasOwnProperty('size') === false) {
		blok.size = 'h1';
	}

	let paddingTop = false;
	if (blok.size === 'h1') {
		paddingTop = true;
	}

	const noBottomMargin = Boolean(blok.noBottomMargin);
</script>

<div use:storyblokEditable={blok} class="w-full pb-5 text-center" class:pt-16={paddingTop} class:mb-14={!noBottomMargin}>
	<div class="max-w-2xl mx-auto">
		{#if blok.size === 'h1'}
			<h1 class="font-spectral text-5xl text-beyondpurple-900">{blok.heading}</h1>
		{:else if blok.size === 'h2'}
			<h2 class="font-spectral text-3xl text-beyondpurple-900">{blok.heading}</h2>
		{:else if blok.size === 'h3'}
			<h3 class="font-spectral text-xl text-beyondpurple-900">{blok.heading}</h3>
		{/if}
		{#if blok.subheading}
			<p class="font-spectral italic text-2xl mt-3">
				{blok.subheading}
			</p>
		{/if}
	</div>
</div>
