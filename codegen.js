module.exports = {
    schema: [
        {
            "https://graphql.fauna.com/graphql": {
                headers: {
                    Authorization:
                        "Bearer fnAD6tCtipACAHF4aMUKSJXaeovmV7V2xEUeHlRP",
                },
            },
        },
    ],
    documents: ["./src/**/*.tsx", "./src/**/*.ts"],
    overwrite: true,
    generates: {
        "./src/generated/graphql.tsx": {
            plugins: [
                "typescript",
                "typescript-operations",
                "typescript-react-apollo",
            ],
            config: {
                skipTypename: false,
                withHooks: true,
                withHOC: false,
                withComponent: false,
            },
        },
        "./graphql.schema.json": {
            plugins: ["introspection"],
        },
    },
};
