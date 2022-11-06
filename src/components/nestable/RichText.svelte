<script>
    import { renderRichText } from '@storyblok/svelte';

    export let blok;

    const textCenter = Boolean(blok.textCenter);
</script>

<div id="customRichText" class="container px-4 mx-auto mb-24" class:text-center={textCenter}>
    {@html renderRichText(blok.text)}
</div>

<style>
    #customRichText :global(h1) {
        @apply text-5xl;
        @apply my-5;
        @apply font-spectral;
        @apply text-beyondpurple-900;
    }
    #customRichText :global(h2) {
        @apply text-4xl;
        @apply my-5;
        @apply font-spectral;
        @apply text-beyondpurple-900;
    }
    #customRichText :global(h3) {
        @apply text-3xl;
        @apply my-5;
        @apply font-spectral;
        @apply text-beyondpurple-900;
    }
    #customRichText :global(h4) {
        @apply text-5xl;
        @apply my-8;
        @apply font-northwell;
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
