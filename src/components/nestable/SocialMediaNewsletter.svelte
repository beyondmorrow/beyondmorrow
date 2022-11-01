<script>
	import * as c from '../../pathConst';

	let displayErrorMessage = false;
	let displaySuccessMessage = false;

	async function handleSubmit(event) {
		const formData = new FormData(this);

		const response = await fetch('/.netlify/functions/subscribe', {
			method: 'POST',
			body: JSON.stringify({
				email: formData.get('email').toString()
			})
		});

		if (response.status === 200) {
			displaySuccessMessage = true;
		} else {
			displayErrorMessage = true;
		}
	}

	export let blok;
</script>

<div
	class="flex flex-wrap items-center md:flex-nowrap bg-beyondrose-100 max-w-[50rem] mx-auto mb-24 py-14 px-5 md:px-20"
>
	<div class="shrink-0 mx-auto mb-8 md:mb-0">
		<div class="flex md:flex-col justify-center items-center md:pr-20 gap-5">
			<a href="https://www.instagram.com/beyondmorrow_yoga/" target="blank">
				<img class="w-14" src="/icons/instagram.svg" alt="" />
			</a>
			<a href="https://www.facebook.com/beyondmorrow" target="blank">
				<img class="w-14" src="/icons/facebook.svg" alt="" />
			</a>
		</div>
	</div>

	<div class="w-full">
		<div class="mb-5">
			<h5 class="text-xl font-bold">{blok.heading}</h5>
			<h6 class="text-lg">{blok.subheading}</h6>
		</div>
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
			<form name="newsletterModule" method="POST" on:submit|preventDefault={handleSubmit}>
				<div class="flex items-center p-2 bg-white">
					<input
						class="pr-2 bg-transparent text-black outline-none min-w-0"
						type="email"
						name="email"
						placeholder="E-Mail"
						required
					/>
					<button
						type="submit"
						class="ml-auto rounded-sm py-3 px-2 text-center text-white font-bold bg-beyondpurple-900 hover:bg-beyondpurple-800 transition duration-200"
						>Anmelden</button
					>
				</div>
				<p class="mt-2 text-xs">
					Mit dem Klick auf 'Anmelden' stimmst du zu, dass ich deine Informationen im Rahmen meiner
					<a href={c.PATH_PRIVACY}>Datenschutzerklärung</a> verarbeite.
				</p>
			</form>
		{/if}
	</div>
</div>
