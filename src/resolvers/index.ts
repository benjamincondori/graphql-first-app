import { GraphQLError } from "graphql";
import { users } from "../datasources/users.data";

// Resolver
export const resolvers = {
	Query: {
		users: () => users,
    user: (parent, args, context, info) => {
      const { uid } = args.id;
      console.log(context);
      
      const user = users.find((user) => user.id === uid);
      
      if (!user) {
        throw new GraphQLError(`User with id ${uid} not found`, {
          extensions: {
            code: "USER_NOT_FOUND",
          }
        });
      }
      
      return user;
    },
    usersApi: async (parent, args, { dataSources }, info) => {
      return dataSources.usersApi.getUsers();
    }
	},
};


