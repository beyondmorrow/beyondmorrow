<script>
	import Heading from "./Heading.svelte";
    import Button from "../internal/Button.svelte";

    export let blok;

    blok.size = 'h2';


</script>

<div class="bg-beyondrose-100 max-w-[50rem] mx-auto pb-16 pt-6 mb-24">
    <Heading {blok} />
    <div class="mx-auto text-center -mt-16">
        <p class="mb-4">{blok.text}</p>
        <Button link="{blok.buttonLink.cached_url}" text="{blok.buttonText}"/>
    </div>
</div>

