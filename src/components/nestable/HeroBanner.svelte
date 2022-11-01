<script>
	import Button from "../internal/Button.svelte";
	import Heading from "./Heading.svelte";

	export let blok;

    const backgroundImageUrl = blok.image.filename;
	const isFullWidth = Boolean(blok.fullWidth);
</script>

<div
	class:w-full={isFullWidth}
	class:container={!isFullWidth}
	class:mx-auto={!isFullWidth}
	class="h-[40rem] bg-no-repeat bg-cover bg-right-top md:bg-top md:h-[46rem] mb-24 pt-16"
    style="background-image: url({backgroundImageUrl});"
>
	<div class="mx-auto pt-10 px-5 text-center">
        <Heading  {blok}/>
        <Button link="{blok.ctaLink.cached_url}" text="{blok.cta}" />
    </div>
</div>