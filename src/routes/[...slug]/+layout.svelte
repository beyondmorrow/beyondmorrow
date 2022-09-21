<script>
	import '../../app.postcss';
	import Footer from '../../components/Footer.svelte';
	import Navigation from '../../components/Navigation.svelte';
</script>

<main>
	<Navigation/>
	<slot/>
	<Footer/>
</main>