/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      createdAt
      description
      users {
        items {
          id
          projectID
          createdAt
          first_name
          last_name
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        description
        users {
          items {
            id
            projectID
            createdAt
            first_name
            last_name
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      projectID
      createdAt
      first_name
      last_name
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectID
        createdAt
        first_name
        last_name
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      posts {
        items {
          id
          title
          blog {
            id
            name
            posts {
              items {
                id
                title
                createdAt
                updatedAt
                blogPostsId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            items {
              id
              post {
                id
                title
                createdAt
                updatedAt
                blogPostsId
              }
              content
              createdAt
              updatedAt
              postCommentsId
            }
            nextToken
          }
          createdAt
          updatedAt
          blogPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          items {
            id
            title
            blog {
              id
              name
              posts {
                nextToken
              }
              createdAt
              updatedAt
            }
            comments {
              items {
                id
                content
                createdAt
                updatedAt
                postCommentsId
              }
              nextToken
            }
            createdAt
            updatedAt
            blogPostsId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      blog {
        id
        name
        posts {
          items {
            id
            title
            blog {
              id
              name
              posts {
                nextToken
              }
              createdAt
              updatedAt
            }
            comments {
              items {
                id
                content
                createdAt
                updatedAt
                postCommentsId
              }
              nextToken
            }
            createdAt
            updatedAt
            blogPostsId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          post {
            id
            title
            blog {
              id
              name
              posts {
                nextToken
              }
              createdAt
              updatedAt
            }
            comments {
              items {
                id
                content
                createdAt
                updatedAt
                postCommentsId
              }
              nextToken
            }
            createdAt
            updatedAt
            blogPostsId
          }
          content
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        blog {
          id
          name
          posts {
            items {
              id
              title
              blog {
                id
                name
                createdAt
                updatedAt
              }
              comments {
                nextToken
              }
              createdAt
              updatedAt
              blogPostsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        comments {
          items {
            id
            post {
              id
              title
              blog {
                id
                name
                createdAt
                updatedAt
              }
              comments {
                nextToken
              }
              createdAt
              updatedAt
              blogPostsId
            }
            content
            createdAt
            updatedAt
            postCommentsId
          }
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      post {
        id
        title
        blog {
          id
          name
          posts {
            items {
              id
              title
              blog {
                id
                name
                createdAt
                updatedAt
              }
              comments {
                nextToken
              }
              createdAt
              updatedAt
              blogPostsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        comments {
          items {
            id
            post {
              id
              title
              blog {
                id
                name
                createdAt
                updatedAt
              }
              comments {
                nextToken
              }
              createdAt
              updatedAt
              blogPostsId
            }
            content
            createdAt
            updatedAt
            postCommentsId
          }
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      content
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post {
          id
          title
          blog {
            id
            name
            posts {
              items {
                id
                title
                createdAt
                updatedAt
                blogPostsId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            items {
              id
              post {
                id
                title
                createdAt
                updatedAt
                blogPostsId
              }
              content
              createdAt
              updatedAt
              postCommentsId
            }
            nextToken
          }
          createdAt
          updatedAt
          blogPostsId
        }
        content
        createdAt
        updatedAt
        postCommentsId
      }
      nextToken
    }
  }
`;
export const usersByProjectId = /* GraphQL */ `
  query UsersByProjectId(
    $projectID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByProjectId(
      projectID: $projectID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        createdAt
        first_name
        last_name
        updatedAt
      }
      nextToken
    }
  }
`;
