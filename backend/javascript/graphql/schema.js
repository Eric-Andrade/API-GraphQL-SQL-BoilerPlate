export default `
scalar Date 

type Status {
    message: String!
}
type Auth {
    token: String!
}
type User {
    _id: ID!
    username: String!
    firstname: String!
    lastname: String
    avatar: String
    password: String
    email: String!
    createdAt: Date!
    updatedAt: Date!
}

type Me {
    _id: ID!
    username: String!
    firstname: String!
    lastname: String
    avatar: String
    password: String
    email: String!
    createdAt: Date!
    updatedAt: Date!
}

type Query {
    me: Me
}

type Mutation {
    signupUser(email: String!, fullName: String, password: String!, avatar: String, username: String): Auth
    loginUser(email: String!, password: String!): Auth
}

schema {
    query: Query
    mutation: Mutation
}
`
