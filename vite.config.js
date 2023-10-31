import { sveltekit } from '@sveltejs/kit/vite';
import basicSsl from "@vitejs/plugin-basic-ssl";
import { isoImport } from 'vite-plugin-iso-import'

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit(), basicSsl(), isoImport()],
    server: {
        https: true,
    },
};
 
export default config;