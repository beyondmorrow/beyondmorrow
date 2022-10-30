<script>
	import RichText from "./RichText.svelte";

    export let blok;

    const imagePositionRight = (blok.imagePosition === 'right') ? true : false;
</script>

<div class="flex flex-wrap items-center mb-7">
    <div class="lg:w-2/3 lg:px-3">
        <RichText {blok} />
    </div>
    <div class="w-2/3 mx-auto mb-16 order-first lg:mb-0 lg:w-1/3 lg:px-3" class:lg:order-last={imagePositionRight}>
        <img src="{blok.image.filename}" alt="{blok.image.alt}" />
    </div>
</div>