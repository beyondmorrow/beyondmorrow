<script>
	import Heading from "../../components/nestable/Heading.svelte";
    import * as c from "../../pathConst";

    const heading = {
        heading: '404',
        subheading: 'Leider kann die gewünschte Seite nicht geladen werden.'
    }
</script>

<div class="container mx-auto text-center mb-24">
    <Heading blok={heading}  />
    <div>
        <ul class="text-lg">
            <li><a class="underline mb-2" href="{c.PATH_FAQ}">FAQ</a></li>
            <li><a class="underline mb-2" href="{c.PATH_TIMETABLE}">Stundenplan</a></li>
            <li><a class="underline mb-2" href="{c.PATH_PRICES}">Preise</a></li>
            <li><a class="underline mb-2" href="{c.PATH_CONTACT}">Kontakt</a></li>
        </ul>
    </div>
</div>