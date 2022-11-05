<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;
</script>

<div use:storyblokEditable={blok} class="p-12 rounded-[5px] text-center">
	<img
	class="block {blok.Width} mb-24 mx-auto"
	src="{blok.Image.filename}"
	alt="{blok.Image.alt}"
/>
</div>


