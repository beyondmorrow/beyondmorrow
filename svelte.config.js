import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			crawl: true,
			enabled: true,
			entries: ['*'],
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;