/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      projectID
      createdAt
      first_name
      last_name
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      projectID
      createdAt
      first_name
      last_name
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      projectID
      createdAt
      first_name
      last_name
      updatedAt
    }
  }
`;
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
