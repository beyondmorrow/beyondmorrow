<script>
	import '../../app.postcss';
	import Footer from '../../components/nestable/Footer.svelte';
	import Navigation from '../../components/nestable/Navigation.svelte';
	import CookieBanner from '../../components/nestable/CookieBanner.svelte';
</script>

<main>
	<Navigation/>
	<slot/>
	<Footer/>
	<CookieBanner/>
</main>