import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
	webpack: (config) => {
		config.resolve.alias["@"] = path.resolve(__dirname);
		return config;
	},
	images: {
		remotePatterns: [
			new URL("https://cdn.10minuteschool.com/*/**"),
			new URL("https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/*/**"),
		],
	},
};

export default nextConfig;
