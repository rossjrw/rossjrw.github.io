import fetch, { Response } from "node-fetch"
import { projects } from "@rossjrw/rossjrw.com-shared"
import { listTopReposQuery } from "./queries"
import { ListTopReposQuery } from "gql"

const TOKEN = process.env.GITHUB_GRAPHQL_TOKEN

async function gql <QueryResponse>(query: string): Promise<QueryResponse> {
  const response = await fetch("https://api.github.com/graphql", {
    method: 'POST',
    body: JSON.stringify({ query }),
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    }
  })

  return (<{ data: QueryResponse }>await response.json()).data
}

export async function main (): Promise<void> {

  // Get a total count of all my commits
  const topRepos = await gql<ListTopReposQuery>(listTopReposQuery)
  const commitCount = topRepos.user!.topRepositories.nodes!.reduce(
    (count, repository) => {
      if (repository?.object?.__typename === "Commit") {
        return count + repository.object.history.totalCount
      }
      return count
    }, 0
  )

  console.log(commitCount)

  const wantedRepos = projects.filter(
    project => 'git' in project
  ).map(
    project => project.git!.repo
  )

}
