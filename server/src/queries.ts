/* Gets a list of my top repositories and counts my commits in each, to get an
 * approximate total aggregate number of commits.
 */
export const listTopReposQuery = /* GraphQL */`
  query listTopRepos {
    user(login: "rossjrw") {
      topRepositories(
        first: 100,
        orderBy: {
          field: PUSHED_AT,
          direction: DESC
        }
      ) {
        totalCount
        nodes {
          nameWithOwner
          object(expression: "HEAD") {
            __typename
            ... on Commit {
              history(
                author: {
                  emails: ["rossjrw@gmail.com"]
                }
              ) {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`

/* Gets the number of my commits in a given repository, counted from the
 * history of the specified branch, and also a language breakdown of that
 * branch.
 */
export const getRepoInfoQuery = /* GraphQL */`
  query getRepoInfo(
    $repoName: String!
    $repoOwner: String!
    $mainBranch: String!
  ) {
    repository(
      name: $repoName
      owner: $repoOwner
    ) {
      object(expression: $mainBranch) {
        ... on Commit {
          history(
            first: 100
            author: {
              emails: ["rossjrw@gmail.com"]
            }
          ) {
            totalCount
            nodes {
              id
              pushedDate
            }
          }
        }
      }
    }
  }
`
