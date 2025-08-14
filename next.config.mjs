/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
            remotePatterns: [
                {
                    protocol: "https",
                    hostname: "cdn.praxime.me",
                },
                {
                    protocol: "https",
                    hostname: "khlahvgbqpyjfmwrjayp.supabase.co",
                },
                
            ]
        },
};

export default nextConfig;
