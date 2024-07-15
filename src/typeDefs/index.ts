// Query type
export const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
    roles: [Role]
  }

  input UserID {
    uid: ID
  }

  type Role {
    id: ID!
    name: String!
  }

  type Query {
    users: [User]
    user(id: UserID!): User
    usersApi: [User]
  }
`;
