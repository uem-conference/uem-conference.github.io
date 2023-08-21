/** @type {import('next').NextConfig} */
const nextConfig = {
	// this is usually true
	reactStrictMode: true,
	env: {
		app_name: "AdComSys",
	},
	images: {
		domains: ["flagsapi.com"], // Add 'flagsapi.com' to the array
	},
};

module.exports = nextConfig;
