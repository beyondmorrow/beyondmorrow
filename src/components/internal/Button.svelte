<script>
    import * as c from '../../pathConst';

    export let link = c.PATH_TIMETABLE;
    export let text = "Buchen";
    export let target = "_self";
</script>

<button>
    <a
		class="rounded-sm drop-shadow-md inline-block w-full md:w-auto py-3 px-8 text-center text-white font-bold bg-beyondpurple-900 hover:bg-beyondpurple-800 transition duration-200"
        target={target}
		href="{link}">{text}</a
	>
</button>
