<script>
    import { renderRichText } from '@storyblok/svelte'

    export let blok;
</script>

<div id="customRichText" class="container px-4 mx-auto">
    {@html renderRichText(blok.text)}
</div>

<style>
    #customRichText :global(h1) {
        @apply text-5xl;
        @apply my-5;
        @apply font-spectral;
    }
    #customRichText :global(h2) {
        @apply text-4xl;
        @apply my-5;
        @apply font-spectral;
    }
    #customRichText :global(h3) {
        @apply text-3xl;
        @apply my-5;
        @apply font-spectral;
    }
    #customRichText :global(ul) {
        @apply list-disc;
    }
    #customRichText :global(li) {
        margin-left: 2rem;
    }
    #customRichText :global(p) {
        @apply my-1;
    }
    #customRichText :global(a) {
        @apply underline;
    }
</style>
