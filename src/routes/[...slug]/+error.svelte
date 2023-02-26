<script>
	import Heading from "../../components/nestable/Heading.svelte";
	import YouTube from "../../components/nestable/YouTube.svelte";
    import * as c from "../../pathConst";

    const heading = {
        heading: '404',
        subheading: 'Leider kann die gewünschte Seite nicht geladen werden.'
    }
</script>

<div class="container mx-auto text-center mb-24">
    <Heading blok={heading}  />
    <YouTube youTubeId="NejGRqVns_w" autoPlay={true}/>
</div>