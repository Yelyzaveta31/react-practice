import { Connect, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { Component } from "react";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
resolve:{
    alias:{
      components: "/src/components"
    //   data: "/src/data"
    styles: "/src/styles"
    }
}
});
