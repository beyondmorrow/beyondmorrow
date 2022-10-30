<script>
	export let blok;

	const testimonials = blok.testimonials;
	const testimonialCount = testimonials.length;
	const randomTestimonialIndex = Math.floor(Math.random() * testimonialCount);

	let currentIndex = randomTestimonialIndex;
	let currentTestimonial = {
		testimonial: testimonials[currentIndex].testimonial,
		name: testimonials[currentIndex].name
	};

	function navigateLeft() {
		if (currentIndex === 0) {
			currentIndex = testimonialCount - 1;
		} else {
			currentIndex -= 1;
		}
		changeTestimonial();
	}

	function navigateRight() {
		if (currentIndex === testimonialCount - 1) {
			currentIndex = 0;
		} else {
			currentIndex += 1;
		}
		changeTestimonial();
	}

	function changeTestimonial() {
		currentTestimonial = {
			testimonial: testimonials[currentIndex].testimonial,
			name: testimonials[currentIndex].name
		};
	}
</script>

<div class="mx-auto mb-16">
    <!-- Testimonial -->
	<div class="mx-auto flex justify-center items-center mb-8 max-w-2xl md:h-48">
		<div class="text-center text-lg">{currentTestimonial.testimonial}</div>
	</div>
    <!-- Navigation -->
	<div class="flex justify-center items-center gap-10">
		<div class="w-5 hover:cursor-pointer" on:click={navigateLeft}>
			<img src="/icons/arrow-left.svg" alt="arrow left" />
		</div>
		<div class="text-center font-spectral font-semibold italic w-16">
			{currentTestimonial.name}
		</div>
		<div class="w-5 hover:cursor-pointer" on:click={navigateRight}>
			<img src="/icons/arrow-right.svg" alt="arrow right" />
		</div>
	</div>
</div>
