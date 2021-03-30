/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
  username: string,
  image?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id?: string,
  name?: string,
  email?: string,
  username?: string,
  image?: string | null,
  twoots?: ModelTwootConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelTwootConnection = {
  __typename: "ModelTwootConnection",
  items?:  Array<Twoot | null > | null,
  nextToken?: string | null,
};

export type Twoot = {
  __typename: "Twoot",
  id?: string,
  content?: string,
  image?: string | null,
  userID?: string,
  user?: User,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  username?: string | null,
  image?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateTwootInput = {
  id?: string | null,
  content: string,
  image?: string | null,
  userID: string,
};

export type ModelTwootConditionInput = {
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelTwootConditionInput | null > | null,
  or?: Array< ModelTwootConditionInput | null > | null,
  not?: ModelTwootConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateTwootInput = {
  id: string,
  content?: string | null,
  image?: string | null,
  userID?: string | null,
};

export type DeleteTwootInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelTwootFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelTwootFilterInput | null > | null,
  or?: Array< ModelTwootFilterInput | null > | null,
  not?: ModelTwootFilterInput | null,
};

export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    username: string,
    image?: string | null,
    twoots?:  {
      __typename: "ModelTwootConnection",
      items?:  Array< {
        __typename: "Twoot",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    username: string,
    image?: string | null,
    twoots?:  {
      __typename: "ModelTwootConnection",
      items?:  Array< {
        __typename: "Twoot",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    username: string,
    image?: string | null,
    twoots?:  {
      __typename: "ModelTwootConnection",
      items?:  Array< {
        __typename: "Twoot",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTwootMutationVariables = {
  input?: CreateTwootInput,
  condition?: ModelTwootConditionInput | null,
};

export type CreateTwootMutation = {
  createTwoot?:  {
    __typename: "Twoot",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      image?: string | null,
      twoots?:  {
        __typename: "ModelTwootConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTwootMutationVariables = {
  input?: UpdateTwootInput,
  condition?: ModelTwootConditionInput | null,
};

export type UpdateTwootMutation = {
  updateTwoot?:  {
    __typename: "Twoot",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      image?: string | null,
      twoots?:  {
        __typename: "ModelTwootConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTwootMutationVariables = {
  input?: DeleteTwootInput,
  condition?: ModelTwootConditionInput | null,
};

export type DeleteTwootMutation = {
  deleteTwoot?:  {
    __typename: "Twoot",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      image?: string | null,
      twoots?:  {
        __typename: "ModelTwootConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    username: string,
    image?: string | null,
    twoots?:  {
      __typename: "ModelTwootConnection",
      items?:  Array< {
        __typename: "Twoot",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      image?: string | null,
      twoots?:  {
        __typename: "ModelTwootConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTwootQueryVariables = {
  id?: string,
};

export type GetTwootQuery = {
  getTwoot?:  {
    __typename: "Twoot",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      image?: string | null,
      twoots?:  {
        __typename: "ModelTwootConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTwootsQueryVariables = {
  filter?: ModelTwootFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTwootsQuery = {
  listTwoots?:  {
    __typename: "ModelTwootConnection",
    items?:  Array< {
      __typename: "Twoot",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        username: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    username: string,
    image?: string | null,
    twoots?:  {
      __typename: "ModelTwootConnection",
      items?:  Array< {
        __typename: "Twoot",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    username: string,
    image?: string | null,
    twoots?:  {
      __typename: "ModelTwootConnection",
      items?:  Array< {
        __typename: "Twoot",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    username: string,
    image?: string | null,
    twoots?:  {
      __typename: "ModelTwootConnection",
      items?:  Array< {
        __typename: "Twoot",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTwootSubscription = {
  onCreateTwoot?:  {
    __typename: "Twoot",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      image?: string | null,
      twoots?:  {
        __typename: "ModelTwootConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTwootSubscription = {
  onUpdateTwoot?:  {
    __typename: "Twoot",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      image?: string | null,
      twoots?:  {
        __typename: "ModelTwootConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTwootSubscription = {
  onDeleteTwoot?:  {
    __typename: "Twoot",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      image?: string | null,
      twoots?:  {
        __typename: "ModelTwootConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
