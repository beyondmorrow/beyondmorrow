<script>
	import { storyblokEditable } from '@storyblok/svelte';
	import { renderRichText } from '@storyblok/svelte';
	import Button from '../internal/Button.svelte';
	import Heading from './Heading.svelte';

	export let blok;

	// heading size
	blok.size = 'h1';

	let expandedAnswers = [];
	function isAnswerExpanded(uid) {
		if (expandedAnswers.includes(uid)) {
			return true;
		}
		return false;
	}

	function expandAnswer(uid) {
		if (isAnswerExpanded(uid)) {
			expandedAnswers = arrayRemove(expandedAnswers, uid);
		} else {
			expandedAnswers = expandedAnswers.concat(uid);
		}
	}

	function arrayRemove(arr, value) {
		return arr.filter((arrValue) => {
			return arrValue !== value;
		});
	}
</script>

<div use:storyblokEditable={blok}>
	<section>
		<div class="container px-4 mx-auto">
			<div class="max-w-xl mx-auto mb-20 text-center">
				<Heading {blok} />
			</div>
			{#each blok.faqs as question}
				{#key expandedAnswers}
					<div
						on:click={expandAnswer(question._uid)}
						class="px-4 md:px-12 pt-8 pb-2 bg-beyondrose-100 mb-5"
					>
						<div class="w-full">
							<div class="flex justify-between items-start">
								<h5 class="mb-6 text-xl font-spectral font-bold italic">
									{question.question}
								</h5>
								<button class="ml-2 w-6 shrink-0">
									{#if isAnswerExpanded(question._uid)}
										<img src="/icons/arrow-up.svg" alt="" />
									{:else}
										<img src="/icons/arrow-down.svg" alt="" />
									{/if}
								</button>
							</div>
							{#if isAnswerExpanded(question._uid)}
								<div id="customRichText" class=" leading-8 text-gray-800 text-lg pb-5">
									{@html renderRichText(question.answer)}
								</div>
							{/if}
						</div>
					</div>
				{/key}
			{/each}
			<div class="bg-beyondrose-100">
				<div class="p-12 md:p-20">
					<div class="flex flex-wrap -mx-4">
						<div class="w-full font-spectral lg:w-4/6 px-4 mb-6 lg:mb-0 text-center lg:text-left">
							<h2 class="text-beyondpurple-800 text-3xl font-heading mb-2">{blok.secondHeading}</h2>
							<p class="italic">{blok.secondSubheading}</p>
						</div>
						<div class="w-full lg:w-2/6 px-4 text-center lg:text-right">
							<Button link={blok.buttonLink.cached_url} text={blok.buttonText} />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	#customRichText :global(h1) {
		@apply text-5xl;
		@apply my-5;
	}
	#customRichText :global(h2) {
		@apply text-4xl;
		@apply my-5;
	}
	#customRichText :global(h3) {
		@apply text-3xl;
		@apply my-5;
	}
	#customRichText :global(ul) {
		@apply list-disc;
	}
	#customRichText :global(li) {
		margin-left: 2rem;
	}
	#customRichText :global(p) {
		@apply my-1;
	}
	#customRichText :global(a) {
		@apply underline;
	}
</style>
