<script>
	import { Spotify } from 'sveltekit-embed';

	export let blok;
</script>

<div class="mx-auto mb-12">
	<div class="flex justify-center">
		<div class="flex overflow-x-scroll gap-3 xl:overflow-hidden">
			{#each blok.spotify as spotify}
				<Spotify spotifyLink={spotify.spotifyLink} />
			{/each}
		</div>
	</div>
</div>
