<script>
    import BiggerPicture from "bigger-picture/svelte";
    import "bigger-picture/css";
    import { onMount } from "svelte";
    import Macy from "macy?client";
    import { getImageDimensions } from "../../modules/storyblok.js"

    export let blok;

    onMount(() => {
        // initialize BiggerPicture
        const bp = BiggerPicture({
            target: document.body,
        });

        // grab image links
        const imageLinks = document.querySelectorAll("#images > a");

        // add click listener to open BiggerPicture
        for (let link of imageLinks) {
            link.addEventListener("click", openGallery);
        }

        // open BiggerPicture
        function openGallery(e) {
            e.preventDefault();
            bp.open({
                items: imageLinks,
                el: e.currentTarget,
                scale: blok.scale,
            });
        }

        // masonry grid
        Macy({
            container: "#images",
            trueOrder: !blok.randomOrder,
            margin: parseInt(blok.margin),
            columns: parseInt(blok.columnsLargeDisplay),
            breakAt: {
                1200: parseInt(blok.columnsMediumDisplay),
                520: parseInt(blok.columnsSmallDisplay),
                400: 1,
            },
        });
    });

    /**
     * Check if thumbnail was set and use the main image alternatively
     *
     * @param url the string url to the thumbnail
     * @param alternativeurl the string url to the main image
     */
    const useThumbnailOrMainAsDefault = (url, alternativeUrl) => {
        return url !== null && url.length > 0 ? url : alternativeUrl;
    };
</script>

<div id="images" class="mx-auto {blok.reduceWidth ? "max-w-5xl": ""}">
    {#each blok.images as image}
        <a
            href={image.main.filename}
            data-img={image.main.filename}
            data-thumb={useThumbnailOrMainAsDefault(
                image.thumbnail.filename,
                image.main.filename
            )}
            data-alt={image.main.alt}
            data-width={getImageDimensions(image.main.filename).width}
            data-height={getImageDimensions(image.main.filename).height}
        >
            <img
                src={useThumbnailOrMainAsDefault(
                    image.thumbnail.filename,
                    image.main.filename
                )}
                alt={image.main.alt}
            />
        </a>
    {/each}
</div>
