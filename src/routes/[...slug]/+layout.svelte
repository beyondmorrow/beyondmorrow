<script>
	import '../../app.postcss';
	import Footer from '../../components/Footer.svelte';
	import Navigation from '../../components/Navigation.svelte';
	import CookieBanner from '../../components/CookieBanner.svelte';
</script>

<main>
	<Navigation/>
	<slot/>
	<Footer/>
	<CookieBanner/>
</main>