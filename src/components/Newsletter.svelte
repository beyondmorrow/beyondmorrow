<script>
	let successfulSubscription = false;
    // https://carouth.com/articles/netlify-function-mailchimp/
    // https://www.netlify.com/blog/easy-html-forms-in-sveltekit-with-netlify-forms/
</script>

<div class="text-white w-full md:w-1/2 lg:w-1/4 px-4">
	<h5 class="text-xl font-bold mb-5 text-white">Newsletter</h5>
	<form name="newsletter" method="POST" action="/" data-netlify="true">
		{#if successfulSubscription}
			<div class="">
				<span>Vielen Dank für's anmelden. Bitte bestätige das E-Mail in deinem Postfach.</span>
			</div>
		{:else}
			<div class="flex items-center pl-3 pr-2 py-2 bg-white">
				<input
					class="xl:w-4/6 px-2 inline-block bg-transparent text-base outline-none text-black"
					type="email"
					name="email"
					placeholder="Deine E-Mail-Adresse"
					required
				/>
				<button
					type="submit"
					class="ml-auto inline-block px-3 py-2 bg-black hover:bg-gray-900 font-bold transition duration-200"
					>Anmelden</button
				>
			</div>
            <p class="mt-2 text-xs">
                Mit dem Klick auf 'Anmelden' stimmst du zu, dass ich deine Informationen im Rahmen meiner
                Datenschutzerklärung verarbeite.
            </p>
		{/if}
	</form>
</div>
