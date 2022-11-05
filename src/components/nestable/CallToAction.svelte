<script>
	import Heading from "./Heading.svelte";
    import Button from "./Button.svelte";

    export let blok;

    blok.size = 'h2';
</script>

<div class="bg-beyondrose-100 max-w-[50rem] mx-auto py-16 px-3 mb-24">
    <Heading {blok} />
    <div class="mx-auto text-center -mt-10 px-4 md:px-10">
        <p class="mb-4">{blok.text}</p>
        <Button link="/{blok.buttonLink.cached_url}" text="{blok.buttonText}"/>
    </div>
</div>

