/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects(){
        return [
            {
                source: "/",
                destination: "/conversations",
                permanent: true
            }
        ]
    },
  // Enable App Router
  experimental: {
    appDir: true,
  },
  // Configure Clerk authentication paths
  publicRuntimeConfig: {
    clerk: {
      publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    },
  },
  // Define which routes are public and which require authentication
  matcher: [
    // Public routes that don't require authentication
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Routes that will be handled by Clerk authentication
    "/(api|trpc)(.*)",
  ],
};

export default nextConfig;
