<script>
    import { YouTube } from "sveltekit-embed";

    export let blok;
</script>

<div class="max-w-3xl mx-auto px-5">
    <YouTube youTubeId={blok.youTubeId} />
</div>