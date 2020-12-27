import { generate } from "@graphql-codegen/cli"

const TOKEN = process.env.GITHUB_GRAPHQL_TOKEN

export default async function makeCodegenConfig () {
  /**
   * Generates a TypeScript declaration file for the GitHub GraphQL endpoint
   * and saves it to gql.d.ts.
   */
  await generate({
    schema: {
      'https://api.github.com/graphql': {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    },
    documents: "src/queries.ts",
    generates: {
      './gql.d.ts': {
        plugins: [ 'typescript', 'typescript-operations' ]
      }
    }
  }, true)
}
