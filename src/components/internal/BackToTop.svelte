<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const backToTopButton = document.getElementById('backToTopButton');
		window.onscroll = function () {
			scrollFunction();
		};
	});

    const pixelThreshold = 500;
	function scrollFunction() {
		if (document.body.scrollTop > pixelThreshold || document.documentElement.scrollTop > pixelThreshold) {
			backToTopButton.style.display = 'flex';
		} else {
			backToTopButton.style.display = 'none';
		}
	}

    let timeout;
	function scrollToTop() {
        if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
            window.scrollBy(0, -50);
            timeout = setTimeout(scrollToTop, 5);
        } else {
            clearTimeout(timeout);
        }
	}
</script>

<div
	on:click={scrollToTop}
	id="backToTopButton"
	class="fixed bottom-3 right-3 md:bottom-6 md:right-6 w-10 h-10 md:w-16 md:h-16 bg-beyondpurple-800 hover:bg-beyondpurple-900 bg-opacity-25 hover:bg-opacity-30 z-10 hidden justify-center items-center rounded-sm shadow-md"
>
	<img src="/icons/arrow-up.svg" alt="arrow up" />
</div>
