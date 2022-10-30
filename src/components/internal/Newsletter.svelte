<script>
	import * as c from '../../pathConst'

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

<div class="text-white w-full max-w-sm md:w-1/2 lg:w-1/4 mx-auto text-center lg:mx-0 lg:text-left">
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
			<div class="flex items-center pl-2 pr-2 py-2 bg-white">
				<input
					class="xl:w-4/6 pr-2 bg-transparent text-black outline-none min-w-0"
					type="email"
					name="email"
					placeholder="E-Mail"
					required
				/>
				<button
					type="submit"
					class="ml-auto px-2 py-2 bg-black hover:bg-gray-900 font-bold transition duration-200"
					>Anmelden</button
				>
			</div>
			<p class="mt-2 text-xs">
				Mit dem Klick auf 'Anmelden' stimmst du zu, dass ich deine Informationen im Rahmen meiner
				<a href="{c.PATH_PRIVACY}">Datenschutzerklärung</a> verarbeite.
			</p>
		</form>
	{/if}
</div>
