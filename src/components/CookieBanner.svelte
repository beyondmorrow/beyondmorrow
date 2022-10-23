<script>
	import { fly } from 'svelte/transition';
	import * as c from '../pathConst';
	import { onMount } from 'svelte';
	import { accept, decline, consent } from '../modules/cookieBanner';

	let ready = false;

	onMount(() => {
		ready = true;
	});
</script>

{#if ready && $consent !== String(true) && $consent !== String(false)}
	<div
		transition:fly={{ y: 200, duration: 2500 }}
		class="max-w-screen-lg mx-auto fixed bg-beyondrose-100 inset-x-5 p-5 bottom-8 rounded-lg flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between shadow-2xl"
	>
		<div class="w-full">
			Diese Website verwendet Cookies, um ein besseres Nutzererlebnis zu gewährleisten.
			<a href={c.PATH_PRIVACY} class="whitespace-nowrap underline hover:no-underline"
				>Mehr erfahren</a
			>.
		</div>
		<div class="flex gap-4 items-center flex-shrink-0">
			<button
				on:click={decline}
				class="rounded-sm drop-shadow-md inline-block w-full md:w-auto py-3 px-8 text-center text-white font-bold bg-beyondpurple-900 hover:bg-beyondpurple-800 transition duration-200"
				>Ablehnen</button
			>
			<button
				on:click={accept}
				class="rounded-sm drop-shadow-md inline-block w-full md:w-auto py-3 px-8 text-center text-white font-bold bg-beyondpurple-900 hover:bg-beyondpurple-800 transition duration-200"
				>Erlauben</button
			>
		</div>
	</div>
{/if}
