import pkg from "./package.json";

export default {
  input: "src/my-component.js",
  directory: "dist",
  output: [
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    },
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    }
  ],
  plugins: [
  ]
};