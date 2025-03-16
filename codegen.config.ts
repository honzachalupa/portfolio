import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.HYGRAPH_CONTENT_API_URL,
  generates: {
    "actions/hygraph/_generated/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
