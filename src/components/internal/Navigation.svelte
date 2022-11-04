<script>
	import { fade, scale, slide } from 'svelte/transition';
	import { page } from '$app/stores';
	import Button from './Button.svelte';
	import * as c from '../../pathConst';

	// Mobile menu
	let displayMobileNav = false;
	function handleMobileNav() {
		displayMobileNav = !displayMobileNav;
		expandedSubmenu = false;
	}

	let expandedSubmenu = false;
	function handleMobileSubmenu() {
		expandedSubmenu = !expandedSubmenu;
	}

	// Desktop menu
	let displayDropdown = false;
	function showDropdown() {
		displayDropdown = true;
	}
	function hideDropdown() {
		displayDropdown = false;
	}



	const navEntries = [
		{
			name: 'Über mich',
			link: c.PATH_ABOUT
		},
		{
			name: 'Yoga',
			link: c.PATH_YOGA
		},
		{
			name: 'Meditation & Klang',
			link: c.PATH_MEDITATION_SOUND
		},
		{
			name: 'Retreats & Events',
			link: c.PATH_RETREATS_EVENTS
		},
		{
			name: 'Studio',
			link: c.PATH_STUDIO,
			submenu: [
				{
					name: 'Stundenplan',
					link: c.PATH_TIMETABLE
				},
				{
					name: 'Preise',
					link: c.PATH_PRICES
				},
				{
					name: 'Lehrerinnen',
					link: c.PATH_TEAM
				},
				{
					name: 'Etiquette',
					link: c.PATH_ETIQUETTE
				}
			]
		},
		{
			name: 'Kontakt',
			link: c.PATH_CONTACT
		}
	];
</script>

<section>
	<nav class="py-10" data-config-="">
		<div class="container px-4 mx-auto">
			<div class="flex items-center justify-between relative">
				<a class="inline-block" href="/">
					<img src="/logo/logo-text.png" alt="logo" class="w-40 sm:w-72" />
				</a>
				<button on:click={handleMobileNav} class="xl:hidden navbar-burger">
					<img src="/icons/nav-burger.svg" alt="Menü" class="w-7" />
				</button>
				<div class="hidden xl:block ml-auto">
					<ul class="inline-flex">
						{#each navEntries as entry}
							{#if entry.hasOwnProperty('submenu')}
								<li
									class="mr-8"
									on:mouseover={showDropdown}
									on:focus={showDropdown}
									on:mouseleave={hideDropdown}
								>
									<a
										class:text-beyondgrey={$page.url.pathname === entry.link}
										class="hover:text-gray-700 text-lg"
										href={entry.link}
									>
										<div class="flex items-center justify-center">
											<span class="mr-1">{entry.name}</span>
											<img class="mt-1 w-2.5" src="/icons/arrow-down.svg" alt="" />
										</div>
									</a>
									{#if displayDropdown}
										<div
											in:slide={{ duration: 600 }}
											out:slide={{ duration: 0 }}
											class="bg-slate-50 text-black p-4 absolute shadow-xl"
										>
											<ul>
												{#each entry.submenu as subEntry}
													<li class="mb-1">
														<a
															on:click={hideDropdown}
															class:text-beyondgrey={$page.url.pathname === subEntry.link}
															class="hover:text-gray-700 text-md"
															href={subEntry.link}>{subEntry.name}</a
														>
													</li>
												{/each}
											</ul>
										</div>
									{/if}
								</li>
							{:else}
								<li class="mr-8">
									<a
										class:text-beyondgrey={$page.url.pathname === entry.link}
										class="hover:text-gray-700 text-lg"
										href={entry.link}
									>
										{entry.name}
									</a>
								</li>
							{/if}
						{/each}
					</ul>
				</div>
				<div class="hidden xl:block ml-14">
					<Button />
				</div>
			</div>
		</div>
	</nav>

	<!-- MOBILE NAV -->
	{#if displayMobileNav}
		<div
			in:scale
			out:fade
			class="fixed top-0 left-0 bottom-0 w-full h-full z-50 bg-white"
			data-config-=""
		>
			<nav class="flex flex-col p-8 ">
				<div class="flex items-center justify-between mb-12">
					<a on:click={handleMobileNav} class="items-center" href="/">
						<img src="/logo/logo-image.png" alt="logo" class="w-14" />
					</a>
					<button
						on:click={handleMobileNav}
						class="inline-block focus:outline-none"
						type="button"
						aria-label="Close"
					>
						<img src="/icons/close-button.svg" alt="X" class="w-7" />
					</button>
				</div>
				<div class="text-center">
					<ul>
						{#each navEntries as entry}
							<li class="py-3">
								{#if entry.hasOwnProperty('submenu')}
									<div class="flex justify-center items-center">
										<a
											on:click={handleMobileNav}
											class:text-beyondgrey={$page.url.pathname === entry.link}
											class="inline-block hover:text-gray-900 text-xl pl-3.5"
											href={entry.link}>{entry.name}</a
										>
										{#if expandedSubmenu}
											<button on:click={handleMobileSubmenu} class="px-4 py-3">
												<img
													class="w-4 mt-0.5"
													src="/icons/arrow-up.svg"
													alt="arrow down"
												/>
											</button>
										{:else}
											<button on:click={handleMobileSubmenu} class="px-4 py-3">
												<img
													class="w-4 mt-0.5"
													src="/icons/arrow-down.svg"
													alt="arrow down"
												/>
											</button>
										{/if}
									</div>
								{:else}
									<a
										on:click={handleMobileNav}
										class:text-beyondgrey={$page.url.pathname === entry.link}
										class="inline-block hover:text-gray-900 text-xl"
										href={entry.link}>{entry.name}</a
									>
								{/if}
								{#if entry.hasOwnProperty('submenu')}
									{#if expandedSubmenu}
										<div class="">
											<ul>
												{#each entry.submenu as subEntry}
													<li on:click={handleMobileNav} class="py-1.5">
														<a
															class:text-beyondgrey={$page.url.pathname === subEntry.link}
															class="inline-block hover:text-gray-900 text-base"
															href={subEntry.link}>{subEntry.name}</a
														>
													</li>
												{/each}
											</ul>
										</div>
									{/if}
								{/if}
							</li>
						{/each}
					</ul>
					<div class="mt-5">
						<div on:click={handleMobileNav}>
							<Button />
						</div>
					</div>
				</div>
			</nav>
		</div>
	{/if}
</section>
