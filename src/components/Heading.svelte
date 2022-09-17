<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;
</script>

<div use:storyblokEditable={blok} class="w-full p-12 rounded-[5px] text-center">
	{#if blok.size === 'h1'}
		<h1 class="font-spectral text-5xl text-beyondpurple">{blok.text}</h1>
	{:else if blok.size === 'h2'}
		<h2 class="font-spectral text-3xl text-beyondpurple">{blok.text}</h2>
	{:else if blok.size === 'h3'}
		<h3 class="font-spectral text-xl text-beyondpurple">{blok.text}</h3>
	{/if}
</div>
