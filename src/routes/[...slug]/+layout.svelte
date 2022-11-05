<script>
	import '../../app.postcss';
	import Footer from '../../components/internal/Footer.svelte';
	import Navigation from '../../components/internal/Navigation.svelte';
	import CookieBanner from '../../components/internal/CookieBanner.svelte';
	import BackToTop from '../../components/internal/BackToTop.svelte';
</script>

<main>
	<Navigation/>
	<slot/>
	<Footer/>
	<CookieBanner/>
	<BackToTop />
</main>