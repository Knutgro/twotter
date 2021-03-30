/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      email
      username
      image
      twoots {
        items {
          id
          content
          image
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      email
      username
      image
      twoots {
        items {
          id
          content
          image
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      email
      username
      image
      twoots {
        items {
          id
          content
          image
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTwoot = /* GraphQL */ `
  subscription OnCreateTwoot {
    onCreateTwoot {
      id
      content
      image
      userID
      user {
        id
        name
        email
        username
        image
        twoots {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTwoot = /* GraphQL */ `
  subscription OnUpdateTwoot {
    onUpdateTwoot {
      id
      content
      image
      userID
      user {
        id
        name
        email
        username
        image
        twoots {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTwoot = /* GraphQL */ `
  subscription OnDeleteTwoot {
    onDeleteTwoot {
      id
      content
      image
      userID
      user {
        id
        name
        email
        username
        image
        twoots {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
