/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [{ protocol: "https", port: "", hostname: "https://image.tmdb.org/t/p/" }],
	},
};

export default nextConfig;
