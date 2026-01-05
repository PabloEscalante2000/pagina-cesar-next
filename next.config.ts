import type { NextConfig } from "next";

// ? configuracion para dev
// const nextConfig: NextConfig = {
//   /* config options here */
// };

// ? configuracion para build
const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true, // obligatorio para export
  }, 
  trailingSlash: true    // rutas /pagina/ → /pagina/index.html
}

export default nextConfig;
