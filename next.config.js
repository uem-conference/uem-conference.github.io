/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		app_name: "International Conference on Advanced Computing Systems",
	},
	images: {
		domains: ["flaghitcounter.com"],
	},
};

module.exports = nextConfig;
