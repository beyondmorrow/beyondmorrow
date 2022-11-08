<script>
	import Button from '../internal/Button.svelte';

	export let blok;

	let singleButton = false;
	if (blok.component === 'button') {
		singleButton = true;
	}
</script>

<div class="mb-24 flex justify-center items-center flex-wrap gap-4">
	{#if singleButton}
		<Button text={blok.text} link={blok.link} />
	{:else}
		{#each blok.buttons as button}
			<Button text={button.text} link={button.link} fixedSize={true} />
		{/each}
	{/if}
</div>
