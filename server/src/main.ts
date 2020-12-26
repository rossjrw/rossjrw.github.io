import fetch, { Response } from "node-fetch"
import { projects } from "@rossjrw/rossjrw.com-shared"

const TOKEN = process.env.GITHUB_GRAPHQL_TOKEN

async function gql (query: string): Promise<Response> {
  return fetch("https://api.github.com/graphql", {
    method: 'post',
    body: JSON.stringify(query),
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
}

export async function main (): Promise<void> {
  // const repos: string[] = listTopRepos()
  projects
  // repos.forEach

  // console.log(response)
}
