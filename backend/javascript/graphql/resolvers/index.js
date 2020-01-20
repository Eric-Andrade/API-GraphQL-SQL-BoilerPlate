import GraphQLDate from 'graphql-date'
import UsersResolver from './users.resolver'
// import User from '../../models/users.model'

export default {
    Date: GraphQLDate,
    Query: {
        me: UsersResolver.me
    },
    Mutation:{
        signupUser: UsersResolver.signupUser,
        loginUser: UsersResolver.loginUser,
    }
}