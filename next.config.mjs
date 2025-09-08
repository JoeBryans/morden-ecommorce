/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "cdn.dummyjson.com",
            },
            {
                protocol: "https",
                hostname: "avatar.iran.liara.run",
            },
            {
                protocol: "https",
                hostname: "utfs.io",
            },
        ]
    }
};

export default nextConfig;
