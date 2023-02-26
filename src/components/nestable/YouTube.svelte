<script>
    import { YouTube } from "sveltekit-embed";

    export let youTubeId;
    export let autoPlay = false;
</script>

<div class="max-w-3xl mx-auto">
    <YouTube {youTubeId} {autoPlay}} />
</div>