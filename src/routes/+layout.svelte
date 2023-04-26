<script>
	import '../app.postcss';
	import Footer from '../components/internal/Footer.svelte';
	import Navigation from '../components/internal/Navigation.svelte';
	import CookieBanner from '../components/internal/CookieBanner.svelte';
	import BackToTop from '../components/internal/BackToTop.svelte';
	import { consent } from '../modules/cookieBanner';
	import { page } from '$app/stores'
</script>

<svelte:head>
	<title>beyondmorrow - {$page.data.story.name}</title>
	<meta name="description" content={$page.data.story.content.metaDescription} />

	{#if $consent === String(true)}
		<!-- Google tag (gtag.js) -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-5HWRZDBCQ2"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());

			gtag('config', 'G-5HWRZDBCQ2', { 'anonymize_ip': true });
		</script>
	{/if}
</svelte:head>

<main>
	<Navigation/>
	<slot/>
	<Footer/>
	<CookieBanner/>
	<BackToTop />
</main>