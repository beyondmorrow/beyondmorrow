<script>
    import { YouTube } from "sveltekit-embed";

    export let blok;
</script>

<div class="max-w-[50rem] mx-auto px-3 mb-24">
    <YouTube youTubeId={blok.youTubeId} />
</div>