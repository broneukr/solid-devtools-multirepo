import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "app.js",
  output: {
    file: "dist/app.min.js",
    format: "es",
    name: "app",
    sourcemap: false,
  },
  plugins: [
    resolve({
      mainFields: ['main']
    }),
    terser(),
  ],
};
