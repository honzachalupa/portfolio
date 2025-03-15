import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/cldw3q4vm20nn01rr5du78z95/master", // TODO: Load it from env
  generates: {
    "hygraph/_generated/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
