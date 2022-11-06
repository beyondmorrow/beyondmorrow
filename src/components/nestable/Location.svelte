<script>
	import Button from "../internal/Button.svelte";

    export let blok;
</script>

<div
	class="flex flex-wrap items-center justify-center bg-beyondrose-100 max-w-[50rem] mx-auto mb-24 py-14 px-5 md:px-20 gap-6"
>
	<div class="shrink-0">
			<a href="{blok.link.cached_url}" target="blank">
				<img class="w-10" src="/icons/location.svg" alt="" />
			</a>
	</div>

	<div class="flex flex-col justify-evenly items-center gap-2">
		<div>{blok.address}</div>
        <div><a href="tel:{blok.phone}">{blok.phone}</a></div>
	</div>

    <div>
        <Button link="{blok.link}" text="In Google Maps öffnen" target="blank"/>
    </div>
</div>