<script>
	import Newsletter from './Newsletter.svelte';
	import * as c from '../../pathConst';
	import { revokeConsent, consent } from '../../modules/cookieBanner';

	const footerHeadingLeft = 'Hilfe';
	const footerMenuLeft = [
		{
			name: 'FAQ',
			link: c.PATH_FAQ
		},
		{
			name: 'Stundenplan',
			link: c.PATH_TIMETABLE
		},
		{
			name: 'Preise',
			link: c.PATH_PRICES
		},
		{
			name: 'Kontakt',
			link: c.PATH_CONTACT
		}
	];

	const footerHeadingRight = 'Mein Angebot';
	const footerMenuRight = [
		{
			name: 'Yoga',
			link: c.PATH_YOGA
		},
		{
			name: 'Meditation',
			link: c.PATH_MEDITATION_SOUND
		},
		{
			name: 'Retreats & Events',
			link: c.PATH_RETREATS_EVENTS
		}
	];
</script>

<section class="bg-black">
	<div class="container px-4 mx-auto">
		<div class="pt-24 pb-16">
			<div class="flex flex-wrap mx-1 justify-between">
				<div class="w-full md:w-1/2 lg:w-1/4 mb-10 lg:mb-0 text-center">
					<a class="inline-block mb-6 invert m-auto" href="/">
						<img src="/logo/logo-image.png" alt="" width="87" />
					</a>
					<p class="leading-8 mb-6 text-white">We're all just walking each other home.</p>
					<div class="flex items-center justify-center">
						<a class="inline-block mr-4 invert" href="https://www.instagram.com/beyondmorrow_yoga/">
							<img src="/icons/instagram.svg" alt="" />
						</a>
						<a class="inline-block invert" href="https://www.facebook.com/beyondmorrow">
							<img src="/icons/facebook.svg" alt="" />
						</a>
					</div>
				</div>
				<div class="w-full md:w-1/2 lg:w-auto mb-10 lg:mb-0 text-center lg:text-left">
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
				<div class="w-full md:w-1/2 lg:w-auto mb-10 lg:mb-0 text-center lg:text-left">
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
				<Newsletter />
			</div>	
		</div>
	</div>
	<div class="bg-gray-900">
		<div class="container px-4 mx-auto">
			<div class="py-5 text-center text-gray-300 md:lg:flex">
				<p class="flex-none">© Kerstin Kaufmann, Beyondmorrow e.U. 2022 All rights reserved.</p>
				<div class="grow" />
				<div class="flex gap-4 justify-center flex-wrap">
					{#if $consent === String(true) || $consent === String(false)}
						<button class="underline" on:click={revokeConsent}>
							Cookie-Einstellungen zurücksetzen
						</button>
					{/if}
					<a class="underline" href={c.PATH_IMPRINT}>Impressum</a>
					<a class="underline" href={c.PATH_TC}>AGB</a>
					<a class="underline" href={c.PATH_PRIVACY}>Datenschutz</a>
				</div>
			</div>
		</div>
	</div>
</section>
