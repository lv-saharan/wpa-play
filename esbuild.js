import pkg from "./package.json" assert { type: "json" };
import esbuild from "esbuild";
import fs from "fs";
import path from "path";
import { sassPlugin } from "esbuild-sass-plugin";
import { dev } from "local-dev-server";

const target = "./dist";
//把这些资源目录一同拷贝
const [mode] = process.argv.splice(2);
//esbuild 如果所有入口都是一个根目录会提升一级目录 ！！！
const outRoot = "";
//console.log(outRoot, "outRoot")
const entryPoints = ["./src"];

const externalRules = [];
for (let [key, rule] of Object.entries(pkg.externals ?? {})) {
  externalRules.push({
    filter: new RegExp(key),
    path: typeof rule === "string" ? rule : rule[mode == "all" ? "prod" : mode],
  });
}

const externalPlugin = {
  name: "external",
  setup(build) {
    for (let rule of externalRules) {
      build.onResolve({ filter: rule.filter }, (args) => {
        console.log(
          "find rule",
          rule,
          args.path.replace(rule.filter, rule.path)
        );
        return {
          path: args.path.replace(rule.filter, rule.path),
          external: true,
        };
      });
    }
  },
};
const options = {
  jsxFactory: "h",
  jsxFragment: "h.f",
  format: "esm",
  bundle: true,
  sourcemap: mode == "dev",
  minify: true,
  charset: "utf8",
  entryPoints,
  outfile: `${target}/index.js`,
  plugins: [
    externalPlugin,
    sassPlugin({
      type: "css-text",
    }),
  ],
};

if (mode == "dev") {
  let buildResult = null;
  const response = (filePath, res) => {
    const outfile = buildResult?.outputFiles.find(
      (file) => file.path == filePath
    );
    if (outfile) {
      res.setHeader("Content-Type", "application/javascript;charset=utf-8");
      res.end(outfile.contents);
      return true;
    }
    return false;
  };
  const { reload } = dev(
    { ...pkg.localDev.server, response },
    pkg.localDev.apis
  );
  const ctx = await esbuild.context({
    ...options,
    write: false,
    outfile: "index.js",
    plugins: [
      {
        name: "watch-plugin",
        setup(build) {
          build.onStart(() => {
            console.log(
              "starting build.............................................."
            );
          });
          build.onEnd((result) => {
            if (result.errors.length == 0) {
              buildResult = result;
              reload("[app rebuild ok]");
            } else {
              console.log("build error", result.errors);
            }
          });
        },
      },
      externalPlugin,
      sassPlugin({
        type: "css-text",
      }),
    ],
  });
  await ctx.watch();
  console.log("watching.........................................");
} else if (mode == "prod" || mode == "all") {
  //拷贝所有资源目录
  fs.cpSync("./contents", path.join(target, "contents"), {
    recursive: true,
  });
  fs.cpSync("index.html", path.join(target, "index.html"));

  await esbuild.build(options);

  console.log(`build  ok!`);
}
