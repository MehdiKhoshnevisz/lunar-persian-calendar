import path from "path";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    dts(),
    tsConfigPaths(),
    dts({
      include: ["src/"],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/App.tsx"),
      name: "lunar-persian-calendar",
      formats: ["es", "umd"],
      fileName: (format) => `lunar-persian-calendar.${format}.js`,
    },
  },
  rollupOptions: {
    external: ["react", "react-dom"],
    output: {
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
  },
  emptyOutDir: true,
}));
