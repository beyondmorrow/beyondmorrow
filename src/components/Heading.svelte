<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;
</script>

<div use:storyblokEditable={blok} class="w-full p-12 rounded-[5px] text-center">
	<h1 class="font-spectral text-5xl text-beyondpurple">{blok.name}</h1>
</div>
