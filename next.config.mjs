/** @type {import('next').NextConfig} */
// Strict Mode double-mounts every component in dev. Each R3F <Canvas> then force-loses a WebGL
// context on the throwaway unmount, and Chrome eventually blocks the site for "causing context loss".
const nextConfig = { reactStrictMode: false };

export default nextConfig;
