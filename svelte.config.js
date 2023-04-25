import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: 'warn',
			handleMissingId: 'warn',
			entries: [
				'/', '/ueber-mich', '/yoga', '/nuad-klang', '/retreats-events', '/studio',
				'/studio/stundenplan', '/studio/preise', '/studio/lehrerinnen', '/studio/etiquette',
				'/kontakt/', '/faq', '/impressum', '/agb', '/datenschutz'
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