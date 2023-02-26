<script>
    import { Spotify } from "sveltekit-embed";

    export let blok;
</script>

<div class="max-w-3xl mx-auto px-5">
    <Spotify spotifyLink={blok.spotifyLink}/>
</div>