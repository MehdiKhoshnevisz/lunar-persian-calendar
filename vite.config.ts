const packageJSON = require("./package.json");
import path from "path";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [react(), tsConfigPaths(), dts()],
  build: {
    minify: true,
    lib: {
      entry: path.resolve(__dirname, "src/App.tsx"),
      name: "LunarPersianCalendar",
      fileName: "lunar-persian-calendar",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: [...Object.keys(packageJSON.dependencies)],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  emptyOutDir: true,
}));
