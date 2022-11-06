const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				beyondpurple: {
					800: '#6e1c58',
					900: '#591647',
				},
				beyondrose: {
					100: '#f9f1ec',
					500: '#ecd4c5',
					900: '#d8a588'
				},
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
