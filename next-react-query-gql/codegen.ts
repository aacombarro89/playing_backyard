
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000",
  documents: "graphql/**/*.graphql",
  ignoreNoDocuments: true,
  generates: {
    'graphql/generated/graphql.ts': {
      // preset: 'client',
      // plugins: []
      plugins: ['add', 'typescript', 'typescript-operations', 'typescript-react-query'],
      config: {
        content: ['/* eslint-disable */', '/// @ts-nocheck'],
        exposeQueryKeys: true,
        exposeFetcher: true,
        fetcher: 'graphql-request',
        endpoint: process.env.API_URL,
      }
    }
  }
};

export default config;
