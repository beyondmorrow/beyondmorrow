<script>
	import { fade, scale } from 'svelte/transition';
	import { page } from '$app/stores';
	import Button from './Button.svelte';
	import * as c from '../pathConst';

	let displayMobileNav = false;
	function handleMobileNav() {
		displayMobileNav = !displayMobileNav;
	}

	const navEntries = [
		{
			name: 'Über mich',
			link: c.PATH_ABOUT,
		},
		{
			name: 'Yoga',
			link: c.PATH_YOGA,
		},
		{
			name: 'Meditation & Klang',
			link: c.PATH_MEDITATION_SOUND,
		},
		{
			name: 'Retreats & Events',
			link: c.PATH_RETREATS_EVENTS,
		},
		{

		},
		{
			name: 'Kontakt',
			link: c.PATH_CONTACT,
		}
	];
</script>

<section>
	<nav class="py-10" data-config-="">
		<div class="container px-4 mx-auto">
			<div class="flex items-center justify-between relative">
				<a class="inline-block" href="/">
					<img src="/logo/logo-text.png" alt="logo" class="w-40 sm:w-72"/>
				</a>
				<button on:click={handleMobileNav} class="lg:hidden navbar-burger">
					<img src="/icons/nav-burger.svg" alt="Menü" class="w-7"/>
				</button>
				<div class="hidden lg:block ml-auto mr-14">
					<ul class="inline-flex">
						{#each navEntries as entry}
							<li class="mr-8">
								<a class:text-beyondgrey={$page.url.pathname === entry.link} class="inline-block hover:text-gray-900 text-lg" href={entry.link}
									>{entry.name}</a
								>
							</li>
						{/each}
					</ul>
				</div>
				<div class="hidden lg:block">
					<Button />
				</div>
			</div>
		</div>
	</nav>

	<!-- MOBILE NAV -->
	{#if displayMobileNav}
			<div in:scale out:fade class="fixed top-0 left-0 bottom-0 w-full z-50" data-config-="">
				<nav class="relative flex flex-col h-full p-8 bg-white">
					<div class="flex items-center justify-between mb-12">
						<a on:click={handleMobileNav} class="items-center" href="/">
							<img src="/logo/logo-image.png" alt="logo" class="w-14"/>
						</a>
						<button
							on:click={handleMobileNav}
							class="inline-block focus:outline-none"
							type="button"
							aria-label="Close"
						>
							<img src="/icons/close-button.svg" alt="X" class="w-7"/>
						</button>
					</div>
					<div class="text-center">
						<ul>
							{#each navEntries as entry}
								<li on:click={handleMobileNav} class="py-3">
									<a class:text-beyondgrey={$page.url.pathname === entry.link} class="inline-block hover:text-gray-900" href={entry.link}
										>{entry.name}</a
									>
								</li>
							{/each}
						</ul>
					</div>
				</nav>
			</div>
	{/if}
</section>