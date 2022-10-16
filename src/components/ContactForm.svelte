<script>
	import { renderRichText } from '@storyblok/svelte';
	import { page } from '$app/stores';
  import { applyAction } from '$app/forms';
  import { invalidateAll, goto } from '$app/navigation';

  export let form;
  let error;

	export let blok;

  // Render storyblok rich text to html
	const answerHTML = renderRichText(blok.answer);

  // Display error or success message after form submit
  const displaySuccessMessage = false;
  const displayErrorMessage = false;                        

  // Handle form
  export async function handleSubmit(event) {
    const data = new FormData(this);

    const response = await fetch(this.action, {
      method: 'POST',
      body: data,
    })

    const result = await response.json();

    if (result.type === 'success') {
      await invalidateAll();
    }

    applyAction(result);
  }
</script>

<section class="relative mb-16">
	<div class="container px-4 mx-auto">
		<div class="flex flex-wrap -mx-4">
			<div class="w-full lg:w-1/2 px-4 lg:pl-24 relative mb-20">
				<div class="py-2 max-w-md xl:max-w-lg mx-auto relative">
					<p class="text-beyondpurple-900 font-spectral font-semibold italic">{blok.question}</p>
					{@html answerHTML}
					<div class="mt-16 flex flex-wrap -mx-4">
						<div class="w-full lg:w-1/2 px-4 mb-10">
							<p class="text-gray-500">E-Mail</p>
							<a class="inline-block text-black hover:underline" href="mailto:{blok.email}"
								>{blok.email}</a
							>
						</div>
						<div class="w-full lg:w-1/2 px-4 mb-10">
							<p class="text-gray-500">Telefon</p>
							<a href="tel:{blok.phone}">{blok.phone}</a>
						</div>
					</div>
					<div class="flex flex-wrap -mx-4">
						<div class="w-full lg:w-1/2 px-4 mb-10">
							<p class="text-gray-500 mb-2">Social Media</p>
							<a class="inline-block" target="blank" href="https://www.facebook.com/beyondmorrow">
								<img src="/icons/facebook.svg" alt="" />
							</a>
							<a
								class="inline-block"
								target="blank"
								href="https://www.instagram.com/beyondmorrow_yoga/"
							>
								<img src="/icons/instagram.svg" alt="" />
							</a>
						</div>
						<div class="w-full lg:w-1/2 px-4">
							<p class="text-gray-500">Yoga Studio</p>
							<p>{blok.address}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full lg:w-1/2 px-4">
				<div class="max-w-md mx-auto py-2">
					{#if displaySuccessMessage}
						<div class="p-14 text-center">
              <img class="m-auto mb-5" src="/icons/heart.svg" alt="heart"/>
							<p>{blok.successMessage}</p>
						</div>
					{:else}
						<form name="contact" method="POST" on:submit|preventDefault={handleSubmit} action="/.netlify/functions/contactForm">
							<input
								required
								name="name"
								class="block w-full py-2 px-4 mb-6 text-lg border-b border-gray-400 placeholder-beyondgrey outline-none"
								type="text"
								placeholder="Vorname"
							/>
							<input
								required
								name="surname"
								class="block w-full py-2 px-4 mb-6 text-lg border-b border-gray-400 placeholder-beyondgrey outline-none"
								type="text"
								placeholder="Nachname"
							/>
							<input
								required
								name="email"
								class="block w-full py-2 px-4 mb-6 text-lg border-b border-gray-400 placeholder-beyondgrey outline-none"
								type="email"
								placeholder="E-Mail-Adresse"
							/>
							<textarea
								required
								name="message"
								class="block w-full py-2 px-4 mb-6 text-lg border-b border-gray-400 placeholder-beyondgrey outline-none resize-none"
								cols="30"
								rows="10"
								placeholder="Deine Nachricht"
							/>
              <input type="hidden" name="contact" value="contact">
							<button
								type="submit"
								class="rounded-sm drop-shadow-md inline-block w-full md:w-auto py-3 px-8 text-center text-white font-bold bg-beyondpurple-900 hover:bg-beyondpurple-800 transition duration-200"
							>
								Absenden
							</button>
						</form>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>