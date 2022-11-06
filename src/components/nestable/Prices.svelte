<script>
	import Button from '../internal/Button.svelte';
	export let blok;
</script>

<div class="mb-24 mx-auto">
	<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
		{#each blok.prices as price}
			<div class="mb-6">
				<div
					class="block rounded-sm bg-gradient-to-t from-white shadow-md h-full"
                    class:to-beyondrose-100={!Boolean(price.highlight)}
					class:via-beyondrose-100={Boolean(price.highlight)}
					class:to-beyondrose-500={Boolean(price.highlight)}
				>
					<div class="p-6 border-b border-gray-200 text-center">
						<p class="font-spectral mb-1 text-xl">
							<strong>{price.title}</strong>
						</p>
						<p class="mb-4 text-md">
							{price.subtitle}
						</p>
						<h3 class="text-2xl mb-6">
							<strong>€ {price.priceStandard}</strong>
							{#if price.priceReduced}
								<small class="text-gray-600 text-sm">€ {price.priceReduced}*</small>
							{/if}
						</h3>
						<Button link="{price.buttonLink}" text={price.buttonText} />
					</div>
					<div class="p-6">
						{price.description}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
