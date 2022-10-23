<script>
	let displayErrorMessage = false;
	let displaySuccessMessage = false;

	export async function handleSubmit(event) {
		const formData = new FormData(this);

		const response = await fetch('/.netlify/functions/subscribe', {
			method: 'POST',
			body: JSON.stringify({
				email: formData.get('email').toString(),
			})
		})

		if (response.status === 200) {
			displaySuccessMessage = true;
		} else {
			displayErrorMessage = true;
		}
	};
</script>

<div class="text-white w-full md:w-1/2 lg:w-1/4 px-4">
	<h5 class="text-xl font-bold mb-5 text-white">Newsletter</h5>
	{#if displaySuccessMessage}
		<div>
			<span>Vielen Dank für's anmelden. Bitte bestätige das E-Mail in deinem Postfach.</span>
		</div>
	{:else if displayErrorMessage}
		<div>
			<span
				>Leider ist bei der Anmeldung ein fehler aufgetreten. Bitte kontaktiere mich per <a
					href="mailto:kerstin@beyondmorrow.com">E-Mail</a
				>.</span
			>
		</div>
	{:else}
		<form name="newsletter" method="POST" on:submit|preventDefault={handleSubmit}>
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
				<a href="/datenschutz">Datenschutzerklärung</a> verarbeite.
			</p>
		</form>
	{/if}
</div>
