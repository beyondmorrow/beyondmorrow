<script>
	import * as c from '../../pathConst';

	export let blok;

	export let link = c.PATH_TIMETABLE;
	export let text = 'Buchen';
	export let target = '_self';

	let storyblokButton = false;

	if (blok) {
		link = '/' + blok.link;
		text = blok.text;
		storyblokButton = true;
	}
</script>

{#if storyblokButton}
	<div class="text-center">
		<button>
			<a
				class="rounded-sm drop-shadow-md inline-block w-full md:w-auto py-3 px-8 text-center text-white font-bold bg-beyondpurple-900 hover:bg-beyondpurple-800 transition duration-200"
				{target}
				href={link}>{text}</a
			>
		</button>
	</div>
{:else}
	<button>
		<a
			class="rounded-sm drop-shadow-md inline-block w-full md:w-auto py-3 px-8 text-center text-white font-bold bg-beyondpurple-900 hover:bg-beyondpurple-800 transition duration-200"
			{target}
			href={link}>{text}</a
		>
	</button>
{/if}
