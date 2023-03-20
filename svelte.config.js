import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '200.html' // MAYBE DIFFERENT FOR GCP HOSTING!!
		})
	}
};

export default config;
