/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	images: {
		dangerouslyAllowSVG: true,
		// formats: ['image/avif', 'image/webp'],
		domains: [
			'avatars.githubusercontent.com',
			'secure.gravatar.com',
			'en.gravatar.com',
			'unsplash.com',
			'images.unsplash.com',
			'tailwindui.com',
			'gravatar.com',
			'images.unsplash.com',
			'lh3.googleusercontent.com',
			'thrangra.sirv.com',
			'assets-global.website-files.com',
			'media.licdn.com',
		],
	},
};

module.exports = nextConfig;
