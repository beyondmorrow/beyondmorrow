const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				beyondpurple: '#591647',
				beyondrose: '#d8a588',
				beyondamber: '#a54521',
				beyondyellow: '#fecb13',
				beyondgrey: '#a3a3a3'
			},
			fontFamily: {
				northwell: ['Northwell'],
				muli: ['Muli'],
				spectral: ['Spectral'],
			}
		}
	},

	plugins: []
};

module.exports = config;
