<script>
	import * as c from '../../pathConst';

	export let text = 'Buchen';
	export let target = '_self';
	export let link = c.PATH_TIMETABLE;

	if (!link.hasOwnProperty('linktype')) {
		link = {
			linktype: 'custom',
			cached_url: link
		}
	}

	function generateLink(link) {
		if (link.linktype === 'story') {
			return '/'.concat(link.cached_url);
		} else {
			return link.cached_url;
		}
	}
</script>

<button>
	<a
		class="rounded-sm drop-shadow-md inline-block w-full md:w-auto py-3 px-8 text-center text-white font-bold bg-beyondpurple-900 hover:bg-beyondpurple-800 transition duration-200"
		{target}
		href={generateLink(link)}>{text}</a
	>
</button>
