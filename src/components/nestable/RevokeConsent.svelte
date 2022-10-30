<script>
	import { revokeConsent, consent } from '../../modules/cookieBanner';
	export let blok;
</script>

{#if $consent === String(true) || $consent === String(false)}
	<div class="mb-12 mx-auto max-w-lg text-center">
        <span>{blok.infoText}</span>
		<button class="underline" on:click={revokeConsent}>{blok.revokeButtonText}</button>
	</div>
{/if}
