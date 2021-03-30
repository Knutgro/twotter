/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createTwoot = /* GraphQL */ `
  mutation CreateTwoot(
    $input: CreateTwootInput!
    $condition: ModelTwootConditionInput
  ) {
    createTwoot(input: $input, condition: $condition) {
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
export const updateTwoot = /* GraphQL */ `
  mutation UpdateTwoot(
    $input: UpdateTwootInput!
    $condition: ModelTwootConditionInput
  ) {
    updateTwoot(input: $input, condition: $condition) {
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
export const deleteTwoot = /* GraphQL */ `
  mutation DeleteTwoot(
    $input: DeleteTwootInput!
    $condition: ModelTwootConditionInput
  ) {
    deleteTwoot(input: $input, condition: $condition) {
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
