import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    overwrite: true,
    schema: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldw3q4vm20nn01rr5du78z95/master",
    generates: {
        "src/utils/codegen/": {
            preset: "client",
            plugins: [],
        },
        /* "src/utils/codegen/graphql.schema.json": {
            plugins: ["introspection"],
        }, */
    },
};

export default config;
