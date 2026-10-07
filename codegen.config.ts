import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.HYGRAPH_CONTENT_API_URL,
  documents: ["actions/hygraph/queries/*.graphql"],
  generates: {
    "actions/hygraph/_generated/": {
      preset: "client",
      plugins: [],
      config: { scalars: { DateTime: "string", Date: "string", Hex: "string" } },
    },
  },
};

export default config;
