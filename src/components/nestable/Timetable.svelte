<script>
	import { consent, accept } from '../../modules/cookieBanner';
	import * as c from '../../pathConst';
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

{#if ready}
	{#if $consent === String(true)}
		<!-- Fitogram Booking Tool starts here -->
		<iframe
			title="fitogram"
			frameborder="0"
			src="https://widget.fitogram.pro/beyondmorrow-e-u?fito-embedded=true&w=/calendar"
			width="100%"
			height="1500px"
		/>
		<!-- Fitogram Booking Tool ends here -->
	{:else}
		<div class="mx-auto text-center max-w-xl">
			<p>
				Diese Website verwendet Cookies, um ein besseres Nutzererlebnis zu gewährleisten. Damit der
				Stundenplan geladen werden kann, musst du das Laden von Cookies erlauben. Deine
				Einstellungen werden für's nächste Mal gespeichert.
			</p>
			<p class="mt-4">
				Mehr Informationen dazu findest du in der <a class="underline" href={c.PATH_PRIVACY}
					>Datenschutzerklärung</a
				>
			</p>
			<div class="items-center mt-8">
				<button
					on:click={accept}
					class="rounded-sm drop-shadow-md inline-block w-full md:w-auto py-3 px-8 text-center text-white font-bold bg-beyondpurple-900 hover:bg-beyondpurple-800 transition duration-200"
					>Erlauben</button
				>
			</div>
		</div>
	{/if}
{/if}