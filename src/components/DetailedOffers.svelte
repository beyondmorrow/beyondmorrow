<script>
	import { storyblokEditable } from '@storyblok/svelte';
	import Heading from './Heading.svelte';

	export let blok;
</script>

<section class="container mx-auto text-center mt-16">
	<p class="font-spectral italic text-3xl">
		Lust auf etwas anderes? Entdecke <a class="font-bold" href="/meditation">Meditation</a> und
		<a class="font-bold" href="healing-arts">Healing Arts</a>.
	</p>
</section>

<section id="gruppenstunden" class="py-24">
	<div class="container px-4 mx-auto max-w-6xl">
		<div class="flex flex-wrap items-center">
			<div class="w-full lg:w-2/3 px-4 mb-16 lg:mb-0">
				<div class="text-left">
					<h2 class="font-spectral text-4xl lg:text-5xl font-heading mb-9 text-beyondpurple-900">
						Yoga in der Gruppe
					</h2>
					<p class="leading-8 mb-14">
						Du und dein Baby leistet in einer Schwangerschaft gemeinsam Großartiges. Nähre dich und
						dein Kind mit Bewegung, tiefer Atmung, Freude, Gemeinschaft und Geborgenheit und lege
						den Grundstein für eine lebenslange, feste, vertrauensvolle Beziehung. Nutze Yoga in der
						Schwangerschaft als wertvolle Begleitung auf körperlicher, geistiger und emotionaler
						Ebene. Navigiere selbstsicher durch die Veränderungen, die dir in dieser Zeit begegnen
						und erlaube dir, in die neue Rolle als Mutter hineinzuwachsen. Übe dich darin,
						Entspannung in intensiven Situationen möglich zu machen und gehe gestärkt und entspannt
						durch dieses außergewöhnliche und intensive Ereignis der Geburt deines Kindes.
					</p>
					<h3 class="font-spectral italic text-2xl">Warum Schwangerschaftsyoga?</h3>
					<ul class="leading-8 list-disc pl-6">
						<li>Nimm dir Zeit nur für dich und dein Baby – abseits vom Alltag</li>
						<li>Sammle Kraft und Energie für die bevorstehende Geburt</li>
						<li>Gewinne innere Stabilität, erzeuge Gleichgewicht und Selbstsicherheit</li>
						<li>Schöpfe aus den Ressourcen der Gruppe</li>
						<li>Schaffe Raum für dich und deine Bedürfnisse</li>
					</ul>
				</div>
			</div>
			<div class="w-full lg:w-1/3 px-4">
				<div class="relative">
					<img
						class="block w-full relative"
						src="https://a.storyblok.com/f/174226/1365x2048/ddeb605479/kakaolove-8.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	</div>
</section>
