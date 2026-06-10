import { build } from "esbuild";

const config = {
  entryPoints: ["src/server/index.js"],
  bundle: true,
  platform: "node",
  format: "esm",
  outfile: "dist/server.js",
  sourcemap: true,
  target: "node22",
  keepNames: true,
  metafile: true,
  packages: "external",
  mainFields: ["module", "main"],
  conditions: ["import", "module", "default"],
};

build(config)
  .then((res) => {
    console.log("Build complete successfully.");
  })
  .catch((err) => {
    console.error("Failed to build", err);
    process.exit(1);
  });
