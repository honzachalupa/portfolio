import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "", // TODO: Load it from env
  generates: {
    "hygraph/_generated/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
