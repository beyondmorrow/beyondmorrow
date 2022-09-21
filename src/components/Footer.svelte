<script>
	const footerHeadingLeft = 'Hilfe';
	const footerMenuLeft = [
		{
			name: 'FAQ',
			link: '/faq'
		},
		{
			name: 'Stundenplan',
			link: '/stundenplan'
		},
		{
			name: 'Preise',
			link: '/preise'
		},
		{
			name: 'Kontakt',
			link: '/contact'
		}
	];

	const footerHeadingRight = 'Mein Angebot';
	const footerMenuRight = [
		{
			name: 'Yoga',
			link: '/yoga'
		},
		{
			name: 'Meditation',
			link: '/meditation'
		},
		{
			name: 'Healing Arts',
			link: '/healing-arts'
		},
		{
			name: 'Retreats & Events',
			link: '/retreats-events'
		}
	];
</script>

<section class="bg-black">
	<div class="container px-4 mx-auto">
		<div class="pt-24 pb-16">
			<div class="flex flex-wrap -mx-4 justify-between">
				<div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-10 lg:mb-0 text-center">
					<a class="inline-block mb-6 invert m-auto" href="#">
						<img src="/logo/logo-image.png" alt="" width="87" />
					</a>
					<p class="leading-8 mb-6 text-white">We're all just walking each other home.</p>
					<div class="flex items-center">
						<a class="inline-block mr-4" href="#">
							<img src="pstls-assets/logos/twitter.svg" alt="" />
						</a>
						<a class="inline-block mr-4" href="#">
							<img src="pstls-assets/logos/google.svg" alt="" />
						</a>
						<a class="inline-block" href="#">
							<img src="pstls-assets/logos/facebook.svg" alt="" />
						</a>
					</div>
				</div>
				<div class="w-full md:w-1/2 lg:w-auto px-4 mb-10 lg:mb-0">
					<h5 class="text-xl font-bold mb-5 text-white">{footerHeadingLeft}</h5>
					<ul>
						{#each footerMenuLeft as menuItem}
							<li class="mb-2">
								<a class="inline-block text-white hover:text-gray-200" href={menuItem.link}
									>{menuItem.name}</a
								>
							</li>
						{/each}
					</ul>
				</div>
				<div class="w-full md:w-1/2 lg:w-auto px-4 mb-10 lg:mb-0">
					<h5 class="text-xl font-bold mb-5 text-white">{footerHeadingRight}</h5>
					<ul>
						{#each footerMenuRight as menuItem}
							<li class="mb-2">
								<a class="inline-block text-white hover:text-gray-200" href={menuItem.link}
									>{menuItem.name}</a
								>
							</li>
						{/each}
					</ul>
				</div>
				<div class="w-full md:w-1/2 lg:w-1/4 px-4">
					<h5 class="text-xl font-bold mb-5 text-white">Newsletter</h5>
					<div class="flex items-center pl-3 pr-2 py-2 bg-white">
						<input
							class="xl:w-4/6 px-2 inline-block bg-transparent text-base outline-none"
							type="email"
							placeholder="Email Address"
						/>
						<button
							class="ml-auto inline-block px-3 py-2 bg-black hover:bg-gray-900 text-white font-bold transition duration-200"
							>Send</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="bg-gray-900">
		<div class="container px-4 mx-auto">
			<div class="py-5 text-center">
				<p class="text-gray-300">© Kerstin Kaufmann, Beyondmorrow e.U. 2022 All rights reserved.</p>
			</div>
		</div>
	</div>
</section>
