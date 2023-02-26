<script>
	import Heading from "../../components/nestable/Heading.svelte";
	import YouTube from "../../components/nestable/YouTube.svelte";

    const heading = {
        heading: '404',
        subheading: 'Leider kann die gewünschte Seite nicht geladen werden.'
    }

    const youTubeVideo = {
        youTubeId: "NejGRqVns_w"
    }
</script>

<div class="container mx-auto text-center mb-24">
    <Heading blok={heading}  />
    <YouTube blok={youTubeVideo}/>
</div>