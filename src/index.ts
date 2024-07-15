import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import { MyContext } from "./context";
import { UsersApi } from "./datasources/users-api.data";

const server = new ApolloServer<MyContext>({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: {
		port: 4000,
	},
	context: async () => {
		const { cache } = server;
		
		return {
			// user: "Benjamin",
			// dbURI: "mongodb://localhost:27017",
			dataSources: {
				usersApi: new UsersApi({ cache }),
			}
		}
	},
});

console.log(`🚀 Server ready at ${url}`);
