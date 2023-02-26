<script>
    import { YouTube } from "sveltekit-embed";

    export let youTubeId;
    export let autoPlay = false;
</script>

<div class="max-w-3xl mx-auto px-5">
    <YouTube {youTubeId} {autoPlay}} />
</div>