<script>
	import '../../app.postcss';
	import Footer from '../../components/internal/Footer.svelte';
	import Navigation from '../../components/internal/Navigation.svelte';
	import CookieBanner from '../../components/internal/CookieBanner.svelte';
</script>

<main>
	<Navigation/>
	<slot/>
	<Footer/>
	<CookieBanner/>
</main>