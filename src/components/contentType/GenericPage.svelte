<script>
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';

	export let blok;
</script>

{#key blok}
	<div use:storyblokEditable={blok}>
		{#each blok.body as blok}
			{#if blok.component === 'heroBanner'}
				<diV class="w-full">
					<StoryblokComponent {blok} />
				</diV>
			{:else}
				<diV class="px-6 container mx-auto">
					<StoryblokComponent {blok} />
				</diV>
			{/if}
		{/each}
	</div>
{/key}
