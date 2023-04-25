import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: 'warn',
			handleMissingId: 'warn',
			crawl: true,
			entries: [
				'/', '/ueber-mich', '/yoga', '/nuad-klang', '/retreats-events', '/studio',
				'/studio/stundenplan', '/studio/preise', '/studio/lehrerinnen', '/studio/etiquette',
				'/kontakt/', '/faq', '/impressum', '/agb', '/datenschutz',
				'/retreats-events/slow-down-herbstretreat',
				'/retreats-events/Yogawald-Wochenende'
			]
		},
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;