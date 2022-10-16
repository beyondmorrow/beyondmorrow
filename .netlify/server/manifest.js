export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","fonts/Muli-ExtraLight.woff","fonts/Northwell Alt.woff","fonts/Spectral-ExtraLight.woff","fonts/Spectral-ExtraLightItalic.woff","fonts/Spectral-SemiBoldItalic.woff","icons/arrow-down.svg","icons/arrow-up.svg","icons/close-button.svg","icons/facebook.svg","icons/heart.svg","icons/instagram.svg","icons/nav-burger.svg","logo/logo-image.png","logo/logo-text.png"]),
	mimeTypes: {".png":"image/png",".woff":"font/woff",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-68c32f7a.js","imports":["_app/immutable/start-68c32f7a.js","_app/immutable/chunks/index-022ac4bb.js","_app/immutable/chunks/singletons-0db11d98.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "[...slug]",
				pattern: /^(?:\/(.*))?\/?$/,
				names: ["slug"],
				types: [null],
				page: { layouts: [0,2], errors: [1,,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
